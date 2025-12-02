export default function PricingCard({
  title,
  price,
  description,
  features,
  borderColor,
}) {
  return (
    <div
      className={`group bg-white rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-2xl hover:-translate-y-2 border-2 ${borderColor} transition-all duration-300`}
    >
      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-deep-green">
        {title}
      </h3>
      <p className="text-4xl md:text-5xl font-bold mb-6 text-gold">From {price}</p>
      <p className="text-gray-700 font-body mb-8 leading-relaxed text-base md:text-lg">
        {description}
      </p>

      <ul className="space-y-3 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-700 text-sm md:text-base">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full px-8 py-3.5 rounded-full bg-deep-green text-white font-semibold hover:bg-deep-green/90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
        Reserve Now
      </button>
    </div>
  )
}

