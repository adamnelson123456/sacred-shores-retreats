/**
 * Retreat page — what's included (Itamambuca / Ubatuba arc).
 */
import FadeIn from './FadeIn'

const includedItems = [
  'Four nights in the Itamambuca / Ubatuba setting',
  'Plant-based meals and nourishing snacks',
  'Daily yoga, breath, and integration time',
  'Ayurvedic workshops: dinacharya, abhyanga, food & cooking',
  'Optional surf sessions and ocean time',
  'Forest bathing and guided meditation in the rainforest',
  'Evening sound baths, kirtan, and shared meals',
  'Opening intention (Sankalpa) and closing integration circle',
  'Pre-retreat preparation notes and a guest connection channel before arrival',
]

export default function IncludedSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-10 sm:mb-12 md:mb-16 text-center text-deep-green tracking-tight">
            What&apos;s Included
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 sm:gap-y-5">
          {includedItems.map((item, index) => (
            <FadeIn key={item} delay={index * 50}>
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-gold mt-1 shrink-0" aria-hidden>
                  ✦
                </span>
                <p className="text-gray-700 font-body text-base sm:text-lg leading-relaxed">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
