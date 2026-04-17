/**
 * Vercel Serverless Function — creates a Stripe Checkout Session (hosted payment page).
 * Env: STRIPE_SECRET_KEY (required). Optional: SITE_URL for redirects when Origin is missing.
 */
import Stripe from 'stripe'
import { getMerchCatalogEntry } from './merchCatalog.js'

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

  const secret = process.env.STRIPE_SECRET_KEY
  if (!secret) {
    return res.status(503).json({ error: 'Stripe is not configured (missing STRIPE_SECRET_KEY)' })
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

  const stripe = new Stripe(secret)
  const origin = resolveOrigin(req)

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${origin}/store/cart?checkout=success`,
      cancel_url: `${origin}/store/cart?checkout=cancel`,
      billing_address_collection: 'required',
    })

    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error', err)
    return res.status(500).json({
      error: err?.message || 'Could not start checkout',
    })
  }
}
