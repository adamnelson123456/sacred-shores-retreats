/**
 * Homepage — principles that hold every Yamuna retreat (Ayurveda, land, community).
 * Forest layer: `PRINCIPLES_FOREST_BG`; opacity on the image div (currently `opacity-[0.2]`).
 */
import FadeIn from './FadeIn'

const PRINCIPLES_FOREST_BG =
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80'

const principles = [
  {
    label: 'Wisdom in the body',
    title: 'Ayurveda you can live',
    body: 'We treat classical insight as a companion, not a test. Dinacharya, nourishment, and gentle ritual are offered so your nervous system can understand—not so you can perform “wellness” for anyone else.',
  },
  {
    label: 'The land teaches',
    title: 'Forest, salt, and sky',
    body: 'Jungle humidity, ocean light, and unhurried coastal time are part of the curriculum. We choose places where the world stays vivid so rest and honesty don’t have to be invented from scratch.',
  },
  {
    label: 'Held in community',
    title: 'Depth without the spotlight',
    body: 'Small groups, clear boundaries, and leadership that doesn’t confuse charisma with care. Laughter and silence both belong; belonging is built through consistency, not spectacle.',
  },
]

export default function RetreatRhythmSection() {
  return (
    <section
      id="yamuna-principles"
      className="relative overflow-hidden scroll-mt-20 bg-deep-green px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.2]"
        style={{ backgroundImage: `url(${PRINCIPLES_FOREST_BG})` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-deep-green/92 via-deep-green/88 to-deep-green/94"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl xl:max-w-7xl">
        <FadeIn>
          <header className="mb-12 max-w-2xl sm:mb-14 md:mb-16">
            <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold sm:mb-4 sm:text-xs">
              How we work
            </p>
            <h2 className="mb-4 font-serif text-3xl leading-tight tracking-tight text-white sm:mb-5 sm:text-4xl md:text-5xl">
              Principles of Yamuna Retreats
            </h2>
            <p className="font-body text-base leading-relaxed text-white/80 sm:text-lg">
              These are the through-lines behind every gathering—whether you meet us on the São Paulo coast or in
              another chapter of the work. They keep the week honest when the schedule flexes and the weather shifts.
            </p>
          </header>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {principles.map((item, i) => (
            <FadeIn key={item.label} delay={80 * (i + 1)}>
              <article className="h-full rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-[0_14px_24px_-14px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-colors duration-200 hover:bg-white/[0.11] sm:p-7">
                <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {item.label}
                </p>
                <h3 className="mb-3 font-serif text-xl tracking-tight text-white sm:text-2xl">{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-white/75 sm:text-[15px]">{item.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
