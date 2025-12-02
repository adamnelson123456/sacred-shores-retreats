/**
 * Retreat Details Page - Standalone page for "Learn More About the Retreat"
 * Contains: Mission, Location, Facilitators, Schedule, and Who It's For sections
 */
import { useEffect } from 'react'
import FadeIn from '../components/FadeIn'

export default function RetreatDetailsPage() {
  useEffect(() => {
    // Smooth scroll for anchor links within this page
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <>
      {/* SECTION 1 - Intro Hero: Mission & Inspiration - Vertically centered layout - Mobile optimized */}
      <section
        id="mission"
        className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-white scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deep-green mb-5 sm:mb-6 md:mb-8 tracking-tight">
              A Retreat Created as a Sacred Pause
            </h1>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-body leading-relaxed mb-5 sm:mb-6 md:mb-8">
              Sacred Shores was born from a simple longing: to create a gentle pause
              in the middle of modern life, where women can rest, remember themselves,
              and be held by nature. This retreat weaves together Ayurveda, yoga,
              conscious cooking, mantra, and the ocean so your body, mind, and heart
              can finally move in the same rhythm again.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-body leading-relaxed mb-6 sm:mb-8 md:mb-10">
              Our mission is to offer more than a getaway. Sacred Shores is an
              immersive experience designed to nourish you on every layer: physical,
              emotional, and spiritual. Every practice, meal, and circle is crafted
              with intention, so you leave not just refreshed, but realigned with the
              woman you came here to be.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <a
              href="#location"
              className="inline-block text-deep-green font-semibold hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 rounded py-2 min-h-[44px] flex items-center justify-center"
            >
              Scroll to Learn More ↓
            </a>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 - Why Floripa: About the Location - Mobile optimized */}
      <section
        id="location"
        className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-sage/20 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deep-green mb-6 sm:mb-8 md:mb-10 text-center tracking-tight">
              Why Florianópolis?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <FadeIn delay={100}>
              <div>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-body leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  Florianópolis, lovingly called Floripa, is an island city in southern
                  Brazil known for its turquoise waters, lush hills, and relaxed surf
                  culture. It's a place where life naturally slows down. Mornings begin
                  with ocean breezes, afternoons are filled with light, and evenings
                  arrive with soft skies and the sound of waves.
                </p>

                <div className="space-y-4 sm:space-y-4 md:space-y-5">
                  <div>
                    <h3 className="font-semibold text-deep-green mb-2 text-base sm:text-lg">
                      Island energy
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 font-body leading-relaxed">
                      Surrounded by water and nature, Floripa feels like a gentle reset
                      for your nervous system.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-deep-green mb-2 text-base sm:text-lg">
                      Beaches & trails
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 font-body leading-relaxed">
                      Golden beaches, coastal walks, and viewpoints where you can watch
                      the sunrise or sunset in silence.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-deep-green mb-2 text-base sm:text-lg">
                      Wellness-friendly culture
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 font-body leading-relaxed">
                      Yoga, surf, healthy food, and conscious communities are already
                      part of the island's heartbeat.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-deep-green mb-2 text-base sm:text-lg">
                      Our retreat space
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 font-body leading-relaxed">
                      A cozy guest house close to the beach, with shared and private
                      rooms, an open kitchen, and spaces for yoga, circles, and kirtan.
                    </p>
                  </div>
                </div>

                <p className="mt-6 sm:mt-8 text-xs sm:text-sm md:text-base text-gray-600 font-body italic">
                  Located on the island of Florianópolis, Brazil, approximately X
                  minutes from the nearest airport.
                </p>
              </div>
            </FadeIn>

            {/* Right: Images */}
            <FadeIn delay={200}>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="rounded-3xl overflow-hidden h-56 sm:h-64 md:h-80">
                  <img
                    src="/images/waves.jpg"
                    alt="Beautiful beach and turquoise waters of Florianópolis"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-56 sm:h-64 md:h-80">
                  <img
                    src="/images/long%20boarding%20suef.jpg"
                    alt="Surfing and longboarding on the beaches of Floripa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Meet Your Facilitators - Mobile optimized */}
      <section
        id="facilitators"
        className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-white scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deep-green mb-4 sm:mb-4 md:mb-6 text-center tracking-tight">
              Meet Your Facilitators
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center font-body mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
              Each facilitator brings her own medicine, rooted in years of practice,
              study, and lived experience.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {/* Facilitator 1 - Giovanna */}
            <FadeIn delay={100}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="h-56 sm:h-64 overflow-hidden">
                  <img
                    src="/images/gio%20for%20website.jpeg"
                    alt="Giovanna - Ayurvedic Guide & Space Holder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-deep-green mb-2">
                    Giovanna
                  </h3>
                  <p className="text-xs sm:text-sm text-gold font-semibold mb-3 sm:mb-4">
                    Ayurvedic Guide & Space Holder
                  </p>
                  <p className="text-gray-700 font-body text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6">
                    Giovanna is an Ayurvedic therapist and women's wellness guide,
                    trained in Brazil and abroad. She specializes in helping women
                    regulate their digestion, hormones, and nervous system through
                    simple daily rituals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Ayurveda for daily life</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Women's health & cyclical living</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Self-care rituals & abhyanga</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Guided reflection & integration circles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Facilitator 2 - Laura */}
            <FadeIn delay={200}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="h-56 sm:h-64 bg-sage/30 flex items-center justify-center">
                  <div className="text-5xl sm:text-6xl">🍃</div>
                </div>
                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-deep-green mb-2">
                    Laura
                  </h3>
                  <p className="text-xs sm:text-sm text-gold font-semibold mb-3 sm:mb-4">
                    Conscious Cooking & Kitchen Rituals
                  </p>
                  <p className="text-gray-700 font-body text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6">
                    Laura is a plant-based chef who believes food is one of our most
                    intimate forms of prayer. Her cooking is colorful, nourishing, and
                    full of intention.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Plant-based cooking & menu design</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Cooking with intention & gratitude</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Plate and table organization</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Gentle guidance for beginners</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Facilitator 3 - Gio (Longboard) */}
            <FadeIn delay={300}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="h-56 sm:h-64 bg-sage/30 flex items-center justify-center">
                  <div className="text-5xl sm:text-6xl">🏄</div>
                </div>
                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-deep-green mb-2">
                    Gio
                  </h3>
                  <p className="text-xs sm:text-sm text-gold font-semibold mb-3 sm:mb-4">
                    Longboard & Sea Connection
                  </p>
                  <p className="text-gray-700 font-body text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6">
                    Gio introduces you to the joy of moving with
                    the ocean. Whether you're stepping on a board for the first time or
                    already comfortable in the water, her focus is on safety,
                    playfulness, and confidence.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Beginner-friendly longboard instruction</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Ocean safety & confidence</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Embodied connection with water</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Facilitator 4 - Kirtan Crew */}
            <FadeIn delay={400}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="h-56 sm:h-64 bg-sage/30 flex items-center justify-center">
                  <div className="text-5xl sm:text-6xl">🎵</div>
                </div>
                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-deep-green mb-2">
                    Kirtan Crew
                  </h3>
                  <p className="text-xs sm:text-sm text-gold font-semibold mb-3 sm:mb-4">
                    Mantra, Kirtan & Sound
                  </p>
                  <p className="text-gray-700 font-body text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6">
                    Holding space through mantra and music, the kirtan crew creates
                    evening kirtans and OM meditations. With a deep love for sacred
                    sound, they create a welcoming environment where you can sing,
                    listen, or simply rest in the vibration.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Kirtan & mantra meditation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Gentle sound journeys</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold mt-1">•</span>
                      <span>Creating safe, devotional space</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Retreat Flow: Schedule & Itinerary - Mobile optimized */}
      <section
        id="schedule"
        className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-sand scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deep-green mb-4 sm:mb-4 md:mb-6 text-center tracking-tight">
              The Flow of the Weekend
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center font-body mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
              A gentle structure to hold you, flexible enough to honor your body, yet
              intentional enough to support deep rest and transformation.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {/* Friday */}
            <FadeIn delay={100}>
              <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 shadow-md border-t-4 border-deep-green">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🌅</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-deep-green mb-2">
                  Friday
                </h3>
                <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">
                  Arrival & Grounding
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 font-body">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Check-in after 3pm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Herbal tea welcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Sunset opening circle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Gentle OM meditation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Early rest</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Saturday */}
            <FadeIn delay={200}>
              <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 shadow-md border-t-4 border-deep-green">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🌊</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-deep-green mb-2">
                  Saturday
                </h3>
                <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">
                  Deep Dive Day
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 font-body">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Morning yoga & breathwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Ayurveda workshop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Longboard lesson or nature walk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Conscious cooking session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Evening kirtan & sound healing</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Sunday */}
            <FadeIn delay={300}>
              <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 shadow-md border-t-4 border-deep-green">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🌙</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-deep-green mb-2">
                  Sunday
                </h3>
                <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">
                  Integration & Embodiment
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 font-body">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Gentle morning yoga & journaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Self-care rituals (abhyanga)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Brunch & free time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Afternoon sharing circle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Closing fire or candlelight kirtan</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Monday */}
            <FadeIn delay={400}>
              <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 shadow-md border-t-4 border-deep-green">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">☀️</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-deep-green mb-2">
                  Monday
                </h3>
                <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">
                  Soft Departure
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 font-body">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Sunrise stretch or beach walk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Light breakfast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Closing reflection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Check-out by 11am</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={500}>
            <p className="mt-6 sm:mt-8 md:mt-12 text-center text-gray-600 font-body text-xs sm:text-sm md:text-base italic max-w-3xl mx-auto px-4">
              Schedule may adjust slightly based on weather and the needs of the group,
              while keeping the same essence and practices.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 - Closing: Who It's For + CTA - Mobile optimized */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deep-green mb-5 sm:mb-6 md:mb-8 tracking-tight">
              Is Sacred Shores for You?
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-body leading-relaxed mb-5 sm:mb-6 md:mb-8">
              This retreat is for women who feel the pull to slow down, reconnect with
              their bodies, and remember their inner wisdom. Whether you're burned out,
              navigating transition, or simply longing for deeper connection with
              yourself, nature, and other women. Sacred Shores offers a soft landing and
              a brave, loving space.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-body leading-relaxed mb-8 sm:mb-10 md:mb-12">
              You don't need experience with yoga, Ayurveda, or surfing. All you need
              is a willing heart and the desire to step away from daily noise for a few
              days and listen to what's true inside of you.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <a
              href="/#pricing"
              className="inline-block px-6 sm:px-8 py-4 rounded-full bg-deep-green text-white font-semibold text-base sm:text-sm md:text-base hover:bg-deep-green/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2 min-h-[48px] sm:min-h-[44px] flex items-center justify-center"
            >
              Reserve Your Spot
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

