/**
 * Merch prices are stored in BRL (retail MSRP). USD/EUR are estimates from reference FX.
 * Update `FX_RATES` periodically — not live market data.
 */
export const FX_RATES = {
  /** How many BRL for 1 USD (e.g. 5.45 → US$1 ≈ R$5,45) */
  brlPerUsd: 5.45,
  /** How many BRL for 1 EUR */
  brlPerEur: 5.95,
}

/** @param {number} amountBrl */
/** @param {'BRL' | 'USD' | 'EUR'} currency */
export function convertFromBrl(amountBrl, currency) {
  if (currency === 'BRL') return amountBrl
  if (currency === 'USD') return amountBrl / FX_RATES.brlPerUsd
  if (currency === 'EUR') return amountBrl / FX_RATES.brlPerEur
  return amountBrl
}

const LOCALES = { BRL: 'pt-BR', USD: 'en-US', EUR: 'de-DE' }

/** @param {number} amount */
/** @param {'BRL' | 'USD' | 'EUR'} currency */
export function formatMerchMoney(amount, currency) {
  return new Intl.NumberFormat(LOCALES[currency], {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/** @param {number} priceBrl */
/** @param {'BRL' | 'USD' | 'EUR'} currency */
export function formatMerchPriceFromBrl(priceBrl, currency) {
  return formatMerchMoney(convertFromBrl(priceBrl, currency), currency)
}
