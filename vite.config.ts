import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/blitz/",
  plugins: [react()],
  server: {
    port: 3000, // Override Vite default of 5173
  },
})

