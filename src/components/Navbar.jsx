/**
 * Navigation bar component - Sticky header with smooth scroll links
 * Refined: More compact height, improved hover/active states, focus accessibility
 * Mobile: Added hamburger menu for mobile navigation
 */
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 py-4 md:py-5 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <a
        href="/"
        className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-deep-green hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 rounded min-h-[44px] flex items-center"
      >
        Sacred Shores
      </a>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium text-gray-700">
        <a
          href="#experience"
          className="hover:text-deep-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 rounded px-2 py-1 min-h-[44px] flex items-center"
        >
          Experiences
        </a>
        <a
          href="#about"
          className="hover:text-deep-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 rounded px-2 py-1 min-h-[44px] flex items-center"
        >
          About
        </a>
        <a
          href="#pricing"
          className="hover:text-deep-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 rounded px-2 py-1 min-h-[44px] flex items-center"
        >
          Pricing
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-deep-green focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Reserve Button */}
        <button
          className="hidden md:block px-6 md:px-7 py-2 md:py-2.5 rounded-full bg-deep-green text-white text-sm font-semibold hover:bg-deep-green/90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 focus:ring-offset-white min-h-[44px]"
        >
          Reserve
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md shadow-lg border-t border-gray-200 md:hidden">
          <div className="px-4 py-4 space-y-2">
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-deep-green/5 hover:text-deep-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 min-h-[44px] flex items-center"
            >
              Experiences
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-deep-green/5 hover:text-deep-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 min-h-[44px] flex items-center"
            >
              About
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-deep-green/5 hover:text-deep-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 min-h-[44px] flex items-center"
            >
              Pricing
            </a>
            <button
              className="w-full mt-2 px-6 py-3 rounded-full bg-deep-green text-white font-semibold hover:bg-deep-green/90 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 min-h-[44px]"
            >
              Reserve
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
