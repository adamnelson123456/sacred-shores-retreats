/**
 * Included section - List of what's included in the retreat
 * Refined: Improved spacing, perfect alignment, better mobile stacking
 */
import FadeIn from './FadeIn'

const includedItems = [
  '3 nights in a beautiful Floripa guest house',
  'All plant-based meals and snacks',
  'Daily yoga & meditation',
  'Ayurveda workshops & self-care rituals',
  'Conscious cooking classes with Laura',
  'Longboard lesson or guided nature immersion',
  'Nightly kirtan & sound healing',
  'Sacred feminine sharing circles',
  'Pre-retreat Ayurvedic guide PDF',
  'Access to private WhatsApp group',
]

export default function IncludedSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-10 sm:mb-12 md:mb-16 text-center text-deep-green tracking-tight">
            What's Included
          </h2>
        </FadeIn>

        {/* Two-column grid with equal spacing - stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {includedItems.map((item, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div className="flex gap-4 md:gap-5 items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed pt-0.5">
                  {item}
                </h4>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
