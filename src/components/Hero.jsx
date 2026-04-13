/**
 * Retreat hero — Itamambuca / Ubatuba; full-bleed image, centered headline.
 */
import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-deep-green"
        style={{
          backgroundImage: "url('/images/Blue%20and%20Green%20Modern%20Travel%20Presentation.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/55" />

      <div className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-8 pt-24 pb-36 sm:pt-28 sm:pb-40 text-center">
        <div className="w-full max-w-4xl mx-auto">
          <FadeIn delay={80}>
            <h1 className="font-display text-white text-[clamp(1.15rem,3.2vw,2.25rem)] sm:text-3xl md:text-4xl lg:text-[2.65rem] font-semibold tracking-[0.16em] uppercase leading-snug mb-8 sm:mb-10 drop-shadow-[0_2px_28px_rgba(0,0,0,0.5)]">
              Itamambuca Retreat
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-3 gap-y-1 text-base sm:text-lg md:text-xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.55)] mb-10 sm:mb-12">
              <span className="font-serif italic font-normal tracking-wide text-white">
                Jungle, ocean &amp; Ayurvedic rhythm for
              </span>
              <span className="font-script text-white text-[2.35rem] sm:text-[2.65rem] md:text-5xl lg:text-6xl leading-none pl-0.5 max-w-[min(100%,20rem)] sm:max-w-none text-center drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)]">
                presence &amp; depth
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
              {['Wed–Sun', 'Itamambuca · Ubatuba', 'Intimate group'].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center px-3.5 py-1.5 border border-white/35 text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-white/95"
                >
                  {label}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={320}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/retreat#pricing"
                className="inline-flex items-center justify-center min-w-[200px] px-8 py-3.5 bg-white/95 text-deep-green text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-[0.22em] hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-deep-green min-h-[48px]"
              >
                Reserve your spot
              </Link>
              <Link
                to="/retreat#retreat-flow"
                className="inline-flex items-center justify-center min-w-[200px] px-8 py-3.5 border border-white/45 text-white text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-[0.22em] hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-h-[48px]"
              >
                Daily rhythm
              </Link>
            </div>
          </FadeIn>
        </div>

        <div
          className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] motion-safe:animate-bounce"
          aria-hidden
        >
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
