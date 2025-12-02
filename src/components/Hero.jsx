/**
 * Hero section - Premium oceanfront hero with refined gradient and spacing
 * Refined: Better gradient overlay, improved mobile responsiveness, refined spacing
 * Formatting Refinements:
 * - Improved vertical spacing between elements (H1→subheading: 1.5rem, subheading→pills: 1rem, pills→buttons: 2rem)
 * - Constrained heading width (max-w-4xl) to prevent awkward line breaks
 * - Enhanced gradient contrast for better text readability
 * - Refined pill and button alignment with consistent spacing
 * - Mobile-optimized typography and padding
 * Wide Screen Alignment:
 * - Single max-width container (max-w-5xl, 2xl:max-w-4xl) wraps all content to maintain consistent alignment
 * - All hero elements (heading, paragraph, pills, buttons) stay aligned within the same container
 * - Prevents content from stretching too far on ultra-wide screens (1920px, 2560px+)
 */
import FadeIn from './FadeIn'

export default function Hero() {
  return (
    <section className="relative mt-0 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
      {/* Background Image Container */}
      <div
        className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[850px] lg:min-h-[900px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Blue%20and%20Green%20Modern%20Travel%20Presentation.png')",
        }}
      >
        {/* Refined gradient overlay - Slightly deepened for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-green/85 via-deep-green/60 to-deep-green/30"></div>
        
        {/* Vignette effect on edges */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15, 49, 35, 0.15) 100%)',
          }}
        ></div>

        {/* Hero Content Container - Outer padding container - Mobile optimized */}
        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 lg:py-40">
          {/* 
            Single max-width container for all hero content
            This wrapper maintains consistent alignment on wide screens by constraining
            all hero elements (heading, paragraph, pills, buttons) to the same width.
            On ultra-wide screens (2xl+), max-w-4xl prevents the block from getting too wide.
          */}
          <div className="max-w-5xl 2xl:max-w-4xl w-full mx-auto text-left">
            
            {/* Main Heading - Refined typography for ultra-wide screens, removed individual max-width - Mobile optimized */}
            <FadeIn delay={100}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif font-bold text-white mb-5 sm:mb-6 leading-[1.1] tracking-tight">
                Come Rest in the Rhythm of Nature
              </h1>
            </FadeIn>

            {/* Supporting Copy - Removed individual max-width, aligns with heading block - Mobile optimized */}
            <FadeIn delay={200}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/95 mb-4 md:mb-6 leading-relaxed font-body">
                A 3-night Ayurvedic, feminine, oceanfront retreat in Floripa, where
                yoga, mantra, conscious cooking, surfing, and sisterhood come
                together.
              </p>
            </FadeIn>

            {/* Info Pills - Aligned with heading block, clean wrapping */}
            <FadeIn delay={300}>
              <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
                <span className="inline-flex items-center h-9 md:h-10 px-4 md:px-5 py-2 md:py-2.5 bg-white/95 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-deep-green shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-white transition-all duration-300 cursor-default">
                  📅 Friday–Monday
                </span>
                <span className="inline-flex items-center h-9 md:h-10 px-4 md:px-5 py-2 md:py-2.5 bg-white/95 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-deep-green shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-white transition-all duration-300 cursor-default">
                  📍 Floripa, Brazil
                </span>
                <span className="inline-flex items-center h-9 md:h-10 px-4 md:px-5 py-2 md:py-2.5 bg-white/95 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-deep-green shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-white transition-all duration-300 cursor-default">
                  👭 10–20 Women
                </span>
                <span className="inline-flex items-center h-9 md:h-10 px-4 md:px-5 py-2 md:py-2.5 bg-white/95 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-deep-green shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-white transition-all duration-300 cursor-default">
                  💸 R$ 2.500 – R$ 3.500
                </span>
              </div>
            </FadeIn>

            {/* CTA Buttons - Aligned with heading block, removed individual max-width - Mobile optimized with larger touch targets */}
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-2">
                {/* Primary Button - Perfect vertical centering - Minimum 44px height for mobile */}
                <button className="flex items-center justify-center px-6 py-4 sm:py-3.5 md:px-8 md:py-4 rounded-full bg-deep-green text-white font-semibold text-base sm:text-sm md:text-base hover:bg-deep-green/90 hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green min-h-[48px] sm:min-h-[44px]">
                  Reserve Your Spot
                </button>
                
                {/* Secondary Button - Perfect vertical centering, aligned baseline with primary - Minimum 44px height for mobile */}
                <a
                  href="/learn-more"
                  className="flex items-center justify-center px-6 py-4 sm:py-3.5 md:px-8 md:py-4 rounded-full border-2 border-white/90 text-white font-semibold text-base sm:text-sm md:text-base hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent min-h-[48px] sm:min-h-[44px]"
                >
                  Learn More
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
