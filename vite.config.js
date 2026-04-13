import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Dedicated port so this app is not confused with other Vite projects on :5173
    port: 5180,
    strictPort: true,
  },
})

