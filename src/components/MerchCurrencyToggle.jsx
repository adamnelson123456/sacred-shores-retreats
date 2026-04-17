import { MERCH_CURRENCIES, useMerchCurrency } from '../context/MerchCurrencyContext'

const SHORT = { BRL: 'BRL', USD: 'USD', EUR: 'EUR' }

export default function MerchCurrencyToggle({ className = '' }) {
  const { currency, setCurrency } = useMerchCurrency()

  return (
    <div
      className={`inline-flex max-w-full shrink-0 flex-nowrap rounded-full border border-deep-green/20 bg-white p-0.5 shadow-sm ${className}`}
      role="radiogroup"
      aria-label="Display prices in"
    >
      {MERCH_CURRENCIES.map((c) => {
        const active = currency === c
        return (
          <button
            key={c}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setCurrency(c)}
            className={`min-h-[44px] min-w-[3rem] shrink-0 rounded-full px-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2 sm:min-w-[3.5rem] sm:px-3 sm:text-[11px] ${
              active
                ? 'bg-deep-green text-white shadow-sm'
                : 'text-deep-green/70 hover:bg-deep-green/[0.06] hover:text-deep-green'
            }`}
          >
            {SHORT[c]}
          </button>
        )
      })}
    </div>
  )
}
