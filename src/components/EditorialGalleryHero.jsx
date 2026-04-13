/**
 * EditorialGalleryHero — premium travel-style hero + gallery.
 *
 * Replace content via the `slides` prop (see `src/data/editorialGalleryHeroSlides.js`).
 * Swap `backgroundImage` / `thumbnailImage` URLs and text fields per slide.
 */
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useViewportFullBleed } from '../hooks/useViewportFullBleed'

/** @typedef {{ id: string; title: string; subtitle: string; description: string; backgroundImage: string; thumbnailImage: string }} EditorialGallerySlide */

function ChevronLeft({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const textMotion = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.35, ease: [0.4, 0, 1, 1] } },
}

const bgMotion = {
  initial: { opacity: 0, scale: 1.06 },
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
 * @param {EditorialGallerySlide[]} props.slides
 * @param {string} [props.sectionId]
 * @param {string} [props.className]
 * @param {{ label: string; to: string }} [props.cta] — `to` is passed to React Router `<Link>` when it starts with `/`, else `<a href>`.
 * @param {number | false} [props.autoplayMs] — default `9000`; set `false` to disable.
 * @param {boolean} [props.fullBleed] — default `true`; viewport-width lock for edge-to-edge backgrounds.
 */
export default function EditorialGalleryHero({
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
  const filmstripRef = useRef(null)
  const thumbRefs = useRef([])
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
    const strip = filmstripRef.current
    const thumb = thumbRefs.current[activeIndex]
    if (!strip || !thumb) return
    requestAnimationFrame(() => {
      const se = strip.getBoundingClientRect()
      const te = thumb.getBoundingClientRect()
      const pad = 8
      if (te.left < se.left + pad) {
        strip.scrollTo({ left: strip.scrollLeft + (te.left - se.left) - pad, behavior: 'smooth' })
      } else if (te.right > se.right - pad) {
        strip.scrollTo({ left: strip.scrollLeft + (te.right - se.right) + pad, behavior: 'smooth' })
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

  /** Optional autoplay — pauses for ~22s after any navigation / swipe / hover on controls. */
  useEffect(() => {
    if (autoplayMs === false || autoplayMs <= 0) return undefined
    const id = window.setInterval(() => {
      if (Date.now() - lastInteractRef.current < 22000) return
      setActiveIndex((i) => (i + 1) % n)
    }, autoplayMs)
    return () => window.clearInterval(id)
  }, [autoplayMs, n])

  /** Preload neighbor backgrounds for smoother swaps — replace URLs in `slides` to point at your CDN. */
  useEffect(() => {
    const next = slides[(activeIndex + 1) % n]
    const prev = slides[(activeIndex - 1 + n) % n]
    ;[next, prev].forEach((s) => {
      const img = new Image()
      img.src = s.backgroundImage
    })
  }, [activeIndex, n, slides])

  const progress = ((activeIndex + 1) / n) * 100

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
    if (dx < -48) go(1)
    else if (dx > 48) go(-1)
  }

  const CtaLink =
    cta.to.startsWith('/') || cta.to.startsWith('#') ? (
      <Link
        to={cta.to}
        className="inline-flex items-center rounded-full border border-white/90 px-7 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
      >
        {cta.label}
      </Link>
    ) : (
      <a
        href={cta.to}
        className="inline-flex items-center rounded-full border border-white/90 px-7 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
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
      className={`scroll-mt-20 relative shrink-0 overflow-x-visible overflow-y-hidden bg-black text-white ${className}`}
    >
      {/* ——— Replace slide `backgroundImage` URLs in your data file ——— */}
      <div className="pointer-events-none absolute inset-0 z-0 min-h-[100svh] sm:min-h-[100dvh]">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={active.id}
            aria-hidden
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${active.backgroundImage}")` }}
            initial={bgMotion.initial}
            animate={bgMotion.animate}
            exit={bgMotion.exit}
          />
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] min-h-[100svh] bg-gradient-to-r from-black/78 via-black/42 to-black/22 sm:min-h-[100dvh]" />
      <div className="pointer-events-none absolute inset-0 z-[1] min-h-[100svh] bg-gradient-to-t from-black/55 via-transparent to-black/15 sm:min-h-[100dvh]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-4 pb-32 pt-24 sm:px-6 sm:pb-36 sm:pt-28 md:px-10 lg:flex-row lg:items-stretch lg:pb-40 lg:pt-32">
        {/* Left column: copy — driven by `active` slide; edit strings in data file. */}
        <div className="flex flex-1 flex-col justify-end lg:w-[min(44%,520px)] lg:flex-none lg:pr-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={textMotion.initial}
              animate={textMotion.animate}
              exit={textMotion.exit}
              className="max-w-xl"
            >
              <p className="mb-4 flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.35em] text-white/80 sm:text-xs">
                <span className="h-px w-8 bg-white/45 sm:w-10" aria-hidden />
                {active.subtitle}
              </p>
              <h2 className="font-sans text-[clamp(2.25rem,7vw,4.75rem)] font-bold uppercase leading-[0.92] tracking-[-0.04em] text-white">
                {active.title}
              </h2>
              <p className="mt-6 font-sans text-sm leading-relaxed text-white/78 sm:text-base">{active.description}</p>
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

        {/* Right: featured frame + filmstrip (contact-sheet style) — swap `thumbnailImage` per slide in data file. */}
        <div
          className="mt-10 flex min-h-0 flex-1 flex-col justify-end gap-5 lg:mt-0 lg:min-w-0 lg:justify-center lg:gap-6"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full overflow-hidden rounded-[1.5rem] shadow-[0_28px_60px_-14px_rgba(0,0,0,0.55)] ring-1 ring-white/10 sm:rounded-[1.85rem] lg:max-h-[min(48vh,520px)] lg:rounded-[2rem]">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={active.id}
                className="relative aspect-[16/10] w-full sm:aspect-[5/3] lg:aspect-auto lg:min-h-[min(40vh,360px)] lg:max-h-[min(48vh,520px)]"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={active.thumbnailImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-white/65 sm:text-[11px]">
                    {active.subtitle}
                  </p>
                  <p className="mt-1 font-sans text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                    {active.title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            ref={filmstripRef}
            role="tablist"
            aria-label="Gallery slides"
            className="-mx-1 flex touch-pan-x gap-2 overflow-x-auto px-1 pb-1 pt-0.5 [scrollbar-width:none] sm:gap-2.5 lg:justify-end [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((slide, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  ref={(el) => {
                    thumbRefs.current[i] = el
                  }}
                  onClick={() => select(i)}
                  className={`relative h-16 w-[5.5rem] shrink-0 overflow-hidden rounded-xl border-0 text-left outline-none ring-offset-2 ring-offset-black/50 transition focus-visible:ring-2 focus-visible:ring-white/70 sm:h-[4.5rem] sm:w-28 sm:rounded-[1.1rem] ${
                    isActive ? 'ring-2 ring-hero-gold shadow-lg' : 'opacity-75 ring-1 ring-white/20 hover:opacity-100'
                  }`}
                >
                  <img
                    src={slide.thumbnailImage}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                    loading={i < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-black/35" aria-hidden />
                  <span className="absolute bottom-1 left-1.5 font-sans text-[9px] font-bold tabular-nums text-white/90 sm:text-[10px]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Controls: swap labels or hide by omitting arrows in a fork if you need a minimal variant. */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-4 border-t border-white/10 bg-black/25 px-4 py-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-10 lg:px-12"
        onMouseEnter={markInteract}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/15"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/15"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-5 sm:max-w-xl lg:max-w-2xl">
          <div className="h-0.5 min-w-0 flex-1 rounded-full bg-white/20" aria-hidden>
            <motion.div
              className="h-full rounded-full bg-hero-gold"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            />
          </div>
          <p className="shrink-0 font-sans text-3xl font-bold tabular-nums tracking-tight text-white sm:text-4xl">
            {String(activeIndex + 1).padStart(2, '0')}
          </p>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {activeIndex + 1} of {n}: {active.title}
      </p>
    </section>
  )
}
