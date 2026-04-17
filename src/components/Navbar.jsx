/**
 * Navigation — transparent overlay on hero routes; editorial solid bar elsewhere.
 */
import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { YAMUNA_LOGO_SRC } from '../constants/brand'

const RETREAT_TOP_PATH = '/retreat'

function RetreatLogo({ light }) {
  return (
    <Link
      to="/"
      className={`group flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm ${
        light ? 'focus-visible:ring-white focus-visible:ring-offset-deep-green' : 'focus-visible:ring-terracotta focus-visible:ring-offset-nav-bg'
      }`}
      aria-label="Yamuna Retreats home"
    >
      <img
        src={YAMUNA_LOGO_SRC}
        alt=""
        width={200}
        height={56}
        className={`h-9 w-auto sm:h-10 md:h-11 max-w-[min(200px,42vw)] object-contain object-left origin-left transition-transform duration-300 ease-out group-hover:scale-110 ${
          light ? 'drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)]' : ''
        }`}
        decoding="async"
      />
    </Link>
  )
}

const overlayNavLink = ({ isActive }) =>
  `text-[11px] lg:text-xs font-sans font-medium uppercase tracking-[0.2em] whitespace-nowrap pb-0.5 border-b no-underline !text-white visited:!text-white transition-colors ${
    isActive ? '!text-white border-white' : 'border-transparent hover:!text-white hover:border-white/60'
  }`

const overlayAnchor =
  'text-[11px] lg:text-xs font-sans font-medium uppercase tracking-[0.2em] whitespace-nowrap border-b border-transparent no-underline !text-white visited:!text-white hover:!text-white hover:border-white/60 pb-0.5 transition-colors'

const solidLink = ({ isActive }) =>
  `text-[11px] lg:text-xs font-sans font-medium uppercase tracking-[0.2em] pb-0.5 border-b transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 rounded-sm ${
    isActive ? 'text-deep-green border-deep-green' : 'text-nav-ink border-transparent hover:border-nav-ink/30'
  }`

const solidAnchor =
  'text-[11px] lg:text-xs font-sans font-medium uppercase tracking-[0.2em] text-nav-ink pb-0.5 border-b border-transparent hover:border-nav-ink/30 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 rounded-sm'

function RetreatsDropdown({ light, open, onOpenChange, onItamambucaClick }) {
  const ref = useRef(null)
  const { pathname } = useLocation()
  const onRetreatRoute = pathname === '/retreat'

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (!ref.current?.contains(e.target)) onOpenChange(false)
    }
    const onEsc = (e) => {
      if (e.key === 'Escape') onOpenChange(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onEsc)
    }
  }, [open, onOpenChange])

  const triggerBase =
    'font-sans font-medium uppercase tracking-[0.2em] pb-0.5 border-b transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 rounded-sm'
  const triggerOverlay = `${triggerBase} text-[11px] lg:text-xs border-transparent no-underline !text-white visited:!text-white ${
    open || onRetreatRoute ? '!text-white border-white' : 'hover:!text-white hover:border-white/60'
  } focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`
  const triggerSolid = `${triggerBase} text-[11px] lg:text-xs focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-nav-bg ${
    open || onRetreatRoute
      ? 'text-deep-green border-deep-green'
      : 'text-nav-ink border-transparent hover:border-nav-ink/30'
  }`

  const panelBase = 'absolute left-1/2 top-full z-50 min-w-[11rem] -translate-x-1/2 pt-2'
  const panelInner = light
    ? 'rounded-lg border border-white/20 bg-deep-green/95 py-1 shadow-lg backdrop-blur-md'
    : 'rounded-lg border border-black/[0.08] bg-nav-bg py-1 shadow-lg'

  const itemClass = light
    ? 'block px-4 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white/95 no-underline visited:text-white/95 hover:bg-white/10'
    : 'block px-4 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-nav-ink no-underline hover:bg-black/[0.04]'

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={light ? triggerOverlay : triggerSolid}
        aria-expanded={open}
        aria-haspopup="menu"
        id="nav-retreats-trigger"
        aria-controls="nav-retreats-menu"
        onClick={() => onOpenChange(!open)}
      >
        Retreats
      </button>
      {open && (
        <div id="nav-retreats-menu" role="menu" aria-labelledby="nav-retreats-trigger" className={panelBase}>
          <div className={panelInner}>
            <Link
              role="menuitem"
              to={RETREAT_TOP_PATH}
              className={itemClass}
              onClick={(e) => {
                onOpenChange(false)
                onItamambucaClick(e)
              }}
            >
              Itamambuca
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [retreatDropdownOpen, setRetreatDropdownOpen] = useState(false)
  const [mobileRetreatOpen, setMobileRetreatOpen] = useState(false)
  const [darkSectionActive, setDarkSectionActive] = useState(false)

  const heroOverlay = (pathname === '/' || pathname === '/retreat') && !scrolled
  const light = heroOverlay || darkSectionActive

  /** Itamambuca → top of /retreat; if already there, scroll up (and drop hash). */
  const handleItamambucaClick = (e) => {
    if (pathname !== '/retreat') return
    e.preventDefault()
    if (hash) navigate(RETREAT_TOP_PATH, { replace: true })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    setMobileMenuOpen(false)
    setRetreatDropdownOpen(false)
    setMobileRetreatOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileMenuOpen) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const isHeroRoute = pathname === '/' || pathname === '/retreat'

    const pastHeroThreshold = () =>
      isHeroRoute ? Math.max(window.innerHeight * 0.92, 72) : 0

    const handleScroll = () => {
      if (!isHeroRoute) return
      setScrolled(window.scrollY > pastHeroThreshold())
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [pathname])

  useEffect(() => {
    const darkSections = Array.from(document.querySelectorAll('[data-nav-theme="dark"]'))
    if (!darkSections.length) {
      setDarkSectionActive(false)
      return undefined
    }

    const active = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = entry.target
          if (entry.isIntersecting) active.add(key)
          else active.delete(key)
        })
        setDarkSectionActive(active.size > 0)
      },
      {
        // Trigger when the section is roughly under the nav area.
        root: null,
        threshold: 0.01,
        rootMargin: '-96px 0px -70% 0px',
      }
    )

    darkSections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
        light
          ? 'border-b-0 bg-transparent'
          : 'border-b border-black/[0.08] bg-nav-bg/98 shadow-sm backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex w-full items-center justify-between gap-3 sm:gap-6 py-3.5 md:py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:justify-items-stretch pl-[calc(1rem+env(safe-area-inset-left,0px))] pr-[calc(1rem+env(safe-area-inset-right,0px))] sm:pl-[calc(1.5rem+env(safe-area-inset-left,0px))] sm:pr-[calc(1.5rem+env(safe-area-inset-right,0px))] md:pl-[calc(2.5rem+env(safe-area-inset-left,0px))] md:pr-[calc(2.5rem+env(safe-area-inset-right,0px))] lg:pl-[calc(3.5rem+env(safe-area-inset-left,0px))] lg:pr-[calc(3.5rem+env(safe-area-inset-right,0px))]">
        <div className="relative z-10 flex min-w-0 items-center justify-start gap-2 md:min-w-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className={`md:hidden p-2 -ml-2 rounded min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              light
                ? 'text-white focus-visible:ring-white focus-visible:ring-offset-transparent'
                : 'text-nav-ink focus-visible:ring-terracotta focus-visible:ring-offset-nav-bg'
            }`}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <RetreatLogo light={light} />
        </div>

        <div
          className={`hidden shrink-0 items-center justify-center justify-self-center gap-8 whitespace-nowrap md:flex lg:gap-10 xl:gap-12 ${
            light ? 'text-white [&_a]:!text-white [&_a]:visited:!text-white' : ''
          }`}
        >
          {light ? (
            <>
              <RetreatsDropdown
                light
                open={retreatDropdownOpen}
                onOpenChange={setRetreatDropdownOpen}
                onItamambucaClick={handleItamambucaClick}
              />
              <NavLink to="/wellness" className={overlayNavLink}>
                Wellness
              </NavLink>
              <NavLink to="/learn-more" className={overlayNavLink}>
                About
              </NavLink>
            </>
          ) : (
            <>
              <RetreatsDropdown
                light={false}
                open={retreatDropdownOpen}
                onOpenChange={setRetreatDropdownOpen}
                onItamambucaClick={handleItamambucaClick}
              />
              <NavLink to="/wellness" className={solidLink}>
                Wellness
              </NavLink>
              <NavLink to="/learn-more" className={solidLink}>
                About
              </NavLink>
            </>
          )}
        </div>

        <div className="relative z-10 flex items-center justify-end justify-self-end gap-1 sm:gap-2">
          <Link
            to="/retreat#pricing"
            className={`p-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-w-[44px] min-h-[44px] flex items-center justify-center ${
              light
                ? 'text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-transparent'
                : 'text-nav-ink hover:bg-black/[0.05] focus-visible:ring-terracotta focus-visible:ring-offset-nav-bg'
            }`}
            aria-label="View dates and pricing"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.35} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5"
              />
            </svg>
          </Link>
          <button
            type="button"
            className={`p-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-w-[44px] min-h-[44px] flex items-center justify-center ${
              light
                ? 'text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-transparent'
                : 'text-nav-ink hover:bg-black/[0.05] focus-visible:ring-terracotta focus-visible:ring-offset-nav-bg'
            }`}
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.35} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t py-4 space-y-1 shadow-inner pl-[calc(1rem+env(safe-area-inset-left,0px))] pr-[calc(1rem+env(safe-area-inset-right,0px))] ${
            light ? 'border-white/15 bg-deep-green/95 backdrop-blur-md' : 'border-black/[0.06] bg-nav-bg'
          }`}
        >
          <div className={light ? 'text-white/90' : 'text-nav-ink'}>
            <button
              type="button"
              onClick={() => setMobileRetreatOpen((o) => !o)}
              className={`block w-full px-3 py-3 rounded-lg font-sans text-sm uppercase tracking-wider text-left ${
                light ? 'text-white/90 hover:bg-white/10' : 'text-nav-ink hover:bg-black/[0.04]'
              }`}
              aria-expanded={mobileRetreatOpen}
              aria-controls="mobile-retreat-subnav"
            >
              Retreats
            </button>
            {mobileRetreatOpen && (
              <div id="mobile-retreat-subnav" className="pb-1 pl-2">
                <Link
                  to={RETREAT_TOP_PATH}
                  onClick={(e) => {
                    setMobileMenuOpen(false)
                    handleItamambucaClick(e)
                  }}
                  className={`block rounded-lg px-4 py-2.5 font-sans text-sm uppercase tracking-wider ${
                    light ? 'text-white/85 hover:bg-white/10' : 'text-nav-ink/90 hover:bg-black/[0.04]'
                  }`}
                >
                  Itamambuca
                </Link>
              </div>
            )}
          </div>
          <NavLink
            to="/wellness"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-3 rounded-lg font-sans text-sm uppercase tracking-wider ${
                light
                  ? isActive
                    ? 'bg-white/15 text-white'
                    : 'text-white/90'
                  : isActive
                    ? 'bg-white shadow-sm text-deep-green'
                    : 'text-nav-ink'
              }`
            }
          >
            Wellness
          </NavLink>
          <NavLink
            to="/learn-more"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-3 rounded-lg font-sans text-sm uppercase tracking-wider ${
                light
                  ? isActive
                    ? 'bg-white/15 text-white'
                    : 'text-white/90'
                  : isActive
                    ? 'bg-white shadow-sm text-deep-green'
                    : 'text-nav-ink'
              }`
            }
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  )
}
