/**
 * Centered editorial testimonial — sits above the footer on the homepage.
 */
import FadeIn from './FadeIn'

export default function TestimonialSection() {
  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div
            className="font-serif text-[4.5rem] sm:text-[5.5rem] md:text-[6.5rem] leading-none text-[#D4D0C8] mb-6 sm:mb-8 select-none"
            aria-hidden
          >
            &ldquo;
          </div>
          <blockquote className="mb-0">
            <p className="font-serif text-xl sm:text-2xl md:text-[1.65rem] lg:text-[1.75rem] text-[#1a1a1a] leading-relaxed italic mb-10 sm:mb-12">
              Yamuna is not just a place, but a profound shift in frequency. I arrived burdened by the world and left
              feeling as light as the morning mist over the river.
            </p>
            <footer>
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
                <span className="h-px w-8 sm:w-12 bg-terracotta/40" aria-hidden />
                <cite className="not-italic text-[11px] sm:text-xs font-sans font-semibold tracking-[0.2em] uppercase text-terracotta">
                  Elena Rodriguez
                </cite>
                <span className="h-px w-8 sm:w-12 bg-terracotta/40" aria-hidden />
              </div>
              <p className="text-sm text-gray-600 font-sans italic">Sojourner, 2023</p>
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  )
}
