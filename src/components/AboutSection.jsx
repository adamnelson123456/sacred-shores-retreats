/**
 * Retreat page — place & invitation (Itamambuca, Ubatuba).
 */
import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-6 text-center text-xs font-sans font-semibold uppercase tracking-[0.2em] text-terracotta sm:mb-8 sm:text-sm sm:text-left">
            Intro
          </p>
        </FadeIn>

        <div className="space-y-6 text-center sm:text-left sm:space-y-8">
          <FadeIn delay={60}>
            <p className="font-serif text-lg leading-relaxed text-deep-green sm:text-xl md:text-2xl">
              Tucked away in Itamambuca, Ubatuba, this retreat unfolds between lush Atlantic rainforest and the steady
              rhythm of the sea.
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="font-serif text-2xl italic leading-snug text-deep-green/95 sm:text-3xl md:text-4xl">
              Here, life moves differently.
            </p>
          </FadeIn>
          <FadeIn delay={180}>
            <div className="space-y-4 font-body text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
              <p>You wake with the light filtering through the trees.</p>
              <p>You move with the ocean.</p>
              <p>You slow down enough to actually feel where you are—and who you are.</p>
            </div>
          </FadeIn>
          <FadeIn delay={240}>
            <p className="pt-2 font-body text-base leading-relaxed text-gray-800 sm:text-lg">
              This isn&apos;t just where the retreat takes place.
              <br />
              <span className="font-serif text-lg text-deep-green sm:text-xl">
                It&apos;s part of the transformation itself.
              </span>
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="mt-12 flex justify-center sm:mt-14 sm:justify-start">
            <Link
              to="/learn-more"
              className="inline-flex min-h-[44px] items-center rounded-full bg-deep-green px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-deep-green/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 sm:px-8 sm:text-base"
            >
              Learn more
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
