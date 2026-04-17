/**
 * Store cart & Stripe Checkout — /store/cart
 */
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import MerchCurrencyToggle from '../components/MerchCurrencyToggle'
import { useMerchCart } from '../context/MerchCartContext'
import { useMerchCurrency } from '../context/MerchCurrencyContext'
import { getMerchBySlug } from '../data/merchProducts'
import { formatMerchPriceFromBrl } from '../utils/merchPricing'

export default function MerchCartPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { currency } = useMerchCurrency()
  const {
    lines,
    itemCount,
    subtotalBrl,
    setLineQuantity,
    removeLine,
    clearCart,
    getCheckoutItems,
  } = useMerchCart()

  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState(null)
  const [thankYou, setThankYou] = useState(false)
  const [checkoutCancelled, setCheckoutCancelled] = useState(false)

  useEffect(() => {
    const c = searchParams.get('checkout')
    if (!c) return
    if (c === 'success') {
      setThankYou(true)
      clearCart()
    } else if (c === 'cancel') {
      setCheckoutCancelled(true)
    }
    const next = new URLSearchParams(searchParams)
    next.delete('checkout')
    setSearchParams(next, { replace: true })
  }, [searchParams, clearCart, setSearchParams])

  async function startStripeCheckout() {
    setCheckoutError(null)
    setCheckoutCancelled(false)
    const items = getCheckoutItems()
    if (!items.length) return
    setCheckoutLoading(true)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          currency: currency.toLowerCase(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data.error || `Checkout failed (${res.status})`)
      }
      if (!data.url) throw new Error('No checkout URL returned')
      window.location.href = data.url
    } catch (e) {
      setCheckoutError(e?.message || 'Could not start checkout')
    } finally {
      setCheckoutLoading(false)
    }
  }

  return (
    <article className="min-w-0 bg-[#FAF8F4] pb-[max(5rem,calc(5rem+env(safe-area-inset-bottom,0px)))] pt-20 text-gray-800 sm:pb-24 sm:pt-24">
      <div className="mx-auto max-w-3xl min-w-0 px-4 sm:px-6 md:px-10 lg:px-12">
        <FadeIn>
          <nav className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gray-500">
            <Link to="/store" className="text-terracotta transition hover:text-deep-green">
              Store
            </Link>
            <span className="mx-2 text-gray-400" aria-hidden>
              /
            </span>
            <span className="text-deep-green/80">Cart</span>
          </nav>
        </FadeIn>

        {thankYou && (
          <div className="mb-8 rounded-2xl border border-deep-green/20 bg-white px-4 py-4 font-body text-sm text-deep-green shadow-sm sm:px-6">
            Thank you — your payment was submitted in Stripe Checkout. You will receive a receipt by email from Stripe when
            the charge completes.
          </div>
        )}

        {checkoutCancelled && (
          <div className="mb-8 rounded-2xl border border-deep-green/15 bg-white/80 px-4 py-3 font-body text-sm text-gray-700 sm:px-6">
            Checkout was cancelled. Your cart can be updated below whenever you are ready.
          </div>
        )}

        <FadeIn delay={40}>
          <div className="flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="min-w-0 font-serif text-3xl font-bold tracking-tight text-deep-green sm:text-4xl">Your cart</h1>
            <div className="w-full min-w-0 overflow-x-auto [-webkit-overflow-scrolling:touch] pb-1 sm:w-auto sm:overflow-visible sm:pb-0">
              <div className="flex justify-center sm:justify-end">
                <MerchCurrencyToggle />
              </div>
            </div>
          </div>
          <p className="mt-3 font-body text-sm leading-relaxed text-gray-600">
            {itemCount ? `${itemCount} ${itemCount === 1 ? 'item' : 'items'} · secure payment with Stripe` : 'Your cart is empty.'}
          </p>
        </FadeIn>

        {lines.length > 0 && (
          <FadeIn delay={80}>
            <ul className="mt-10 space-y-4">
              {lines.map((line) => {
                const product = getMerchBySlug(line.slug)
                if (!product) return null
                const lineTotalBrl = product.priceBrl * line.quantity
                const thumb = product.images?.[0]
                return (
                  <li
                    key={line.slug}
                    className="flex flex-col gap-4 rounded-2xl border-2 border-deep-green/15 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:gap-5 sm:p-5"
                  >
                    {thumb && (
                      <Link
                        to={`/store/${line.slug}`}
                        className="mx-auto h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-deep-green/10 bg-white sm:mx-0 sm:h-24 sm:w-24"
                      >
                        <img src={thumb} alt={product.name} className="h-full w-full object-contain object-center p-1" />
                      </Link>
                    )}
                    <div className="min-w-0 flex-1 text-center sm:text-left">
                      <Link
                        to={`/store/${line.slug}`}
                        className="break-words font-serif text-lg font-semibold text-deep-green transition hover:text-terracotta"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-1 font-sans text-sm font-medium text-terracotta-dark">
                        {formatMerchPriceFromBrl(lineTotalBrl, currency)}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                        <label className="flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-600">
                          Qty
                          <input
                            type="number"
                            inputMode="numeric"
                            min={1}
                            max={99}
                            value={line.quantity}
                            onChange={(e) => {
                              const v = Number.parseInt(e.target.value, 10)
                              if (Number.isNaN(v) || v < 1) setLineQuantity(line.slug, 1)
                              else setLineQuantity(line.slug, Math.min(99, v))
                            }}
                            className="h-11 min-h-[44px] w-16 rounded-lg border border-deep-green/20 bg-[#FAF8F4] px-2 text-center text-base font-sans text-deep-green focus:border-deep-green focus:outline-none focus:ring-2 focus:ring-deep-green/25"
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => removeLine(line.slug)}
                          className="inline-flex min-h-[44px] items-center px-2 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-terracotta underline-offset-4 transition hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-10 min-w-0 rounded-2xl border-2 border-deep-green/15 bg-white p-4 shadow-sm sm:p-6">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Subtotal</span>
                <span className="font-sans text-xl font-semibold text-deep-green sm:text-2xl">
                  {formatMerchPriceFromBrl(subtotalBrl, currency)}
                </span>
              </div>
              <p className="mt-3 font-body text-xs leading-relaxed text-gray-600">
                You will enter card details on Stripe&apos;s secure checkout page. Totals use the currency selected above.
              </p>
              {checkoutError && (
                <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 font-sans text-xs text-red-800" role="alert">
                  {checkoutError}
                </p>
              )}
              <button
                type="button"
                onClick={startStripeCheckout}
                disabled={checkoutLoading}
                className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-full border-2 border-deep-green bg-deep-green px-8 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-deep-green/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {checkoutLoading ? 'Redirecting…' : 'Continue to payment'}
              </button>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={120}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/store"
              className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full border-2 border-deep-green/35 bg-transparent px-8 py-3 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-green transition hover:bg-deep-green/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2 sm:w-auto"
            >
              Continue shopping
            </Link>
          </div>
        </FadeIn>
      </div>
    </article>
  )
}
