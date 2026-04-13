/**
 * Wellness — how Yamuna approaches women’s care: principles and philosophy.
 */
import FadeIn from '../components/FadeIn'
import { Link } from 'react-router-dom'

const principles = [
  {
    n: '01',
    title: 'Ayurveda',
    body: 'We use Ayurveda as a living map—digestion, sleep, seasons, and emotional tone—not as a rigid script. Women’s bodies change across a month and across a lifetime; the lens we hold is curious, gentle, and practical.',
  },
  {
    n: '02',
    title: 'Nature',
    body: 'Light, humidity, plants, and water are not scenery here. They are co-regulators: they slow the pulse of conversation, widen the breath, and remind the body that it belongs to a world larger than deadlines.',
  },
  {
    n: '03',
    title: 'Community',
    body: 'We believe wellness deepens in trustworthy company. Circles, shared meals, and honest listening create a field where vulnerability is ordinary—not performative—and where care is distributed, not hoarded at the front of the room.',
  },
]

const philosophyBlocks = [
  {
    title: 'Rhythm over optimization',
    body: 'Modern wellness often sells efficiency: more energy, faster recovery, cleaner metrics. We lean the other way—toward cadence. A woman’s vitality is not a line graph; it moves with sleep, grief, hormones, joy, and weather. Our work is to help her recognize those tides without shaming the low points, and to build daily rituals that are small enough to survive a real life.',
  },
  {
    title: 'Ayurveda as relationship, not rulebook',
    body: 'Classical texts are companions, not clubs. We translate their insights into language that respects contemporary bodies: how food feels at noon, how the mind behaves after too much screen light, how grief sits in the chest. When something from the tradition does not fit, we say so plainly. Integrity matters more than performance of expertise.',
  },
  {
    title: 'Nature as honest mirror',
    body: 'Forest edge and shoreline do not flatter—they clarify. Heat, salt, birdsong, and long horizons invite the nervous system out of abstraction. We choose settings where the world is visibly alive so that numbness cannot pose as neutrality, and so beauty can count as medicine without being sentimental.',
  },
  {
    title: 'Community as ethical field',
    body: 'Isolation makes every wound feel personal. In community, patterns become visible: you are not the only one tired in that particular way. We cultivate small groups with clear boundaries—confidentiality, consent, and leadership that does not confuse charisma with care—so that belonging feels safe enough to soften.',
  },
  {
    title: 'Integration over peak experiences',
    body: 'A single transcendent afternoon is not the goal. We care what you carry home in your hands and in your calendar: the soup that now feels doable, the boundary you can name, the breath you remember on the train. Wellness, for us, is measured in weeks—not only in moments.',
  },
]

export default function WellnessPage() {
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
              Wellness
            </p>
            <h1 className="text-center font-serif text-[clamp(2.15rem,5.5vw,3.85rem)] font-bold leading-[1.06] tracking-tight text-deep-green sm:text-left">
              Women&apos;s wellness, rooted in{' '}
              <span className="text-terracotta-dark decoration-hero-gold/40 underline decoration-2 underline-offset-[0.18em]">
                Ayurveda
              </span>
              , nature, and community
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-center font-body text-lg leading-[1.75] text-gray-600 sm:mx-0 sm:text-left sm:text-xl">
              Yamuna Retreats holds a simple premise: when women are met with intelligent care—body, emotion, and
              context together—they do not need to be &ldquo;fixed.&rdquo; They need truthful conditions in which to
              remember how they already heal.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-deep-green/[0.06] bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center md:text-left">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">Commitments</p>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-deep-green sm:text-4xl md:text-[2.35rem]">
                How we work
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-gray-600 sm:text-lg md:mx-0">
                Not slogans—non-negotiables behind every circle, meal, and practice we steward.
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
              Philosophy
            </p>
            <h2 className="text-center font-serif text-3xl font-bold text-deep-green sm:text-left sm:text-4xl">
              What sits underneath
            </h2>
            <p className="mx-auto mt-6 text-center font-body text-base leading-relaxed text-gray-600 sm:mx-0 sm:text-left sm:text-lg">
              The commitments above are visible. Below is the quieter architecture—the beliefs that shape how we
              listen, pace a day, and hold responsibility when someone is tender.
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
              If these ideas belong in real days—not only on a screen—the week in Itamambuca is the place we actually
              hold them: small group, clear schedule, and room to be quiet without disappearing.
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
                Home
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  )
}
