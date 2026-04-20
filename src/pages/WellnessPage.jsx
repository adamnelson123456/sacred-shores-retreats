/**
 * Wellness — how Yamuna approaches women’s care: principles and philosophy.
 */
import FadeIn from '../components/FadeIn'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export default function WellnessPage() {
  const { t } = useLanguage()
  const principles = [
    { n: '01', title: t('wellness.principles.0.title'), body: t('wellness.principles.0.body') },
    { n: '02', title: t('wellness.principles.1.title'), body: t('wellness.principles.1.body') },
    { n: '03', title: t('wellness.principles.2.title'), body: t('wellness.principles.2.body') },
  ]
  const philosophyBlocks = [
    { title: t('wellness.blocks.0.title'), body: t('wellness.blocks.0.body') },
    { title: t('wellness.blocks.1.title'), body: t('wellness.blocks.1.body') },
    { title: t('wellness.blocks.2.title'), body: t('wellness.blocks.2.body') },
    { title: t('wellness.blocks.3.title'), body: t('wellness.blocks.3.body') },
    { title: t('wellness.blocks.4.title'), body: t('wellness.blocks.4.body') },
  ]
  return (
    <article className="bg-[#FAF8F4] pb-4 pt-20 text-gray-800 sm:pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-deep-green/[0.07]">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-hero-gold/[0.12] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-seafoam/40 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-28">
          <FadeIn>
            <p className="mb-5 flex flex-wrap items-center justify-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-terracotta sm:justify-start sm:text-xs">
              <span className="h-px w-10 bg-hero-gold/80 sm:w-14" aria-hidden />
              {t('nav.wellness')}
            </p>
            <h1 className="text-center font-serif text-[clamp(2.15rem,5.5vw,3.85rem)] font-bold leading-[1.06] tracking-tight text-deep-green sm:text-left">
              {t('wellness.heroTitleA')}{' '}
              <span className="text-terracotta-dark decoration-hero-gold/40 underline decoration-2 underline-offset-[0.18em]">
                {t('wellness.heroTitleAyurveda')}
              </span>
              {t('wellness.heroTitleB')}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-center font-body text-lg leading-[1.75] text-gray-600 sm:mx-0 sm:text-left sm:text-xl">
              {t('wellness.heroBody')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-deep-green/[0.06] bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center md:text-left">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">{t('wellness.commitmentsKicker')}</p>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-deep-green sm:text-4xl md:text-[2.35rem]">
                {t('wellness.commitmentsTitle')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-gray-600 sm:text-lg md:mx-0">
                {t('wellness.commitmentsBody')}
              </p>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {principles.map((p, i) => (
              <FadeIn key={p.title} delay={70 + i * 60}>
                <div className="group relative h-full overflow-hidden rounded-[1.65rem] border border-deep-green/[0.06] bg-gradient-to-b from-white to-sand/40 p-7 shadow-[0_12px_40px_-16px_rgba(15,49,35,0.12)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-18px_rgba(15,49,35,0.16)] sm:p-8">
                  <span className="font-display text-4xl font-semibold tabular-nums text-hero-gold/25 transition-colors group-hover:text-hero-gold/40">
                    {p.n}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-deep-green sm:text-2xl">{p.title}</h3>
                  <div className="mt-4 h-px w-12 bg-gradient-to-r from-hero-gold/70 to-transparent" aria-hidden />
                  <p className="mt-5 font-body text-sm leading-relaxed text-gray-700 sm:text-[15px]">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="scroll-mt-20 border-b border-deep-green/[0.06] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14"
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 flex items-center justify-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold sm:justify-start">
              <span className="h-px w-8 bg-hero-gold/70" aria-hidden />
              {t('wellness.philosophyKicker')}
            </p>
            <h2 className="text-center font-serif text-3xl font-bold text-deep-green sm:text-left sm:text-4xl">
              {t('wellness.philosophyTitle')}
            </h2>
            <p className="mx-auto mt-6 text-center font-body text-base leading-relaxed text-gray-600 sm:mx-0 sm:text-left sm:text-lg">
              {t('wellness.philosophyBody')}
            </p>
          </FadeIn>

          <div className="mt-16 divide-y divide-deep-green/[0.08] border-t border-deep-green/[0.08]">
            {philosophyBlocks.map((block, i) => (
              <FadeIn key={block.title} delay={50 + i * 40}>
                <div className="py-12 sm:py-14">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
                    <span
                      className="shrink-0 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-terracotta/80 sm:mt-1 sm:w-24"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 border-l-2 border-hero-gold/50 pl-6 sm:pl-8">
                      <h3 className="font-serif text-xl font-semibold leading-snug text-deep-green sm:text-2xl">
                        {block.title}
                      </h3>
                      <p className="mt-4 font-body text-base leading-[1.75] text-gray-700 sm:text-[17px]">{block.body}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-deep-green px-4 py-16 text-white sm:px-6 md:px-10 md:py-20 lg:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(201,162,39,0.12),transparent_55%)]" aria-hidden />
        <div className="relative mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg">
              {t('wellness.ctaBody')}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/retreat"
                className="inline-flex min-h-[48px] items-center rounded-full bg-hero-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-deep-green shadow-lg transition hover:bg-[#d4b22a]"
              >
                Itamambuca
              </Link>
              <Link
                to="/"
                className="inline-flex min-h-[48px] items-center rounded-full border border-white/35 px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
              >
                {t('wellness.homeLink')}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  )
}
