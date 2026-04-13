/**
 * Retreat page — “What you’ll step into”: interactive gallery / hero (background follows active card).
 */
import InteractiveGalleryHero from './InteractiveGalleryHero'
import { experienceInteractiveGallerySlides } from '../data/experienceInteractiveGallerySlides'

export default function ExperienceSection() {
  return (
    <InteractiveGalleryHero
      sectionId="experience"
      slides={experienceInteractiveGallerySlides}
      cta={{ label: 'Discover the week', to: '/retreat#retreat-flow' }}
      autoplayMs={9000}
      fullBleed
    />
  )
}
