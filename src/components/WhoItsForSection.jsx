/**
 * Homepage — audience / positioning (“Who it’s for”).
 * Pillars: horizontal 3-col from `md`, stacked on small screens.
 */
import FadeIn from './FadeIn'

const pillars = [
  {
    title: 'Rooted in depth, not surface',
    body:
      "You're naturally drawn to spirituality, self-discovery, and the deeper layers of life—while still valuing joy, beauty, and lightness along the way.",
  },
  {
    title: 'Open to explore and evolve',
    body:
      "You're curious about practices like sound, breath, and Ayurveda, and open to new ways of healing, growing, and reconnecting with yourself.",
  },
  {
    title: 'Seeking connection and community',
    body:
      'You value meaningful relationships, shared experiences, and being surrounded by people who are also choosing a more intentional way of living.',
  },
]

export default function WhoItsForSection() {
  return (
    <section
      id="who-its-for"
      className="scroll-mt-20 bg-sand px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-6xl xl:max-w-7xl">
        <FadeIn>
          <header className="mx-auto mb-10 max-w-[min(40rem,100%)] text-center sm:mb-12 md:mb-14">
            <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold sm:mb-4 sm:text-xs">
              Who it&apos;s for
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-deep-green sm:text-4xl md:text-5xl">
              For women who feel called to something deeper
            </h2>
          </header>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="border-t border-deep-green/10 pt-10 sm:pt-12">
            <ul className="grid list-none grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-deep-green/10">
              {pillars.map((item, i) => (
                <li
                  key={item.title}
                  className="min-w-0 border-b border-deep-green/10 pb-10 last:border-b-0 last:pb-0 md:border-b-0 md:pb-0 md:pl-6 md:pr-6 lg:pl-8 lg:pr-8 first:md:pl-0"
                >
                  <span
                    className="mb-3 block font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gold"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mb-3 font-serif text-xl tracking-tight text-terracotta sm:text-2xl">{item.title}</h3>
                  <p className="font-sans text-base leading-relaxed text-gray-600 sm:text-[17px] sm:leading-relaxed">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
