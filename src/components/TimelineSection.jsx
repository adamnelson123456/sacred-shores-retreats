/**
 * Timeline section - Weekend flow with four day cards
 * Refined: Softer sand background, responsive grid, consistent card styling
 */
import FadeIn from './FadeIn'
import DayCard from './DayCard'

const days = [
  {
    day: 'Friday',
    title: 'Arrival & Grounding',
    description:
      'Check-in after 3pm, herbal tea welcome, sunset opening circle, gentle OM meditation, early rest.',
    icon: '🌅',
  },
  {
    day: 'Saturday',
    title: 'Deep Dive Day',
    description:
      'Morning yoga and breathwork, Ayurveda workshop, longboarding or nature walk, cooking with intention, bonfire kirtan.',
    icon: '🌊',
  },
  {
    day: 'Sunday',
    title: 'Integration & Embodiment',
    description:
      'Gentle yoga, self-care rituals like abhyanga, sacred feminine circle, tea meditation, closing sharing circle.',
    icon: '🌙',
  },
  {
    day: 'Monday',
    title: 'Soft Departure',
    description:
      'Sunrise stretch, light breakfast, integration reflection, closing ceremony, checkout by 11am.',
    icon: '☀️',
  },
]

export default function TimelineSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-sand">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-10 sm:mb-12 md:mb-16 text-center text-deep-green tracking-tight">
            The Flow of the Weekend
          </h2>
        </FadeIn>

        {/* Responsive grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {days.map((day, index) => (
            <FadeIn key={index} delay={index * 100}>
              <DayCard {...day} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
