/**
 * Retreat page — logistics & FAQ (“Before you arrive”). Edit `faqs` for your final copy.
 */
import { useId, useState } from 'react'
import FadeIn from './FadeIn'
import { useLanguage } from '../i18n/LanguageContext'

function Chevron({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FaqSection() {
  const { t, get } = useLanguage()
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = get('faq.items') || []

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-[#F0EDE6] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <header className="mb-10 text-center sm:mb-12 sm:text-left">
            <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B5344] sm:mb-4 sm:text-xs">
              {t('faq.kicker')}
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#2C2419] sm:text-4xl md:text-5xl">
              {t('faq.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-gray-600 sm:mx-0">
              {t('faq.body')}
            </p>
          </header>
        </FadeIn>

        <dl className="divide-y divide-deep-green/[0.08] border-y border-deep-green/[0.08]">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            const panelId = `${baseId}-panel-${i}`
            const buttonId = `${baseId}-btn-${i}`
            return (
              <div key={item.q}>
                <dt className="m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="group -mx-2 flex w-full cursor-pointer items-start justify-between gap-4 rounded-lg px-2 py-6 text-left transition-colors hover:bg-black/[0.045] active:bg-black/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-green/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0EDE6] sm:-mx-3 sm:gap-5 sm:px-3 sm:py-7"
                  >
                    <span className="font-serif text-lg font-semibold leading-snug text-deep-green sm:text-xl">
                      {item.q}
                    </span>
                    <Chevron
                      className={`mt-0.5 h-5 w-5 shrink-0 text-deep-green/45 transition-transform duration-300 ease-out ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </dt>
                <dd id={panelId} role="region" aria-labelledby={buttonId} className="m-0">
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="pb-6 pl-2 pr-10 font-sans text-sm leading-relaxed text-gray-600 sm:pb-7 sm:pl-3 sm:text-[15px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
