/**
 * Retreat page — place & invitation (Itamambuca, Ubatuba).
 */
import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'
import { useLanguage } from '../i18n/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()
  return (
    <section id="about" className="scroll-mt-20 bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-6 text-center text-xs font-sans font-semibold uppercase tracking-[0.2em] text-terracotta sm:mb-8 sm:text-sm sm:text-left">
            {t('retreatAbout.kicker')}
          </p>
        </FadeIn>

        <div className="space-y-6 text-center sm:text-left sm:space-y-8">
          <FadeIn delay={60}>
            <p className="font-serif text-lg leading-relaxed text-deep-green sm:text-xl md:text-2xl">
              {t('retreatAbout.lead')}
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="font-serif text-2xl italic leading-snug text-deep-green/95 sm:text-3xl md:text-4xl">
              {t('retreatAbout.punch')}
            </p>
          </FadeIn>
          <FadeIn delay={180}>
            <div className="space-y-4 font-body text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
              <p>{t('retreatAbout.lines.0')}</p>
              <p>{t('retreatAbout.lines.1')}</p>
              <p>{t('retreatAbout.lines.2')}</p>
            </div>
          </FadeIn>
          <FadeIn delay={240}>
            <p className="pt-2 font-body text-base leading-relaxed text-gray-800 sm:text-lg">
              {t('retreatAbout.closeA')}
              <br />
              <span className="font-serif text-lg text-deep-green sm:text-xl">
                {t('retreatAbout.closeB')}
              </span>
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="mt-12 flex justify-center sm:mt-14 sm:justify-start">
            <Link
              to="/learn-more"
              className="inline-flex min-h-[44px] items-center rounded-full bg-deep-green px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-deep-green/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 sm:px-8 sm:text-base"
            >
              {t('retreatAbout.learnMore')}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
