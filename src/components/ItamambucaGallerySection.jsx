/**
 * Itamambuca gallery — full-bleed split: editorial left + place facts panel.
 * Swap `SECTION_BG` for your own asset (local under /public/images/ or any image URL).
 */
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'
import { useViewportFullBleed } from '../hooks/useViewportFullBleed'

/** Nature hero — Atlantic rainforest canopy (replace URL or use a file under /public/images/). */
const SECTION_BG =
  'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=82'

const PLACE_FACTS = [
  'Itamambuca is a beach neighborhood inside Ubatuba—on São Paulo’s lush north coast where the Atlantic Rainforest runs almost to the tide line.',
  'Ubatuba is known for more than a hundred beaches and coves; the town’s pace bends toward tides, sunrise light, and the sound of surf more than traffic.',
  'Here Mata Atlântica meets salt air: humid forest, scarlet macaws in the canopy, and trails that can drop you from shade straight onto open sand.',
  'The water along this stretch is famously clear on calm days—ideal for long swims, gentle surf sessions, and simply watching the color shift toward evening.',
  'From Greater São Paulo, Ubatuba is roughly a half-day’s journey by road—far enough to exhale, close enough that the week still feels possible.',
  'Itamambuca keeps a village scale: small pousadas, local kitchens, and long horizons—less strip-resort, more room for the landscape to stay in charge.',
]

export default function ItamambucaGallerySection() {
  const sectionRef = useRef(null)
  const bleedStyle = useViewportFullBleed(sectionRef, true)

  return (
    <section
      ref={sectionRef}
      id="welcome-itamambuca"
      style={bleedStyle}
      className="scroll-mt-20 relative shrink-0 overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <img src={SECTION_BG} alt="" className="h-full w-full object-cover object-center opacity-55" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/82 via-black/52 to-black/32" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/62 via-transparent to-black/22" />

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,920px)] w-full max-w-[1600px] flex-col items-stretch gap-10 px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 md:px-12 lg:min-h-[100svh] lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-14 lg:pb-28 lg:pt-28">
        {/* Left — vertically centered with the facts panel on large screens */}
        <div className="flex min-w-0 flex-1 flex-col justify-center lg:w-[min(44%,520px)] lg:flex-none lg:justify-center lg:pr-4">
          <FadeIn>
            <div className="max-w-xl min-w-0">
              <p className="mb-4 flex flex-wrap items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.35em] text-white/80 sm:text-xs">
                <span className="h-px w-8 bg-white/45 sm:w-10" aria-hidden />
                ITAMAMBUCA · BRAZIL
              </p>
              <h2 className="font-sans text-[clamp(2.25rem,7vw,4.75rem)] font-bold uppercase leading-[0.92] tracking-[-0.04em] text-white">
                ITAMAMBUCA
              </h2>
              <p className="mt-6 font-sans text-sm leading-relaxed text-white/78 sm:text-base">
                Soft sand, clear water, and trails that slip from forest shade straight into salt air—the shoreline does
                part of the teaching.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <span
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-hero-gold text-neutral-900 shadow-lg"
                  aria-hidden
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M6 4a2 2 0 012-2h8a2 2 0 012 2v18l-7-4-7 4V4z" />
                  </svg>
                </span>
                <Link
                  to="/retreat#experience"
                  className="inline-flex min-h-[48px] items-center rounded-full border border-white/90 px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 sm:px-7"
                >
                  Explore the pillars
                </Link>
                <Link
                  to="/retreat#retreat-flow"
                  className="inline-flex min-h-[48px] items-center rounded-full border border-white/40 px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 transition hover:border-white/55 hover:bg-white/5 sm:px-6"
                >
                  Daily flow
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right — facts panel, same vertical alignment on lg */}
        <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center lg:max-w-[min(52rem,52%)]">
          <FadeIn delay={100}>
            <div className="rounded-[1.35rem] border border-white/12 bg-white/[0.07] p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] backdrop-blur-md sm:rounded-[1.75rem] sm:p-8 lg:rounded-[2.25rem] lg:p-10">
              <p className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
                Itamambuca &amp; Ubatuba — at a glance
              </p>
              <ul className="space-y-4 sm:space-y-5">
                {PLACE_FACTS.map((fact, index) => (
                  <li key={index} className="flex gap-3.5 sm:gap-4">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hero-gold shadow-[0_0_0_3px_rgba(201,162,39,0.25)]"
                      aria-hidden
                    />
                    <span className="font-sans text-sm leading-relaxed text-white/88 sm:text-[15px] sm:leading-relaxed">
                      {fact}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
