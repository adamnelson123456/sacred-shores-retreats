/**
 * Vercel Serverless Function — creates a Stripe Checkout Session (hosted payment page).
 *
 * Env (Vercel → Settings → Environment Variables):
 *   STRIPE_SECRET_KEY — required, from Stripe Dashboard → API keys (sk_test_… or sk_live_…)
 *   SITE_URL — optional; used for success/cancel URLs when Origin header is missing
 *
 * Uses your default Stripe account (no Connect). Payments appear in Dashboard → Payments.
 */
import Stripe from 'stripe'
import { getMerchCatalogEntry } from './merchCatalog.js'

/** Countries where we’ll collect a shipping address (physical merch). Adjust in this file if needed. */
const SHIPPING_COUNTRIES = [
  'BR',
  'US',
  'CA',
  'GB',
  'DE',
  'FR',
  'IT',
  'ES',
  'PT',
  'NL',
  'BE',
  'CH',
  'AT',
  'IE',
  'AU',
  'NZ',
  'MX',
  'AR',
  'CL',
  'CO',
]

const FX = {
  brlPerUsd: 5.45,
  brlPerEur: 5.95,
}

function unitAmountMinorUnits(priceBrl, currencyLower) {
  if (currencyLower === 'brl') return Math.round(priceBrl * 100)
  if (currencyLower === 'usd') return Math.round((priceBrl / FX.brlPerUsd) * 100)
  if (currencyLower === 'eur') return Math.round((priceBrl / FX.brlPerEur) * 100)
  throw new Error('unsupported_currency')
}

function resolveOrigin(req) {
  const fromHeader = req.headers?.origin || req.headers?.referer
  if (fromHeader) {
    try {
      return new URL(fromHeader).origin
    } catch {
      /* fall through */
    }
  }
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, '')
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return 'http://localhost:5180'
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const secret = process.env.STRIPE_SECRET_KEY?.trim()
  if (!secret) {
    return res.status(503).json({
      error:
        'Stripe is not configured. In Vercel → Settings → Environment Variables, add STRIPE_SECRET_KEY (from Stripe Dashboard → API keys), then redeploy.',
    })
  }
  if (!secret.startsWith('sk_')) {
    return res.status(503).json({
      error:
        'STRIPE_SECRET_KEY must be your Stripe secret key (starts with sk_test_ or sk_live_). Check Vercel environment variables.',
    })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return res.status(400).json({ error: 'Invalid JSON body' })
    }
  }

  const { items, currency } = body || {}
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' })
  }

  const currencyLower = String(currency || 'brl').toLowerCase()
  if (!['brl', 'usd', 'eur'].includes(currencyLower)) {
    return res.status(400).json({ error: 'Invalid currency' })
  }

  const lineItems = []
  for (const row of items) {
    const slug = typeof row.slug === 'string' ? row.slug : ''
    const qty = Math.min(99, Math.max(1, parseInt(row.quantity, 10) || 0))
    if (!slug || qty < 1) {
      return res.status(400).json({ error: 'Invalid line item' })
    }
    const product = getMerchCatalogEntry(slug)
    if (!product) {
      return res.status(400).json({ error: `Unknown product: ${slug}` })
    }
    const unitAmount = unitAmountMinorUnits(product.priceBrl, currencyLower)
    lineItems.push({
      quantity: qty,
      price_data: {
        currency: currencyLower,
        unit_amount: unitAmount,
        product_data: {
          name: product.name,
          metadata: { slug: product.slug },
        },
      },
    })
  }

  const stripe = new Stripe(secret, {
    appInfo: { name: 'Yamuna Retreats Shop', version: '1.0.0' },
  })
  const origin = resolveOrigin(req)

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${origin}/shop/cart?checkout=success`,
      cancel_url: `${origin}/shop/cart?checkout=cancel`,
      billing_address_collection: 'required',
      shipping_address_collection: { allowed_countries: SHIPPING_COUNTRIES },
      phone_number_collection: { enabled: true },
      metadata: {
        source: 'yamuna-shop',
        currency: currencyLower,
      },
    })

    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error', err)
    return res.status(500).json({
      error: err?.message || 'Could not start checkout',
    })
  }
}
