/**
 * Homepage promo — Itamambuca (Ubatuba) retreat: dark panel + coastal / jungle imagery.
 */
import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'

/** Surf & ocean — optional surf during the week; swap for /public/images/… when you have your own shot. */
const retreatImage =
  'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=2000&q=85'

function IconWave({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 15c1.5-2 3-2 4.5 0S10 17 12 15s3-2 4.5 0 3 2 4.5 0M3 10c1.5-2 3-2 4.5 0S10 12 12 10s3-2 4.5 0 3 2 4.5 0"
      />
    </svg>
  )
}

function IconForest({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M6 20L12 7l6 13" />
    </svg>
  )
}

function IconSound({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 5L6 9H2v6h4l5 4V5zm4 3a5 5 0 010 8m2.5-11a9 9 0 010 14"
      />
    </svg>
  )
}

const features = [
  { label: 'Yoga & ocean rhythm', Icon: IconWave },
  { label: 'Atlantic rainforest', Icon: IconForest },
  { label: 'Sound baths & kirtan', Icon: IconSound },
]

export default function SanctuarySection() {
  return (
    <section id="sanctuary" className="w-full scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[min(85vh,720px)]">
        <FadeIn>
          <div className="bg-deep-green text-white flex flex-col justify-center px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 py-14 sm:py-16 lg:py-12 order-2 lg:order-1">
            <p className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.24em] uppercase text-white/90 mb-4 sm:mb-5">
              Itamambuca · Ubatuba
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.65rem] lg:text-5xl leading-[1.12] tracking-tight mb-6 sm:mb-8 max-w-[18ch]">
              The
              <br />
              Itamambuca
              <br />
              Retreat
            </h2>
            <p className="text-sm sm:text-base text-white/85 font-sans leading-relaxed max-w-lg mb-8 sm:mb-10">
              Wed–Sun between lush Atlantic forest and the sea—Ayurvedic workshops, optional surf, forest bathing, and
              evenings of sound and kirtan. Structure with room to breathe: a full arc from arrival and intention to
              integration and closing.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10 sm:mb-12 max-w-md">
              {features.map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="w-5 h-5 text-white/90 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-white/95">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                to="/retreat#retreat-flow"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-md border border-white/90 text-white text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.16em] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green min-h-[44px]"
              >
                Daily rhythm
              </Link>
              <Link
                to="/retreat#pricing"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-md border border-white/35 text-white/95 text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.16em] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green min-h-[44px]"
              >
                Book your retreat
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-0 h-full order-1 lg:order-2">
            <img
              src={retreatImage}
              alt="Surfer on a sunlit wave—optional ocean time during the Itamambuca retreat"
              className="absolute inset-0 h-full w-full bg-deep-green/20 object-cover object-[center_35%] sm:object-center"
              width={2000}
              height={1333}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" aria-hidden />
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md px-5 py-4 sm:py-5 bg-black/60 backdrop-blur-[2px] text-center">
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-white italic leading-snug">
                Between jungle and ocean, something begins to shift.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
