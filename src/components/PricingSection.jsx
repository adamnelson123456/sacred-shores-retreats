/**
 * Pricing section - Single flat-rate pricing card
 * Refined: Balanced two-column layout, refined shadow/radius, proper button placement
 */
import FadeIn from './FadeIn'

export default function PricingSection() {
  const includedItems = [
    'Four nights — Itamambuca / Ubatuba setting',
    'Daily yoga, breath & integration time',
    'Ayurveda workshops, dinacharya & abhyanga',
    'Food & Ayurveda workshop + cooking session',
    'Optional surf & forest bathing / meditation',
    'Evening sound baths, kirtan & shared meals',
    'Opening Sankalpa & closing integration circle',
    'Plant-based meals, snacks & retreat materials',
  ]

  return (
    <section
      id="pricing"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-white scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-5 sm:mb-6 text-center text-deep-green tracking-tight">
            Retreat Investment
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 font-body">
            Choose the option that feels right for you. Limited to 10–20 women.
          </p>
        </FadeIn>

        {/* Single centered premium pricing card - Refined shadow and radius */}
        <div className="flex justify-center mb-10 md:mb-12">
          <FadeIn delay={100}>
            <div className="group bg-white rounded-3xl px-5 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-6 md:py-8 shadow-md hover:shadow-xl hover:-translate-y-2 border-2 border-deep-green transition-all duration-300 w-full max-w-3xl focus-within:ring-2 focus-within:ring-deep-green focus-within:ring-offset-2">
              
              {/* Two-column grid layout: Left (title/price/description) + Right (checklist) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                
                {/* Left Column: Title, Price, Description */}
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-3 sm:mb-4 text-deep-green">
                    Yamuna Retreat Rate
                  </h3>
                  
                  {/* Price with gold styling */}
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gold">
                    R$ 3.000 per person
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-700 font-body leading-relaxed text-sm sm:text-base md:text-lg">
                    A single flat rate for your full Yamuna Retreats experience, including lodging, meals, all sessions, and retreat materials.
                  </p>
                </div>

                {/* Right Column: Included Items Checklist */}
                <div className="flex flex-col">
                  <ul className="space-y-2.5">
                    {includedItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-xs sm:text-sm md:text-base leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button: Full-width container below both columns - Mobile optimized touch target */}
              <button className="w-full px-8 py-4 sm:py-3.5 rounded-full bg-deep-green text-white font-semibold text-base sm:text-sm md:text-base hover:bg-deep-green/90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 min-h-[48px] sm:min-h-[44px]">
                Reserve Your Spot
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Bottom text */}
        <FadeIn delay={200}>
          <p className="text-center text-gray-600 font-body text-base sm:text-lg md:text-xl">
            Your spot includes lodging, meals, all sessions, and retreat materials.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
