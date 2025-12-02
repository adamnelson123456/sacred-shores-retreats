/**
 * Experience section - Showcases four main retreat experiences
 * Refined: Consistent spacing, responsive grid, proper section padding
 */
import FadeIn from './FadeIn'
import ExperienceCard from './ExperienceCard'

const experiences = [
  {
    title: 'Ayurveda Workshops',
    description:
      'Self-care rituals, morning practices, and nourishment for body and mind.',
    image: '/images/floripa%20avd.jpg',
  },
  {
    title: 'Plant-Based Cooking',
    description:
      'Cook with chef Laura and learn how to infuse intention into every meal.',
    image: '/images/floripa%20food.jpg',
  },
  {
    title: 'Longboarding & Nature',
    description:
      'Flow with the ocean or explore nearby nature in gentle guided outings.',
    image: '/images/long%20boarding%20suef.jpg',
  },
  {
    title: 'Kirtan & Sound Healing',
    description:
      'End the day with mantra, live music, and moonlit sound baths.',
    image: '/images/womenplayinf%20drum%20kirtan%20.jpg',
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-5 sm:mb-6 md:mb-8 text-deep-green tracking-tight">
              Find Your Retreat Experience Here
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl font-body leading-relaxed">
              Choose the path that calls you: yoga at sunrise, Ayurvedic rituals,
              longboard classes, cooking workshops, or kirtan by the fire.
            </p>
          </div>
        </FadeIn>

        {/* Responsive grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {experiences.map((experience, index) => (
            <FadeIn key={index} delay={index * 100}>
              <ExperienceCard {...experience} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
