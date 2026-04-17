import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const STORAGE_KEY = 'yamuna.merch.currency'

/** @typedef {'BRL' | 'USD' | 'EUR'} MerchCurrency */

const MerchCurrencyContext = createContext(
  /** @type {{ currency: MerchCurrency, setCurrency: (c: MerchCurrency) => void }} */ ({
    currency: 'BRL',
    setCurrency: () => {},
  }),
)

export const MERCH_CURRENCIES = /** @type {const} */ (['BRL', 'USD', 'EUR'])

function readStoredCurrency() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === 'BRL' || raw === 'USD' || raw === 'EUR') return raw
  } catch {
    /* ignore */
  }
  return /** @type {MerchCurrency} */ ('BRL')
}

export function MerchCurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState(readStoredCurrency)

  const setCurrency = useCallback((c) => {
    setCurrencyState(c)
    try {
      localStorage.setItem(STORAGE_KEY, c)
    } catch {
      /* ignore */
    }
  }, [])

  const value = useMemo(() => ({ currency, setCurrency }), [currency, setCurrency])

  return <MerchCurrencyContext.Provider value={value}>{children}</MerchCurrencyContext.Provider>
}

export function useMerchCurrency() {
  return useContext(MerchCurrencyContext)
}
