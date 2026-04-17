/**
 * Server-side catalog for Stripe Checkout — amounts in BRL (reais).
 * Keep in sync with `src/data/merchProducts.js` prices and slugs.
 */
export const MERCH_CATALOG = [
  { slug: 'mug', name: 'Yamuna mug', priceBrl: 89 },
  { slug: 'tote', name: 'Yamuna tote', priceBrl: 138 },
  { slug: 'hoodie', name: 'Yamuna hoodie', priceBrl: 298 },
  { slug: 'shirt', name: 'Yamuna shirt', priceBrl: 158 },
]

export function getMerchCatalogEntry(slug) {
  return MERCH_CATALOG.find((p) => p.slug === slug)
}
