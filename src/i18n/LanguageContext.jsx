import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const STORAGE_KEY = 'yamuna.lang'

const LanguageContext = createContext(
  /** @type {{ lang: 'pt'|'en', setLang: (l: 'pt'|'en') => void, toggleLang: () => void, t: (key: string) => string }} */ ({
    lang: 'pt',
    setLang: () => {},
    toggleLang: () => {},
    t: (k) => k,
  }),
)

function readStoredLang() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === 'pt' || raw === 'en') return raw
  } catch {
    /* ignore */
  }
  return 'pt'
}

function getFromKey(obj, key) {
  const parts = String(key).split('.')
  let cur = obj
  for (const p of parts) {
    cur = cur?.[p]
    if (cur == null) return undefined
  }
  return cur
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang)

  const setLang = useCallback((l) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'))
  }, [setLang])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const t = useCallback(
    (key) => {
      const table = translations[lang] || translations.pt
      const value = getFromKey(table, key)
      if (typeof value === 'string') return value
      const fallback = getFromKey(translations.pt, key)
      if (typeof fallback === 'string') return fallback
      return key
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, toggleLang, t }), [lang, setLang, toggleLang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}

