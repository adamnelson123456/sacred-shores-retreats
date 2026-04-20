/**
 * Retreat page — “This retreat is for you if…” (three-column feature layout + vertical rules).
 * Anchor `retreat-flow` kept for existing CTAs.
 */
import FadeIn from './FadeIn'
import { useLanguage } from '../i18n/LanguageContext'

function IconTile({ children }) {
  return (
    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-seafoam text-deep-green shadow-sm">
      {children}
    </div>
  )
}

function getPillars(t) {
  return [
    {
      titleBefore: t('retreatFlow.pillars.0.titleBefore'),
      titleAccent: t('retreatFlow.pillars.0.titleAccent'),
      body: t('retreatFlow.pillars.0.body'),
      icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        />
      </svg>
      ),
    },
    {
      titleBefore: t('retreatFlow.pillars.1.titleBefore'),
      titleAccent: t('retreatFlow.pillars.1.titleAccent'),
      body: t('retreatFlow.pillars.1.body'),
      icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21c-4.5-3.5-7-6.5-7-10a4 4 0 017.5-2 4 4 0 017.5 2c0 3.5-2.5 6.5-7 10z"
        />
      </svg>
      ),
    },
    {
      titleBefore: t('retreatFlow.pillars.2.titleBefore'),
      titleAccent: t('retreatFlow.pillars.2.titleAccent'),
      body: t('retreatFlow.pillars.2.body'),
      icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      ),
    },
  ]
}

export default function RetreatDailyFlowSection() {
  const { t } = useLanguage()
  const pillars = getPillars(t)
  return (
    <section
      id="retreat-flow"
      className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-center font-sans text-[clamp(1.65rem,4vw,2.35rem)] font-bold leading-tight tracking-tight text-neutral-900">
            {t('retreatFlow.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-base leading-relaxed text-gray-600 sm:mt-5 sm:text-lg">
            {t('retreatFlow.body')}
          </p>
        </FadeIn>

        <div className="mt-14 border-t border-gray-200 sm:mt-16 md:mt-20">
          <div className="grid divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {pillars.map((pillar, index) => (
              <FadeIn key={pillar.titleAccent} delay={index * 90}>
                <div className="px-5 py-10 sm:px-8 md:px-8 md:py-12 lg:px-10 lg:py-14">
                  <IconTile>{pillar.icon}</IconTile>
                  <h3 className="font-sans text-lg font-bold leading-snug tracking-tight text-neutral-900 sm:text-xl">
                    {pillar.titleBefore}{' '}
                    <span className="text-deep-green">{pillar.titleAccent}</span>
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-gray-700 sm:text-[15px] sm:leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
