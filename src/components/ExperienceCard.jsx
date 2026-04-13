/**
 * Experience card component - Individual retreat experience card
 * Refined: Unified hover effects, consistent styling, proper alt text
 */
export default function ExperienceCard({ title, description, image }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-deep-green focus-within:ring-offset-2">
      <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={`${title} experience at Yamuna Retreat`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 sm:p-6 md:p-8 group-hover:bg-sage/5 transition-colors duration-300">
        <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold mb-2 sm:mb-3 text-deep-green">
          {title}
        </h3>
        <p className="text-gray-700 font-body leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}
