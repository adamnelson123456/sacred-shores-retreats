/**
 * Homepage — Giovanna: founder & facilitator (minimal two-column layout).
 */
import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'

const GIOVANNA_IMAGE_SRC = encodeURI('/images/gio nature!.jpeg')

const highlights = [
  'Ayurveda for daily life',
  "Women's health & cyclical living",
  'Self-care rituals & abhyanga',
  'Guided reflection & integration circles',
]

export default function HostsSection() {
  return (
    <section
      id="hosts"
      className="scroll-mt-20 bg-[#F7F3EE] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-6xl xl:max-w-7xl">
        <FadeIn>
          <header className="mb-14 max-w-3xl sm:mb-16 md:mb-20">
            <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C48B58] sm:mb-4 sm:text-xs">
              Founder &amp; facilitator
            </p>
            <h2 className="mb-5 font-serif text-[clamp(1.85rem,4.5vw,3.25rem)] leading-[1.12] tracking-tight text-[#1A1F2B] sm:mb-6">
              Meet the founder Giovanna
            </h2>
            <p className="font-body text-lg leading-relaxed text-[#4A4A4A] sm:text-xl">
              Yamuna Retreats is held by Giovanna—your Ayurvedic guide and space holder for the Itamambuca gathering.
              She leads with steadiness and heart: clear structure, room to soften, and a deep respect for how women heal
              in community and in nature.
            </p>
          </header>
        </FadeIn>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-0">
          <FadeIn delay={80} className="lg:col-span-5">
            <figure className="mx-auto max-w-md overflow-hidden rounded-2xl ring-1 ring-black/[0.06] lg:mx-0 lg:max-w-none">
              <div className="aspect-[3/4] w-full sm:aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src={GIOVANNA_IMAGE_SRC}
                  alt="Giovanna outdoors — founder of Yamuna Retreats and retreat facilitator"
                  width={800}
                  height={1067}
                  className="h-full w-full object-cover object-[center_15%]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>
          </FadeIn>

          <FadeIn delay={120} className="min-w-0 lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              <p className="mb-8 font-sans text-base leading-relaxed text-[#4A4A4A] sm:mb-10 sm:text-[17px] sm:leading-[1.7]">
                Giovanna is an Ayurvedic therapist and women&apos;s wellness guide, trained in Brazil and abroad. She
                specializes in helping women regulate digestion, hormones, and the nervous system through simple daily
                rituals—then carries that same thread into retreat: sound, breath, forest and sea, and the quiet courage
                of coming back to yourself.
              </p>

              <ul className="mb-12 space-y-3 border-t border-black/[0.08] pt-8 sm:mb-14">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-snug text-[#4A4A4A] sm:text-base sm:leading-relaxed"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#C48B58]/60" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/learn-more"
                className="inline-block font-sans text-sm font-medium text-[#1A1F2B] underline decoration-black/25 decoration-1 underline-offset-[5px] transition-colors hover:decoration-[#C48B58] hover:text-[#1A1F2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C48B58] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE] rounded-sm"
              >
                Read the full story
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
