/**
 * Home Page - Main landing page for Sacred Shores Retreats
 */
import Hero from '../components/Hero'
import ExperienceSection from '../components/ExperienceSection'
import AboutSection from '../components/AboutSection'
import TimelineSection from '../components/TimelineSection'
import IncludedSection from '../components/IncludedSection'
import PricingSection from '../components/PricingSection'
import StayConnectedSection from '../components/StayConnectedSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <AboutSection />
      <TimelineSection />
      <IncludedSection />
      <PricingSection />
      <StayConnectedSection />
    </>
  )
}

