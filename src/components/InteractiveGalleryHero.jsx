/**
 * InteractiveGalleryHero — premium travel / editorial gallery: full-bleed background
 * follows the active card; foreground card row + left copy update with motion.
 *
 * Content: pass `slides` (see typedef below). Swap images/copy in your data module.
 */
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useViewportFullBleed } from '../hooks/useViewportFullBleed'

/**
 * @typedef {{ id: string; title: string; subtitle: string; description: string; backgroundImage: string; thumbnailImage: string }} InteractiveGallerySlide
 */

function ChevronLeft({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const textBlockMotion = {
  initial: { opacity: 0, y: 22 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.32, ease: [0.4, 0, 1, 1] },
  },
}

const bgMotion = {
  initial: { opacity: 0, scale: 1.07 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: { duration: 0.55, ease: [0.4, 0, 1, 1] },
  },
}

/**
 * @param {object} props
 * @param {InteractiveGallerySlide[]} props.slides
 * @param {string} [props.sectionId]
 * @param {string} [props.className]
 * @param {{ label: string; to: string }} [props.cta]
 * @param {number | false} [props.autoplayMs] — default `9000`; `false` to disable
 * @param {boolean} [props.fullBleed] — default `true`
 */
export default function InteractiveGalleryHero({
  slides,
  sectionId,
  className = '',
  cta = { label: 'Discover the week', to: '/retreat#retreat-flow' },
  autoplayMs = 9000,
  fullBleed = true,
}) {
  const n = slides.length
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const stripRef = useRef(null)
  const cardRefs = useRef([])
  const lastInteractRef = useRef(0)
  const touchStartX = useRef(null)

  const active = slides[activeIndex] ?? slides[0]
  const bleedStyle = useViewportFullBleed(sectionRef, fullBleed)

  const markInteract = useCallback(() => {
    lastInteractRef.current = Date.now()
  }, [])

  const go = useCallback(
    (dir) => {
      markInteract()
      setActiveIndex((i) => (i + dir + n) % n)
    },
    [markInteract, n]
  )

  const select = useCallback(
    (i) => {
      markInteract()
      setActiveIndex(i)
    },
    [markInteract]
  )

  useLayoutEffect(() => {
    const strip = stripRef.current
    const card = cardRefs.current[activeIndex]
    if (!strip || !card) return
    requestAnimationFrame(() => {
      const se = strip.getBoundingClientRect()
      const ce = card.getBoundingClientRect()
      const pad = 24
      if (ce.left < se.left + pad) {
        strip.scrollTo({ left: strip.scrollLeft + (ce.left - se.left) - pad, behavior: 'smooth' })
      } else if (ce.right > se.right - pad) {
        strip.scrollTo({ left: strip.scrollLeft + (ce.right - se.right) + pad, behavior: 'smooth' })
      }
    })
  }, [activeIndex])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  useEffect(() => {
    if (autoplayMs === false || autoplayMs <= 0) return undefined
    const id = window.setInterval(() => {
      if (Date.now() - lastInteractRef.current < 22000) return
      setActiveIndex((i) => (i + 1) % n)
    }, autoplayMs)
    return () => window.clearInterval(id)
  }, [autoplayMs, n])

  useEffect(() => {
    const next = slides[(activeIndex + 1) % n]
    const prev = slides[(activeIndex - 1 + n) % n]
    ;[next, prev].forEach((s) => {
      const img = new Image()
      img.src = s.backgroundImage
    })
  }, [activeIndex, n, slides])

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (e) => {
    const start = touchStartX.current
    touchStartX.current = null
    if (start == null) return
    const end = e.changedTouches[0]?.clientX
    if (end == null) return
    const dx = end - start
    if (dx < -52) go(1)
    else if (dx > 52) go(-1)
  }

  const CtaLink =
    cta.to.startsWith('/') || cta.to.startsWith('#') ? (
      <Link
        to={cta.to}
        className="inline-flex min-h-[48px] items-center rounded-full border border-white/90 px-7 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
      >
        {cta.label}
      </Link>
    ) : (
      <a
        href={cta.to}
        className="inline-flex min-h-[48px] items-center rounded-full border border-white/90 px-7 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
      >
        {cta.label}
      </a>
    )

  if (!n) return null

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      style={fullBleed ? bleedStyle : undefined}
      data-nav-theme="dark"
      className={`scroll-mt-20 relative shrink-0 overflow-hidden bg-neutral-950 text-white ${className}`}
    >
      {/* ——— Full-section background: swaps with `active` — replace URLs in your slides data ——— */}
      <div className="pointer-events-none absolute inset-0 z-0 min-h-[100svh] sm:min-h-[100dvh]">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={active.id}
            aria-hidden
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{ backgroundImage: `url("${active.backgroundImage}")` }}
            initial={bgMotion.initial}
            animate={bgMotion.animate}
            exit={bgMotion.exit}
          />
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] min-h-[100svh] bg-gradient-to-r from-black/80 via-black/45 to-black/25 sm:min-h-[100dvh]" />
      <div className="pointer-events-none absolute inset-0 z-[1] min-h-[100svh] bg-gradient-to-t from-black/60 via-transparent to-black/20 sm:min-h-[100dvh]" />

      {/* Main immersive column + foreground cards */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col pl-[calc(1.25rem+env(safe-area-inset-left,0px))] pr-[calc(1.25rem+env(safe-area-inset-right,0px))] pb-[max(6rem,calc(5rem+env(safe-area-inset-bottom,0px)))] pt-24 sm:pl-[calc(2rem+env(safe-area-inset-left,0px))] sm:pr-[calc(2rem+env(safe-area-inset-right,0px))] sm:pb-28 sm:pt-28 md:pl-[calc(3rem+env(safe-area-inset-left,0px))] md:pr-[calc(3rem+env(safe-area-inset-right,0px))] lg:flex-row lg:items-center lg:pb-32 lg:pt-32">
        {/* Left: subtitle → title → body → CTA — on mobile stacks above the card row */}
        <div className="order-1 flex min-w-0 flex-none flex-col justify-center pb-10 lg:order-none lg:w-[min(44%,560px)] lg:min-w-0 lg:flex-none lg:justify-center lg:pb-0 lg:pr-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={textBlockMotion.initial}
              animate={textBlockMotion.animate}
              exit={textBlockMotion.exit}
              className="w-full max-w-xl min-w-0"
            >
              <p className="mb-3 flex flex-wrap items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.35em] text-white/75 sm:text-xs">
                <span className="h-px w-8 bg-white/40 sm:w-10" aria-hidden />
                {active.subtitle}
              </p>
              <h2 className="font-sans text-[clamp(2rem,6.5vw,4.25rem)] font-bold uppercase leading-[0.94] tracking-[-0.035em] text-white">
                {active.title}
              </h2>
              <p className="mt-6 font-sans text-sm leading-relaxed text-white/76 sm:text-base">{active.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-hero-gold text-neutral-900 shadow-lg"
                  aria-hidden
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M6 4a2 2 0 012-2h8a2 2 0 012 2v18l-7-4-7 4V4z" />
                  </svg>
                </span>
                {CtaLink}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right / lower-right: horizontal card row (foreground) */}
        <div
          className="order-2 mt-2 flex min-h-[200px] min-w-0 flex-1 flex-col justify-center lg:order-none lg:mt-0 lg:min-h-0"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/*
            Generous inline padding + inner scale (not on the button box) so active cards don’t paint past
            the section’s overflow-hidden — first/last cards keep full rounded corners visible.
            Subtle prev/next arrows: right always until last slide; left appears after first advance.
          */}
          <div className="relative w-full min-w-0">
            <div
              ref={stripRef}
              role="tablist"
              aria-label="Gallery scenes"
              className="relative z-0 flex touch-pan-x gap-3 overflow-x-auto overflow-y-visible overscroll-x-contain scroll-smooth px-6 pb-4 pt-5 [scrollbar-width:none] sm:gap-4 sm:px-8 sm:pb-5 sm:pt-6 lg:justify-start lg:px-10 lg:pb-6 [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
              style={{ scrollPaddingInline: '1.5rem' }}
            >
            {slides.map((slide, i) => {
              const isActive = i === activeIndex
              return (
                <motion.button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  ref={(el) => {
                    cardRefs.current[i] = el
                  }}
                  onClick={() => select(i)}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.9 }}
                  className={`relative aspect-[3/4] w-[min(42vw,11.5rem)] shrink-0 snap-center snap-always overflow-hidden rounded-[1.25rem] border-0 text-left outline-none sm:w-52 sm:rounded-[1.5rem] lg:w-56 lg:rounded-[1.85rem] ${
                    isActive
                      ? 'z-[3] shadow-[0_20px_28px_-18px_rgba(0,0,0,0.72)] ring-2 ring-hero-gold'
                      : 'z-[2] shadow-[0_14px_22px_-16px_rgba(0,0,0,0.5)] ring-1 ring-white/15 hover:opacity-95'
                  } focus-visible:ring-2 focus-visible:ring-white/80`}
                >
                  <span className="sr-only">
                    {slide.title}, slide {i + 1} of {n}
                  </span>
                  <motion.div
                    className="absolute inset-0 origin-bottom"
                    initial={false}
                    animate={{
                      scale: isActive ? 1.06 : 1,
                      y: isActive ? -5 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.9 }}
                  >
                    <img
                      src={slide.thumbnailImage}
                      alt=""
                      className={`h-full w-full object-cover transition duration-500 ${isActive ? '' : 'brightness-[0.88] saturate-[0.92]'}`}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                      draggable={false}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent"
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4">
                      <p className="font-sans text-[9px] font-medium uppercase tracking-[0.26em] text-white/60 sm:text-[10px]">
                        {slide.subtitle}
                      </p>
                      <p className="mt-0.5 line-clamp-2 font-sans text-[11px] font-bold uppercase leading-tight tracking-wide text-white sm:text-xs">
                        {slide.title}
                      </p>
                    </div>
                  </motion.div>
                </motion.button>
              )
            })}
            </div>
            <AnimatePresence>
              {activeIndex > 0 && (
                <motion.button
                  key="gallery-prev"
                  type="button"
                  aria-label="Previous slide"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => go(-1)}
                  className="pointer-events-auto absolute left-1 top-1/2 z-20 flex h-11 w-11 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white/80 shadow-sm backdrop-blur-sm transition hover:border-white/45 hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 sm:left-2 lg:left-3"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                </motion.button>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {activeIndex < n - 1 && (
                <motion.button
                  key="gallery-next"
                  type="button"
                  aria-label="Next slide"
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => go(1)}
                  className="pointer-events-auto absolute right-1 top-1/2 z-20 flex h-11 w-11 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white/80 shadow-sm backdrop-blur-sm transition hover:border-white/45 hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 sm:right-2 lg:right-3"
                >
                  <ChevronRight className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {activeIndex + 1} of {n}: {active.title}
      </p>
    </section>
  )
}
