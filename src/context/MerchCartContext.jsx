import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { getMerchBySlug } from '../data/merchProducts'

const STORAGE_KEY = 'yamuna.merch.cart.v1'

function clampQty(n) {
  const x = Number.parseInt(String(n), 10)
  if (Number.isNaN(x) || x < 1) return 1
  return Math.min(99, x)
}

function readLines() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter((row) => row?.slug && row?.quantity > 0)
      .map((row) => ({ slug: String(row.slug), quantity: clampQty(row.quantity) }))
  } catch {
    return []
  }
}

const MerchCartContext = createContext({
  lines: [],
  itemCount: 0,
  subtotalBrl: 0,
  addToCart: () => {},
  setLineQuantity: () => {},
  removeLine: () => {},
  clearCart: () => {},
  getCheckoutItems: () => [],
})

export function MerchCartProvider({ children }) {
  const [lines, setLines] = useState(readLines)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      /* ignore */
    }
  }, [lines])

  const addToCart = useCallback((slug, quantity = 1) => {
    if (!getMerchBySlug(slug)) return
    const q = clampQty(quantity)
    setLines((prev) => {
      const i = prev.findIndex((l) => l.slug === slug)
      if (i < 0) return [...prev, { slug, quantity: q }]
      const next = [...prev]
      next[i] = { slug, quantity: clampQty(next[i].quantity + q) }
      return next
    })
  }, [])

  const setLineQuantity = useCallback((slug, quantity) => {
    const q = clampQty(quantity)
    setLines((prev) => {
      const next = prev.map((l) => (l.slug === slug ? { slug, quantity: q } : l))
      return next
    })
  }, [])

  const removeLine = useCallback((slug) => {
    setLines((prev) => prev.filter((l) => l.slug !== slug))
  }, [])

  const clearCart = useCallback(() => {
    setLines([])
  }, [])

  const itemCount = useMemo(
    () => lines.reduce((acc, l) => acc + l.quantity, 0),
    [lines],
  )

  const subtotalBrl = useMemo(
    () =>
      lines.reduce((acc, l) => {
        const p = getMerchBySlug(l.slug)
        return acc + (p ? p.priceBrl * l.quantity : 0)
      }, 0),
    [lines],
  )

  const getCheckoutItems = useCallback(
    () => lines.map((l) => ({ slug: l.slug, quantity: l.quantity })),
    [lines],
  )

  const value = useMemo(
    () => ({
      lines,
      itemCount,
      subtotalBrl,
      addToCart,
      setLineQuantity,
      removeLine,
      clearCart,
      getCheckoutItems,
    }),
    [
      lines,
      itemCount,
      subtotalBrl,
      addToCart,
      setLineQuantity,
      removeLine,
      clearCart,
      getCheckoutItems,
    ],
  )

  return <MerchCartContext.Provider value={value}>{children}</MerchCartContext.Provider>
}

export function useMerchCart() {
  return useContext(MerchCartContext)
}
