/**
 * Site footer — three columns, journal signup, cream-on-beige palette.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { YAMUNA_LOGO_SRC } from '../constants/brand'

function IconCircleMark({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M12 8v8M8 12h8" />
    </svg>
  )
}

function IconInstagram({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17 7h.01" strokeLinecap="round" />
    </svg>
  )
}

function IconMail({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" />
    </svg>
  )
}

const exploreLinks = [
  { label: 'Privacy policy', href: '#' },
  { label: 'Terms of service', href: '#' },
  { label: 'Sustainability', href: '#' },
  { label: 'Contact us', href: 'mailto:hello@yamunaretreats.com' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  function handleJournalSubmit(e) {
    e.preventDefault()
  }

  return (
    <footer className="bg-[#E8E4DC] text-[#2a2a2a] pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 md:px-10 lg:px-14">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16 mb-12 sm:mb-14">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Link
                to="/"
                className="inline-block hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2 focus:ring-offset-[#E8E4DC] rounded-sm"
              >
                <img
                  src={YAMUNA_LOGO_SRC}
                  alt="Yamuna Retreats"
                  width={220}
                  height={62}
                  className="h-11 sm:h-12 w-auto max-w-[220px] object-contain object-left"
                  decoding="async"
                />
              </Link>
            </div>
            <p className="text-sm text-gray-600 font-sans leading-relaxed max-w-xs mb-6">
              Crafting experiences that bridge the sacred and the everyday. A sanctuary for the soul, a home for the
              seeker.
            </p>
            <div className="flex items-center gap-4 text-terracotta">
              <a
                href="/"
                className="hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2 focus:ring-offset-[#E8E4DC] rounded-full p-1"
                aria-label="Home"
              >
                <IconCircleMark className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2 focus:ring-offset-[#E8E4DC] rounded-full p-1"
                aria-label="Instagram"
              >
                <IconInstagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@yamunaretreats.com"
                className="hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2 focus:ring-offset-[#E8E4DC] rounded-full p-1"
                aria-label="Email"
              >
                <IconMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-terracotta mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs font-sans font-medium tracking-[0.12em] uppercase text-gray-600 hover:text-terracotta transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2 focus:ring-offset-[#E8E4DC] rounded-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Journal — anchor for nav “Journal” link on home */}
          <div id="journal" className="scroll-mt-20">
            <h4 className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-terracotta mb-5">
              The journal
            </h4>
            <p className="text-sm text-gray-600 font-sans leading-relaxed mb-4 max-w-sm">
              Receive seasonal reflections and sanctuary updates.
            </p>
            <form onSubmit={handleJournalSubmit} className="relative max-w-sm">
              <label htmlFor="footer-email" className="sr-only">
                Email for newsletter
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full pl-4 pr-12 py-3 rounded-md border border-[#C9C2B6] bg-[#F5F2EC] text-sm text-[#1a1a1a] placeholder:text-gray-400 font-sans focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta/50"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-terracotta hover:bg-black/[0.04] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta"
                aria-label="Subscribe"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#D0C9BE] pt-8 text-center">
          <p className="text-[10px] sm:text-[11px] font-sans tracking-[0.14em] uppercase text-gray-400">
            © 2026 Yamuna Retreats. Crafted for the soul.
          </p>
        </div>
      </div>
    </footer>
  )
}
