import { Navigate, useLocation } from 'react-router-dom'

/** `/merch` and `/store` → `/shop` (keeps path suffix, e.g. `/store/cart` → `/shop/cart`). */
export default function MerchLegacyRedirect() {
  const { pathname, search, hash } = useLocation()
  const to = (pathname.replace(/^\/(merch|store)(?=\/|$)/, '/shop') || '/shop') + search + hash
  return <Navigate to={to} replace />
}
