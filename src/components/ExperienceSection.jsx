/**
 * Retreat page — “What you’ll step into”: interactive gallery / hero (background follows active card).
 */
import InteractiveGalleryHero from './InteractiveGalleryHero'
import { experienceInteractiveGallerySlides } from '../data/experienceInteractiveGallerySlides'
import { useLanguage } from '../i18n/LanguageContext'

export default function ExperienceSection() {
  const { t } = useLanguage()
  const slides = experienceInteractiveGallerySlides.map((s) => ({
    ...s,
    title: t(`experience.slides.${s.id}.title`),
    subtitle: t(`experience.slides.${s.id}.subtitle`),
    description: t(`experience.slides.${s.id}.description`),
  }))
  return (
    <InteractiveGalleryHero
      sectionId="experience"
      slides={slides}
      cta={{ label: t('experience.cta'), to: '/retreat#retreat-flow' }}
      autoplayMs={9000}
      fullBleed
    />
  )
}
