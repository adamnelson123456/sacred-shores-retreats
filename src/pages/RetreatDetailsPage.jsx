/**
 * About page (`/learn-more`) — origins of Yamuna Retreats through Giovanna’s path.
 * Editorial layout with inline photography (replace image URLs in `PHOTOS` below).
 */
import { useEffect } from 'react'
import FadeIn from '../components/FadeIn'

/** Replace with your own files under /public/images/ … */
const GIO_PORTRAIT = encodeURI('/images/gio nature!.jpeg')

const PHOTOS = {
  /** Main portrait — swap `GIO_PORTRAIT` path if your filename differs. */
  portrait: GIO_PORTRAIT,
  /** Placeholder coastal / interior shots — swap for your photography. */
  handsHerbs:
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=82',
  forestLight:
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=82',
  shoreQuiet:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=82',
  stillBowl:
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=82',
  journalLight:
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=82',
}

export default function RetreatDetailsPage() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick)
    })
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <article className="bg-[#FAF8F4] pb-4 pt-20 text-gray-800 sm:pt-24">
      {/* Hero */}
      <section
        id="top"
        className="scroll-mt-20 relative overflow-hidden border-b border-deep-green/[0.07]"
      >
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 -translate-y-1/2 rounded-full bg-seafoam/45 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[min(50vw,380px)] w-[min(50vw,380px)] rounded-full bg-hero-gold/[0.14] blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 md:gap-14 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
          <div>
            <FadeIn>
              <p className="mb-5 flex flex-wrap items-center justify-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-terracotta sm:justify-start sm:text-xs">
                <span className="h-px w-10 bg-hero-gold/80 sm:w-14" aria-hidden />
                Origins
              </p>
              <h1 className="text-center font-serif text-[clamp(2.15rem,5.5vw,3.85rem)] font-bold leading-[1.06] tracking-tight text-deep-green sm:text-left">
                How Giovanna began Yamuna Retreats
              </h1>
              <p className="mx-auto mt-8 max-w-xl text-center font-body text-lg leading-[1.75] text-gray-600 sm:mx-0 sm:text-left sm:text-xl">
                This page is not a brochure—it is the thread of how one practice deepened into a name, a shoreline, and
                a way of holding others with care.
              </p>
              <a
                href="#thread"
                className="mt-10 flex min-h-[44px] items-center justify-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-deep-green transition hover:text-terracotta-dark sm:justify-start"
              >
                Read the story
                <span className="text-lg leading-none" aria-hidden>
                  ↓
                </span>
              </a>
            </FadeIn>
          </div>
          <FadeIn delay={120}>
            <figure className="mx-auto max-w-md overflow-hidden rounded-[1.75rem] shadow-[0_28px_60px_-14px_rgba(15,49,35,0.28)] ring-1 ring-deep-green/[0.08] sm:max-w-none lg:mx-0">
              <img
                src={PHOTOS.portrait}
                alt="Giovanna in nature — founder of Yamuna Retreats"
                className="aspect-[4/5] w-full object-cover object-center sm:aspect-[3/4]"
                width={900}
                height={1125}
                decoding="async"
              />
              <figcaption className="border-t border-deep-green/[0.08] bg-white/95 px-5 py-3.5 text-center font-sans text-[11px] uppercase tracking-[0.18em] text-gray-600 sm:text-xs">
                Giovanna — founder, Yamuna Retreats
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* Thread */}
      <section
        id="thread"
        className="scroll-mt-20 border-b border-deep-green/[0.06] bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14"
      >
        <div className="mx-auto max-w-[42rem]">
          <FadeIn>
            <p className="mb-4 flex items-center justify-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold sm:justify-start">
              <span className="h-px w-8 bg-hero-gold/70" aria-hidden />
              The thread
            </p>
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-deep-green sm:text-left sm:text-4xl md:text-[2.35rem]">
              Before the name
            </h2>
            <div className="mt-10 space-y-7 font-body text-base leading-[1.75] text-gray-700 sm:text-lg">
              <p className="border-l-2 border-hero-gold/45 pl-6 sm:pl-8">
                Giovanna&apos;s work grew from Ayurveda, women&apos;s health, and the quiet discipline of showing up
                for the body when it whispers instead of shouts. Long before there was a logo, there were kitchens,
                consultation rooms, and circles where she translated ancient maps into something livable for modern
                nervous systems.
              </p>
              <p>
                Yamuna Retreats emerged when that work needed a wider vessel—not louder marketing, but a clearer home
                for her voice: a place where sound, ritual, nourishment, and landscape could sit together without rushing
                anyone to perform wellness for a camera.
              </p>
            </div>
          </FadeIn>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 sm:gap-7">
          <FadeIn delay={80}>
            <figure className="group overflow-hidden rounded-[1.35rem] shadow-[0_14px_40px_-18px_rgba(15,49,35,0.2)] ring-1 ring-deep-green/[0.06] transition-shadow duration-300 hover:shadow-[0_20px_48px_-16px_rgba(15,49,35,0.24)]">
              <img src={PHOTOS.handsHerbs} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </figure>
          </FadeIn>
          <FadeIn delay={140}>
            <figure className="group overflow-hidden rounded-[1.35rem] shadow-[0_14px_40px_-18px_rgba(15,49,35,0.2)] ring-1 ring-deep-green/[0.06] transition-shadow duration-300 hover:shadow-[0_20px_48px_-16px_rgba(15,49,35,0.24)]">
              <img src={PHOTOS.forestLight} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* Quote band */}
      <section className="relative overflow-hidden border-b border-white/10 bg-deep-green text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_20%_30%,rgba(201,162,39,0.14),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <figure className="overflow-hidden rounded-[1.35rem] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.35)] ring-1 ring-white/15">
                <img src={PHOTOS.stillBowl} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </figure>
            </FadeIn>
            <FadeIn delay={100}>
              <blockquote className="font-serif text-[clamp(1.5rem,3.5vw,2.15rem)] font-medium italic leading-snug text-white/95">
                &ldquo;I did not name Yamuna Retreats to sound exotic—I named it so the work could breathe with me when I
                crossed oceans and seasons.&rdquo;
              </blockquote>
              <div className="mt-8 h-px w-16 bg-hero-gold/60" aria-hidden />
              <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/55">— Giovanna</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Shore */}
      <section
        id="shore"
        className="scroll-mt-20 border-b border-deep-green/[0.06] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14"
      >
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-4 flex items-center justify-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold sm:justify-start">
              <span className="h-px w-8 bg-hero-gold/70" aria-hidden />
              Place
            </p>
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-deep-green sm:text-left sm:text-4xl md:text-[2.35rem]">
              Why the Atlantic coast
            </h2>
            <p className="mx-auto mt-8 max-w-[42rem] text-center font-body text-base leading-[1.75] text-gray-700 sm:mx-0 sm:text-left sm:text-lg">
              Brazil&apos;s shoreline kept calling her back—Ubatuba, Itamambuca, the overlap of rainforest and salt. The
              humidity, the sound of the sea, and the slower civic rhythm matched what she was already asking of
              herself: fewer shortcuts, more honesty with the body. Yamuna Retreats found its footing there because the
              geography refused to let the work become abstract.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <figure className="mt-14 overflow-hidden rounded-[1.65rem] shadow-[0_22px_55px_-18px_rgba(15,49,35,0.22)] ring-1 ring-deep-green/[0.07]">
              <img
                src={PHOTOS.shoreQuiet}
                alt=""
                className="max-h-[min(72vh,680px)] w-full object-cover object-center"
                loading="lazy"
              />
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* Today */}
      <section className="border-b border-deep-green/[0.06] bg-gradient-to-b from-sand/90 to-[#EDE9E1] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <FadeIn>
              <figure className="overflow-hidden rounded-[1.35rem] shadow-[0_18px_48px_-16px_rgba(15,49,35,0.18)] ring-1 ring-deep-green/[0.06]">
                <img src={PHOTOS.journalLight} alt="" className="aspect-[3/4] w-full object-cover" loading="lazy" />
              </figure>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn delay={80}>
              <p className="mb-4 flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-terracotta">
                <span className="h-px w-8 bg-hero-gold/70" aria-hidden />
                Now
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-deep-green sm:text-4xl md:text-[2.35rem]">
                What Yamuna Retreats is today
              </h2>
              <div className="mt-10 space-y-7 font-body text-base leading-[1.75] text-gray-700 sm:text-lg">
                <p>
                  Today it is the umbrella for everything she has learned to steward well: Ayurvedic care, sound, shared
                  meals, writing, silence, and the stubborn belief that beauty counts as medicine. It is still small by
                  design—anchored in relationship, not volume.
                </p>
                <p className="rounded-2xl border border-deep-green/[0.08] bg-white/60 px-6 py-5 text-[15px] leading-relaxed shadow-sm sm:px-7 sm:py-6">
                  If you came here to understand the why before anything else, you are in the right place. The rest of
                  the site carries the practical details; this page holds the story of how the name met the shore.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </article>
  )
}
