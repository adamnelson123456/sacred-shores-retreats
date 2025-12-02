/**
 * Footer component - Site footer with links and branding
 * Refined: Increased padding, improved hover states, better text wrapping
 */
import FadeIn from './FadeIn'

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-deep-green text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <FadeIn>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-3 sm:mb-4">
                Sacred Shores Retreats
              </h3>
              <p className="text-white/80 font-body leading-relaxed text-xs sm:text-sm md:text-base max-w-xs">
                With modern amenities and personalized service, it's the perfect
                haven for those seeking wellness and relaxation.
              </p>
            </div>
          </FadeIn>

          {/* Explore */}
          <FadeIn delay={100}>
            <div>
              <h4 className="font-semibold mb-5 sm:mb-6 text-sm sm:text-base md:text-lg">Explore</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-white/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green rounded py-1 min-h-[44px] flex items-center"
                  >
                    Upcoming Retreats
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green rounded py-1 min-h-[44px] flex items-center"
                  >
                    About Sacred Shores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green rounded py-1 min-h-[44px] flex items-center"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* About Us */}
          <FadeIn delay={200}>
            <div>
              <h4 className="font-semibold mb-5 sm:mb-6 text-sm sm:text-base md:text-lg">About Us</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-white/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green rounded py-1 min-h-[44px] flex items-center"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green rounded py-1 min-h-[44px] flex items-center"
                  >
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green rounded py-1 min-h-[44px] flex items-center"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Connect */}
          <FadeIn delay={300}>
            <div>
              <h4 className="font-semibold mb-5 sm:mb-6 text-sm sm:text-base md:text-lg">Connect</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-white/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green rounded py-1 min-h-[44px]"
                  >
                    <span aria-hidden="true">📷</span> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green rounded py-1 min-h-[44px]"
                  >
                    <span aria-hidden="true">✉️</span> Email
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-green rounded py-1 min-h-[44px]"
                  >
                    <span aria-hidden="true">💬</span> WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/70">
          <p>© Sacred Shores Retreats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
