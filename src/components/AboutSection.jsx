/**
 * About section - Story and mission with image gallery
 * Refined: Improved layout alignment, cohesive card styling, better spacing
 */
import FadeIn from './FadeIn'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <FadeIn>
          <div className="mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-semibold text-deep-green uppercase tracking-wider">
              [About Us]
            </span>
          </div>
        </FadeIn>

        {/* Two-column layout: Heading left, Text + Button right - Aligned vertically */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start mb-10 sm:mb-12 md:mb-16">
          {/* Left: Heading */}
          <FadeIn>
            <div className="pt-2 sm:pt-4 md:pt-6">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-deep-green tracking-tight">
                Discover Our Story and What Moves Us
              </h2>
            </div>
          </FadeIn>

          {/* Right: Text + Button - Consistent gap between elements */}
          <FadeIn delay={100}>
            <div className="pt-2 sm:pt-4 md:pt-6 flex flex-col gap-5 sm:gap-6 md:gap-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-body leading-relaxed">
                Founded with a passion for adventure and a commitment to comfort,
                Sacred Shores Retreats was designed to be more than just a place to
                stay. It's a retreat for those with a love for exploration and
                renewal.
              </p>
              <a
                href="/learn-more"
                className="inline-block px-6 sm:px-8 py-3.5 sm:py-3.5 rounded-full bg-deep-green text-white font-semibold text-sm sm:text-base hover:bg-deep-green/90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg w-fit focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 min-h-[44px] flex items-center"
              >
                Learn More About the Retreat
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Image Grid: 1 large card + 2 images - Unified styling and equal heights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {/* Left: Large dark card with text */}
          <FadeIn delay={200}>
            <div className="group bg-deep-green rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex flex-col justify-end p-6 sm:p-8 md:p-10 hover:shadow-2xl transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-3 sm:mb-4 tracking-tight">
                Unforgettable Experiences, Unbeatable Renewal
              </h3>
              <p className="text-white/90 font-body mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm md:text-base">
                Discover breathtaking moments, slow down deeply, and enjoy
                incredible transformation on your sacred retreat.
              </p>
              <a
                href="/learn-more"
                className="inline-block px-5 sm:px-6 py-3 sm:py-2.5 rounded-full bg-white text-sm font-semibold text-deep-green w-fit hover:bg-sage/20 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green min-h-[44px] flex items-center"
              >
                Learn More
              </a>
            </div>
          </FadeIn>

          {/* Right: 2 image cards - Equal heights and consistent styling */}
          <FadeIn delay={300}>
            <div className="rounded-3xl overflow-hidden h-[180px] sm:h-[200px] md:h-[240px] lg:h-[500px]">
              <img
                src="/images/waves.jpg"
                alt="Ocean waves crashing on a tropical beach at sunset"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="rounded-3xl overflow-hidden h-[180px] sm:h-[200px] md:h-[240px] lg:h-[500px]">
              <img
                src="/images/yoga%20in%20mountains%20.jpg"
                alt="Women practicing yoga in a serene mountain setting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
