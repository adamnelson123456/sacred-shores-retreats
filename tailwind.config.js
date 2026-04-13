/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-green': '#0F3123',
        'sage': '#B8D4C8',
        'seafoam': '#D4E8E0',
        'sand': '#F1EDE4',
        'gold': '#D4A574',
        'hero-gold': '#C9A227',
        'nav-bg': '#E8E6E3',
        'nav-ink': '#3C2A16',
        'terracotta': '#6B3D2E',
        'terracotta-dark': '#5A3326',
        'accent-orange': '#E8954C',
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'script': ['Great Vibes', 'cursive'],
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'body': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

