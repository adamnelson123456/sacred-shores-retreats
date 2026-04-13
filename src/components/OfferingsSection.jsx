/**
 * Homepage “Sacred Offerings” — image cards; copy tuned for depth, lightness, and sisterhood.
 */
import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'

const offerings = [
  {
    title: 'Connection in nature',
    description:
      'Ocean light, jungle shade, salt on your skin—the outdoors as a mirror for presence, wonder, and remembering you belong to something alive.',
    cta: 'Feel the landscape',
    to: '/retreat#about',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Sisterhood & shared joy',
    description:
      'Circles, shared tables, laughter that opens the chest as fully as silence—community where depth feels safe and lightness is sacred too.',
    cta: 'Gather with us',
    to: '/retreat#experience',
    image:
      'https://images.unsplash.com/photo-1529156069898-4996630fe58a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Sound, breath & stillness',
    description:
      'Kirtan, sound baths, meditation, and breathwork—not performance, but portals inward; music and vibration as medicine for a weary nervous system.',
    cta: 'Enter the practice',
    to: '/retreat#retreat-flow',
    image:
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Conscious living & beauty',
    description:
      'Plant-based nourishment, unhurried mornings, and spaces touched with care—daily rituals and fine details so your whole being can whisper: this is so me.',
    cta: 'See the retreat',
    to: '/retreat',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
  },
]

export default function OfferingsSection() {
  return (
    <section
      id="offerings"
      className="bg-[#F0EDE6] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-14 scroll-mt-20"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <FadeIn>
          <header className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="shrink-0 max-w-xl">
              <p className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.22em] text-[#6B5344] uppercase mb-3 sm:mb-4">
                Depth &amp; lightness
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] text-[#2C2419] tracking-tight leading-tight">
                Sacred Offerings
              </h2>
            </div>
            <div className="flex-1 min-w-0 pb-2 sm:pb-3">
              <div className="h-px w-full bg-[#D4CFC4]" aria-hidden />
            </div>
          </header>
          <p className="max-w-3xl text-base sm:text-lg text-[#4a4238] font-body leading-relaxed mb-12 sm:mb-14 md:mb-16">
            For women drawn to nature, meaning, and community—inner growth without losing joy. We speak through
            atmosphere as much as words: sound, breath, conscious living, and the healing beauty of being fully here.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-6">
          {offerings.map((item, i) => (
            <FadeIn key={item.title} delay={80 + i * 90}>
              <article className="group relative h-[min(78vw,420px)] sm:h-[440px] lg:h-[460px] rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden shadow-md ring-1 ring-black/[0.06]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex flex-col text-white">
                  <h3 className="font-serif text-xl sm:text-2xl text-white tracking-tight mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] !text-white font-sans leading-relaxed mb-5 max-w-[22rem] drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] [text-shadow:0_1px_3px_rgba(0,0,0,0.95)]">
                    {item.description}
                  </p>
                  <Link
                    to={item.to}
                    className="self-start text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.18em] text-white border-b border-gold/90 pb-1 hover:border-white hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black/50 rounded-sm drop-shadow-[0_1px_6px_rgba(0,0,0,0.75)]"
                  >
                    {item.cta}
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
