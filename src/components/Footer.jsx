/**
 * Site footer — three columns, journal signup, cream-on-beige palette.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { YAMUNA_LOGO_SRC } from '../constants/brand'
import { useLanguage } from '../i18n/LanguageContext'

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

export default function Footer() {
  const [email, setEmail] = useState('')
  const { t, get } = useLanguage()
  const exploreLinks = get('footer.exploreLinks') || []

  function handleJournalSubmit(e) {
    e.preventDefault()
  }

  return (
    <footer className="bg-[#E8E4DC] text-[#2a2a2a] pt-14 sm:pt-16 md:pt-20 pb-[max(2rem,calc(2rem+env(safe-area-inset-bottom,0px)))] sm:pb-10 pl-[calc(1rem+env(safe-area-inset-left,0px))] pr-[calc(1rem+env(safe-area-inset-right,0px))] sm:pl-[calc(1.5rem+env(safe-area-inset-left,0px))] sm:pr-[calc(1.5rem+env(safe-area-inset-right,0px))] md:pl-[calc(2.5rem+env(safe-area-inset-left,0px))] md:pr-[calc(2.5rem+env(safe-area-inset-right,0px))] lg:pl-[calc(3.5rem+env(safe-area-inset-left,0px))] lg:pr-[calc(3.5rem+env(safe-area-inset-right,0px))]">
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
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2 text-terracotta sm:gap-4">
              <a
                href="/"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2 focus:ring-offset-[#E8E4DC]"
                aria-label={t('footer.home')}
              >
                <IconCircleMark className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2 focus:ring-offset-[#E8E4DC]"
                aria-label={t('footer.instagram')}
              >
                <IconInstagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@yamunaretreats.com"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2 focus:ring-offset-[#E8E4DC]"
                aria-label={t('footer.email')}
              >
                <IconMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-terracotta mb-5">
              {t('footer.explore')}
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
              {t('footer.journalTitle')}
            </h4>
            <p className="text-sm text-gray-600 font-sans leading-relaxed mb-4 max-w-sm">
              {t('footer.journalBody')}
            </p>
            <form onSubmit={handleJournalSubmit} className="relative max-w-sm">
              <label htmlFor="footer-email" className="sr-only">
                {t('footer.newsletterLabel')}
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.emailPlaceholder')}
                className="w-full min-h-[48px] pl-4 pr-14 py-3 rounded-md border border-[#C9C2B6] bg-[#F5F2EC] text-base text-[#1a1a1a] placeholder:text-gray-400 font-sans focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta/50"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center text-terracotta hover:bg-black/[0.04] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta"
                aria-label={t('footer.subscribe')}
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
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
