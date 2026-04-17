/**
 * Stripe Checkout Session API (Vercel serverless `api/create-checkout-session.js`).
 *
 * Set `VITE_STRIPE_CHECKOUT_URL` only if the browser origin differs from where `/api` is hosted
 * (defaults to same-origin `/api/create-checkout-session`).
 */
export function getStripeCheckoutSessionUrl() {
  const raw = import.meta.env.VITE_STRIPE_CHECKOUT_URL
  if (raw && String(raw).trim()) {
    return String(raw).trim().replace(/\/$/, '')
  }
  return '/api/create-checkout-session'
}
