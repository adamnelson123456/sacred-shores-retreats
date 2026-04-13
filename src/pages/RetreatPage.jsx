/**
 * Retreat landing — Itamambuca (Ubatuba): intro, welcome gallery, daily flow, experiences, included, FAQ, pricing.
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import RetreatDailyFlowSection from '../components/RetreatDailyFlowSection'
import ExperienceSection from '../components/ExperienceSection'
import ItamambucaGallerySection from '../components/ItamambucaGallerySection'
import IncludedSection from '../components/IncludedSection'
import PricingSection from '../components/PricingSection'
import FaqSection from '../components/FaqSection'

export default function RetreatPage() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/retreat') return
    if (hash) {
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash, pathname])

  return (
    <>
      <Hero />
      <AboutSection />
      <ItamambucaGallerySection />
      <RetreatDailyFlowSection />
      <ExperienceSection />
      <IncludedSection />
      <FaqSection />
      <PricingSection />
    </>
  )
}
