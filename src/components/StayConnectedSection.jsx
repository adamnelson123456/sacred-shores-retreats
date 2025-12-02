/**
 * Stay Connected section - CTA card over background image
 * Refined: Improved padding, consistent image aspect ratio, refined button styles
 */
import FadeIn from './FadeIn'

export default function StayConnectedSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=700&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-deep-green/50 via-deep-green/40 to-deep-green/30"></div>
      </div>

      {/* Floating Card - Refined padding and spacing */}
      <FadeIn delay={200}>
        <div className="relative max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-5 sm:mb-6 text-center text-deep-green tracking-tight">
            Stay Connected with Sacred Shores
          </h2>

          {/* Inner image - Consistent aspect ratio */}
          <div className="my-5 sm:my-6 md:my-8 rounded-2xl overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64 mb-6 sm:mb-8">
            <img
              src="/images/readinf%20bloig.jpg"
              alt="Reading and connecting with Sacred Shores"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center mb-6 sm:mb-8 md:mb-10 font-body leading-relaxed">
            Never miss a moment with Sacred Shores, your go-to platform for
            exclusive retreat dates, early-bird access, and soulful content to
            deepen your practice.
          </p>

          {/* Buttons - Refined primary/secondary styles, mobile stacking - Optimized touch targets */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button className="px-6 sm:px-8 py-4 sm:py-3.5 rounded-full bg-deep-green text-white font-semibold text-base sm:text-sm md:text-base text-center hover:bg-deep-green/90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 min-h-[48px] sm:min-h-[44px]">
              Booking Now
            </button>
            <button className="px-6 sm:px-8 py-4 sm:py-3.5 rounded-full border-2 border-deep-green text-deep-green font-semibold text-base sm:text-sm md:text-base text-center hover:bg-deep-green/5 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 min-h-[48px] sm:min-h-[44px]">
              Get Retreat Updates on WhatsApp
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
