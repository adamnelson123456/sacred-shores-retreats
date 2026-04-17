/**
 * Horizontal snap carousel for merch — dots + hover next control; swipe still works.
 */
import { useCallback, useEffect, useRef, useState } from 'react'

function ChevronRightIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

export default function MerchImageCarousel({ images, altBase, variant = 'card' }) {
  const scrollRef = useRef(null)
  const [active, setActive] = useState(0)

  const updateActiveFromScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el || !images?.length) return
    const w = el.clientWidth
    if (w <= 0) return
    const i = Math.round(el.scrollLeft / w)
    setActive(Math.min(Math.max(0, i), images.length - 1))
  }, [images?.length])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateActiveFromScroll()
    el.addEventListener('scroll', updateActiveFromScroll, { passive: true })
    const ro = new ResizeObserver(() => updateActiveFromScroll())
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', updateActiveFromScroll)
      ro.disconnect()
    }
  }, [updateActiveFromScroll])

  const goTo = useCallback(
    (i) => {
      const el = scrollRef.current
      if (!el || !images?.length) return
      const w = el.clientWidth
      el.scrollTo({ left: Math.min(i, images.length - 1) * w, behavior: 'smooth' })
    },
    [images?.length],
  )

  const goNext = useCallback(() => {
    if (!images?.length) return
    const next = (active + 1) % images.length
    goTo(next)
  }, [active, goTo, images?.length])

  if (!images?.length) return null

  const padding = variant === 'detail' ? 'p-4 sm:p-6' : 'p-1 sm:p-1.5'
  const frame =
    variant === 'detail'
      ? 'h-[260px] w-full sm:h-[300px] md:h-[320px] lg:h-[360px]'
      : 'h-[280px] w-full sm:h-[320px] lg:h-[360px]'

  const multi = images.length > 1

  return (
    <div className={`w-full ${variant === 'card' ? 'rounded-t-3xl bg-white' : ''}`}>
      <div
        className={`relative group overflow-hidden bg-white ${
          variant === 'card' ? 'rounded-t-3xl' : 'rounded-2xl'
        }`}
      >
        <div
          ref={scrollRef}
          className="flex touch-pan-x overflow-x-auto scroll-smooth overscroll-x-contain snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label={`${altBase} photos`}
        >
          {images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="min-w-full shrink-0 snap-center snap-always"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${images.length}`}
            >
              <div className={`${frame} overflow-hidden`}>
                <img
                  src={src}
                  alt={i === 0 ? altBase : `${altBase} — view ${i + 1}`}
                  className={`h-full w-full object-contain object-center transition duration-500 ${padding}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                  sizes={
                    variant === 'detail'
                      ? '(min-width: 1024px) 420px, (min-width: 640px) 90vw, 100vw'
                      : '(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw'
                  }
                />
              </div>
            </div>
          ))}
        </div>

        {multi && (
          <button
            type="button"
            onClick={goNext}
            className="absolute right-1 top-1/2 z-10 flex h-11 w-11 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-deep-green/90 text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2 sm:right-2 md:right-3"
            aria-label={`Next ${altBase} photo`}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      {multi && (
        <div
          className="flex flex-wrap justify-center gap-x-1 gap-y-2 px-2 pb-2 pt-1"
          role="tablist"
          aria-label={`${altBase} photo navigation`}
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Photo ${i + 1} of ${images.length}`}
              onClick={() => goTo(i)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-1"
            >
              <span
                className={`block rounded-full transition-all duration-200 ${
                  active === i ? 'h-1.5 w-5 bg-deep-green' : 'h-1.5 w-1.5 bg-deep-green/40 hover:bg-deep-green/60'
                }`}
                aria-hidden
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
