/**
 * Single shop product — /shop/:slug (not linked from main nav).
 */
import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import MerchCurrencyToggle from '../components/MerchCurrencyToggle'
import MerchImageCarousel from '../components/MerchImageCarousel'
import { useMerchCurrency } from '../context/MerchCurrencyContext'
import { useMerchCart } from '../context/MerchCartContext'
import { getMerchBySlug } from '../data/merchProducts'
import { formatMerchPriceFromBrl } from '../utils/merchPricing'

export default function MerchProductPage() {
  const { currency } = useMerchCurrency()
  const { addToCart } = useMerchCart()
  const navigate = useNavigate()
  const { slug } = useParams()
  const [quantity, setQuantity] = useState(1)
  const product = slug ? getMerchBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <article className="min-w-0 bg-[#FAF8F4] pb-[max(5rem,calc(5rem+env(safe-area-inset-bottom,0px)))] pt-20 text-gray-800 sm:pb-24 sm:pt-24">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 md:px-10 lg:px-12">
        <FadeIn>
          <nav className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gray-500">
            <Link to="/shop" className="text-terracotta transition hover:text-deep-green">
              Shop
            </Link>
            <span className="mx-2 text-gray-400" aria-hidden>
              /
            </span>
            <span className="text-deep-green/80">{product.name}</span>
          </nav>
        </FadeIn>

        <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,auto)_minmax(0,1fr)] lg:items-center lg:gap-14">
          <FadeIn>
            <div className="mx-auto w-full max-w-[min(100%,21rem)] overflow-hidden rounded-3xl border-2 border-deep-green/15 bg-white shadow-[0_16px_48px_-24px_rgba(15,49,35,0.25)] sm:max-w-[23rem] lg:mx-0 lg:max-w-[26rem]">
              <MerchImageCarousel
                images={product.images}
                altBase={product.name}
                variant="detail"
              />
            </div>
          </FadeIn>

          <div className="flex min-w-0 flex-col lg:pt-2">
            <FadeIn delay={60}>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-terracotta">Yamuna Retreat</p>
              <h1 className="mt-3 break-words font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-deep-green">
                {product.name}
              </h1>
              <p className="mt-4 font-body text-base leading-relaxed text-gray-600 sm:text-lg">{product.shortDescription}</p>
              <div className="mt-6 flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
                <div className="min-w-0">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">MSRP</p>
                  <p className="mt-1 font-sans text-xl font-semibold tracking-wide text-terracotta-dark sm:text-2xl">
                    {formatMerchPriceFromBrl(product.priceBrl, currency)}
                  </p>
                </div>
                <div className="w-full min-w-0 overflow-x-auto [-webkit-overflow-scrolling:touch] pb-1 sm:w-auto sm:overflow-visible sm:pb-0">
                  <div className="flex justify-center sm:justify-end">
                    <MerchCurrencyToggle />
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="mt-8 space-y-4 border-t border-deep-green/10 pt-8">
                {product.details.map((para, i) => (
                  <p key={i} className="font-body text-base leading-[1.8] text-gray-700">
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>

            {product.highlights?.length > 0 && (
              <FadeIn delay={160}>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {product.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-deep-green/20 bg-white px-4 py-2 font-sans text-xs font-medium uppercase tracking-[0.12em] text-deep-green/85"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}

            <FadeIn delay={200}>
              <div className="mt-10 flex flex-col gap-4">
                <div className="flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
                  <label className="flex w-full max-w-[8rem] flex-col gap-1 font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-600 sm:w-fit sm:max-w-none">
                    Quantity
                    <input
                      type="number"
                      inputMode="numeric"
                      min={1}
                      max={99}
                      value={quantity}
                      onChange={(e) => {
                        const v = Number.parseInt(e.target.value, 10)
                        if (Number.isNaN(v) || v < 1) setQuantity(1)
                        else setQuantity(Math.min(99, v))
                      }}
                      className="h-11 min-h-[44px] w-[3.25rem] rounded-lg border border-deep-green/25 bg-white px-1.5 text-center text-base font-sans tabular-nums leading-none text-deep-green [-moz-appearance:textfield] [appearance:textfield] focus:border-deep-green focus:outline-none focus:ring-1 focus:ring-deep-green/25 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(product.slug, quantity)
                      navigate('/shop/cart')
                    }}
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border-2 border-deep-green bg-deep-green px-8 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-deep-green/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2 sm:min-w-[12rem]"
                  >
                    Add to cart
                  </button>
                </div>
                <Link
                  to="/shop"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-deep-green/35 bg-transparent px-8 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-green transition hover:bg-deep-green/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2 sm:w-fit"
                >
                  Back to collection
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </article>
  )
}
