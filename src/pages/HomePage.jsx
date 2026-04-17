/**
 * Yamuna Retreats — main marketing homepage (organization overview).
 * The detailed Itamambuca (Ubatuba) offering lives at /retreat.
 */
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import {
  HOME_HERO_STATIC_SRC,
  HOME_HERO_VIDEO_MOBILE_SRC,
  HOME_HERO_VIDEO_SRC,
} from '../constants/brand'
import ReturnSection from '../components/ReturnSection'
import SanctuarySection from '../components/SanctuarySection'
import TestimonialSection from '../components/TestimonialSection'
import WhoItsForSection from '../components/WhoItsForSection'
import RetreatRhythmSection from '../components/RetreatRhythmSection'
import HostsSection from '../components/HostsSection'
export default function HomePage() {
  const { hash, pathname } = useLocation()
  const heroVideoRef = useRef(null)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [heroVideoFailed, setHeroVideoFailed] = useState(false)
  /** Fade video in only once frames are moving — waves img shows underneath first (fast on iPhone). */
  const [heroVideoVisible, setHeroVideoVisible] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    setHeroVideoVisible(false)
  }, [reduceMotion, heroVideoFailed, HOME_HERO_VIDEO_SRC, HOME_HERO_VIDEO_MOBILE_SRC])

  /** Hint the browser to start fetching the hero MP4 as early as possible (Safari ignores sometimes). */
  useEffect(() => {
    if (reduceMotion || heroVideoFailed || !HOME_HERO_VIDEO_SRC) return
    const href =
      HOME_HERO_VIDEO_MOBILE_SRC &&
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 767px)').matches
        ? HOME_HERO_VIDEO_MOBILE_SRC
        : HOME_HERO_VIDEO_SRC
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'video'
    link.href = href
    link.setAttribute('type', 'video/mp4')
    document.head.appendChild(link)
    return () => {
      link.remove()
    }
  }, [reduceMotion, heroVideoFailed, HOME_HERO_VIDEO_SRC, HOME_HERO_VIDEO_MOBILE_SRC])

  useEffect(() => {
    if (reduceMotion || heroVideoFailed || !HOME_HERO_VIDEO_SRC) return
    const el = heroVideoRef.current
    if (!el) return

    const tryPlay = () => {
      el.muted = true
      el.defaultMuted = true
      el.setAttribute('muted', '')
      el.setAttribute('playsinline', '')
      el.setAttribute('webkit-playsinline', '')
      el.play().catch(() => {})
    }

    try {
      el.load()
    } catch {
      /* ignore */
    }
    tryPlay()
    el.addEventListener('canplay', tryPlay)
    el.addEventListener('canplaythrough', tryPlay)
    el.addEventListener('loadeddata', tryPlay)
    el.addEventListener('loadedmetadata', tryPlay)
    const onVis = () => {
      if (document.visibilityState === 'visible') tryPlay()
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      el.removeEventListener('canplay', tryPlay)
      el.removeEventListener('canplaythrough', tryPlay)
      el.removeEventListener('loadeddata', tryPlay)
      el.removeEventListener('loadedmetadata', tryPlay)
      document.removeEventListener('visibilitychange', onVis)
      el.pause()
    }
  }, [reduceMotion, heroVideoFailed])

  useEffect(() => {
    if (pathname !== '/' || !hash) return
    const id = hash.replace('#', '')
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [hash, pathname])

  return (
    <>
      <section className="relative min-h-[100dvh] overflow-x-clip">
        <div className="absolute inset-0 bg-deep-green">
          {reduceMotion && HOME_HERO_STATIC_SRC ? (
            <img
              src={HOME_HERO_STATIC_SRC}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              decoding="async"
              aria-hidden
            />
          ) : null}
          {!reduceMotion && HOME_HERO_STATIC_SRC ? (
            <img
              src={HOME_HERO_STATIC_SRC}
              alt=""
              className="absolute inset-0 z-0 h-full w-full object-cover"
              decoding="async"
              fetchPriority="high"
              loading="eager"
              aria-hidden
            />
          ) : null}
          {!reduceMotion && !heroVideoFailed && HOME_HERO_VIDEO_SRC ? (
            <video
              ref={heroVideoRef}
              className={`pointer-events-none absolute inset-0 z-[1] h-full min-h-full w-full object-cover [transform:translateZ(0)] transition-opacity duration-700 ease-out ${
                heroVideoVisible ? 'opacity-100' : 'opacity-0'
              }`}
              poster={HOME_HERO_STATIC_SRC}
              autoPlay
              muted
              defaultMuted
              loop
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
              aria-hidden
              onError={() => setHeroVideoFailed(true)}
              onPlaying={() => setHeroVideoVisible(true)}
              onTimeUpdate={(e) => {
                if (e.currentTarget.currentTime > 0.02) setHeroVideoVisible(true)
              }}
            >
              {HOME_HERO_VIDEO_MOBILE_SRC ? (
                <source media="(max-width: 767px)" src={HOME_HERO_VIDEO_MOBILE_SRC} type="video/mp4" />
              ) : null}
              <source src={HOME_HERO_VIDEO_SRC} type="video/mp4" />
            </video>
          ) : null}
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/12" />

        <div className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-5 sm:px-8 pt-24 pb-32 sm:pt-28 sm:pb-36 text-center">
          <div className="w-full max-w-5xl mx-auto">
            <FadeIn>
              <h1 className="font-display text-white text-[clamp(1.35rem,4vw,2.75rem)] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[0.18em] uppercase leading-snug mb-8 sm:mb-10 drop-shadow-[0_2px_32px_rgba(0,0,0,0.45)]">
                Yamuna Retreats
              </h1>
            </FadeIn>
            <FadeIn delay={120}>
              <p className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 text-lg sm:text-xl md:text-2xl text-white/95 drop-shadow-md">
                <span className="font-serif italic font-normal tracking-wide">Ancient wisdom for the</span>
                <span className="font-sans font-light text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.06em] text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)] leading-none pl-1">
                  modern soul
                </span>
              </p>
            </FadeIn>
            <FadeIn delay={220}>
              <Link
                to="/retreat"
                className="inline-flex items-center justify-center mt-12 sm:mt-14 px-8 py-3 border border-white/40 !text-white visited:!text-white text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-[0.28em] hover:bg-white/10 hover:border-white/70 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-h-[44px]"
              >
                Enter the retreat
              </Link>
            </FadeIn>
          </div>

          <div
            className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] motion-safe:animate-bounce"
            aria-hidden
          >
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9 mx-auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </section>

      <ReturnSection />

      <RetreatRhythmSection />

      <WhoItsForSection />

      <SanctuarySection />

      <HostsSection />

      <TestimonialSection />
    </>
  )
}
