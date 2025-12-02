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
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'body': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

