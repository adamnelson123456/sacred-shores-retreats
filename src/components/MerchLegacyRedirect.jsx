import { Navigate, useLocation } from 'react-router-dom'

/** Old `/merch` URLs → `/store` (same path suffix). */
export default function MerchLegacyRedirect() {
  const { pathname, search, hash } = useLocation()
  const to = (pathname.replace(/^\/merch/, '/store') || '/store') + search + hash
  return <Navigate to={to} replace />
}
