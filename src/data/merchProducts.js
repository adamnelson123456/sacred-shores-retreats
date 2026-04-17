/**
 * Yamuna store products — /store and /store/:slug (not linked in main nav).
 * `images[0]` = current thumbnail; `images[1]` = legacy flat product art (carousel).
 */
export const merchProducts = [
  {
    slug: 'mug',
    name: 'Yamuna mug',
    shortDescription: 'For morning tea and slow sips after practice.',
    images: [
      encodeURI('/images/yamuna mug pf.png'),
      encodeURI('/images/YAMUNA - MUG.png'),
    ],
    /** Retail MSRP in Brazilian reais */
    priceBrl: 89,
    details: [
      'A calm companion for slow mornings—whether you are journaling, sipping chai, or pausing between sessions. The Yamuna mark keeps the retreat close without shouting.',
      'Designed to feel at home on a kitchen shelf or a studio desk. Pair it with quiet light and a deep breath.',
    ],
    highlights: ['Ceramic', 'Yamuna mark', 'Gift-ready'],
  },
  {
    slug: 'tote',
    name: 'Yamuna tote',
    shortDescription: 'Carry the week — market runs, beach walks, and everything in between.',
    images: [
      encodeURI('/images/yamuna tote pp.png'),
      encodeURI('/images/YAMUNA - TOTE.png'),
    ],
    /** Retail MSRP in Brazilian reais */
    priceBrl: 138,
    details: [
      'Roomy enough for a towel, a book, and the small things that make a day feel human. Sturdy handles and a soft structure that sits well on the shoulder.',
      'Take it to the market after practice, or load it for a walk to the water—the logo stays subtle; the week stays with you.',
    ],
    highlights: ['Natural canvas', 'Reinforced straps', 'Everyday carry'],
  },
  {
    slug: 'hoodie',
    name: 'Yamuna hoodie',
    shortDescription: 'Soft layer for cool mornings and evenings by the water.',
    images: [
      encodeURI('/images/yamuna oodie pf.png'),
      encodeURI('/images/YAMUNA HOODIE.png'),
    ],
    /** Retail MSRP in Brazilian reais */
    priceBrl: 298,
    details: [
      'A mid-weight layer for breeze off the ocean and early meditation. The fit is easy—room to move, nothing tight around the ribs when breath is the point.',
      'Throw it on after practice, over a swimsuit, or on the flight home when you want something that still feels like the retreat.',
    ],
    highlights: ['Soft fleece interior', 'Relaxed fit', 'Coastal evenings'],
  },
  {
    slug: 'shirt',
    name: 'Yamuna shirt',
    shortDescription: 'Easy cotton tee with a quiet mark of the retreat.',
    images: [
      encodeURI('/images/yamuna tshirt pp.png'),
      encodeURI('/images/YAMUNA SHIRT.png'),
    ],
    /** Retail MSRP in Brazilian reais */
    priceBrl: 158,
    details: [
      'Breathable cotton with a clean silhouette—easy to tuck, easy to layer. The mark sits small so the shirt feels like yours, not a billboard.',
      'Wear it under an open shirt, with linen, or on its own when the day is warm and the schedule is light.',
    ],
    highlights: ['100% cotton feel', 'Minimal branding', 'Easy care'],
  },
]

export function getMerchBySlug(slug) {
  return merchProducts.find((p) => p.slug === slug)
}
