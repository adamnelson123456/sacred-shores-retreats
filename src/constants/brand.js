/** Public asset paths (files live in /public). */
export const YAMUNA_LOGO_SRC = encodeURI('/images/Yamuna Retreats Logo (6).png')

/**
 * Full-screen hero video. Default is a compressed H.264 MP4 in `/public` (~75MB, under Vercel’s file cap).
 * Override with `VITE_HERO_VIDEO_URL` (e.g. Mux/Cloudinary) if you host elsewhere.
 * Original `.mov` stays local only (excluded from deploy via `.vercelignore`).
 */
export const HOME_HERO_VIDEO_SRC =
  (import.meta.env.VITE_HERO_VIDEO_URL && String(import.meta.env.VITE_HERO_VIDEO_URL).trim()) ||
  encodeURI('/images/yamuna-hero.mp4')

/** Shown behind the hero when video fails to load or is unavailable. */
export const HOME_HERO_STATIC_SRC = encodeURI('/images/waves.jpg')
