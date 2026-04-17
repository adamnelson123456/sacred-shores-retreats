/**
 * Yamuna Retreat merch — draft layout only.
 * Not linked from the nav or site; open via /shop (direct URL only).
 */
import FadeIn from '../components/FadeIn'
import MerchCurrencyToggle from '../components/MerchCurrencyToggle'
import { Link } from 'react-router-dom'
import MerchImageCarousel from '../components/MerchImageCarousel'
import { useMerchCurrency } from '../context/MerchCurrencyContext'
import { merchProducts } from '../data/merchProducts'
import { formatMerchPriceFromBrl } from '../utils/merchPricing'

export default function MerchPage() {
  const { currency } = useMerchCurrency()
  return (
    <article className="min-w-0 bg-[#FAF8F4] pb-[max(4rem,calc(4rem+env(safe-area-inset-bottom,0px)))] pt-20 text-gray-800 sm:pb-20 sm:pt-24">
      <section className="relative overflow-hidden border-b border-deep-green/[0.07]">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-hero-gold/[0.12] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-seafoam/40 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl min-w-0 px-4 py-14 sm:px-6 sm:py-18 md:px-10 md:py-22 lg:px-12">
          <FadeIn>
            <p className="mb-5 flex flex-wrap items-center justify-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-terracotta sm:justify-start sm:text-xs">
              <span className="h-px w-10 bg-hero-gold/80 sm:w-14" aria-hidden />
              Yamuna Retreat
            </p>
            <h1 className="text-center font-serif text-[clamp(2rem,5.2vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-deep-green sm:text-left">
              Shop
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-center font-body text-base leading-[1.75] text-gray-600 sm:mx-0 sm:text-left sm:text-lg">
              Wearables and keepsakes that carry the retreat home — mug, tote, hoodie, and shirt. This page is a draft:
              pricing and availability will be confirmed before anything goes live.
            </p>
            <p className="mt-4 text-center font-sans text-xs font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-left">
              Draft preview · not listed in navigation
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl min-w-0 px-4 py-14 sm:px-6 md:px-10 lg:px-12 lg:py-18">
        <FadeIn delay={80}>
          <div className="mb-10 flex w-full min-w-0 flex-col items-center gap-5 sm:mb-12 md:mx-auto md:max-w-4xl md:flex-row md:items-end md:justify-between">
            <h2 className="w-full min-w-0 text-center font-serif text-2xl font-bold text-deep-green sm:text-3xl md:w-auto md:text-left">
              Collection
            </h2>
            <div className="w-full min-w-0 overflow-x-auto overflow-y-visible [-webkit-overflow-scrolling:touch] pb-1 md:w-auto md:overflow-visible md:pb-0">
              <div className="flex min-w-0 justify-center md:justify-end">
                <MerchCurrencyToggle className="md:self-end" />
              </div>
            </div>
          </div>
          <ul className="mx-auto grid min-w-0 max-w-4xl justify-items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
            {merchProducts.map((p) => (
              <li
                key={p.slug}
                className="flex w-full min-w-0 flex-col overflow-hidden rounded-3xl border-2 border-deep-green/20 bg-white shadow-[0_12px_40px_-18px_rgba(15,49,35,0.18)] transition hover:border-deep-green/40 hover:shadow-[0_18px_48px_-16px_rgba(15,49,35,0.22)]"
              >
                <MerchImageCarousel images={p.images} altBase={p.name} variant="card" />

                <div className="flex flex-1 flex-col px-4 pb-5 pt-8 sm:px-5 sm:pb-6 sm:pt-10">
                  <h3 className="truncate font-serif text-base font-bold leading-snug text-deep-green sm:text-lg">
                    {p.name}
                  </h3>
                  <p className="mt-2 max-h-[2.7em] overflow-hidden font-body text-xs leading-snug text-gray-600 sm:text-sm">
                    {p.shortDescription}
                  </p>
                  <span
                    className="mt-3 block h-px w-10 bg-deep-green/15"
                    aria-hidden
                  />
                  <p className="mt-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                    MSRP
                  </p>
                  <p className="mt-1 font-sans text-sm font-semibold tracking-wide text-terracotta-dark sm:text-base">
                    {formatMerchPriceFromBrl(p.priceBrl, currency)}
                  </p>
                  <Link
                    to={`/shop/${p.slug}`}
                    className="mt-4 inline-flex w-full min-h-[44px] items-center justify-center rounded-full border-2 border-deep-green bg-deep-green px-4 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-deep-green/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2 sm:text-[11px]"
                  >
                    Shop now
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <section className="border-t border-deep-green/[0.08] bg-white/60">
        <div className="mx-auto max-w-3xl min-w-0 px-4 py-14 text-center sm:px-6 md:px-10 lg:px-12">
          <FadeIn delay={120}>
            <p className="font-body text-base leading-relaxed text-gray-600 sm:text-lg">
              Prefer to feel the week in person first? The retreat is where these threads make sense.
            </p>
            <Link
              to="/retreat"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-deep-green bg-deep-green px-8 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-deep-green/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2"
            >
              Explore the retreat
            </Link>
          </FadeIn>
        </div>
      </section>
    </article>
  )
}
