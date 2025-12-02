/**
 * Day card component - Individual day in the weekend flow
 * Refined: Consistent card styling, refined hover effects, proper icon alignment
 */
export default function DayCard({ day, title, description, icon }) {
  return (
    <div className="group bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl hover:-translate-y-1 border-t-4 border-deep-green transition-all duration-300 focus-within:ring-2 focus-within:ring-deep-green focus-within:ring-offset-2">
      <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 leading-none">{icon}</div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-2 text-deep-green">
        {day}
      </h3>
      <h4 className="font-semibold mb-3 sm:mb-4 text-gray-800 text-base sm:text-lg">{title}</h4>
      <p className="text-gray-700 font-body leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </div>
  )
}
