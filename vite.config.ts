import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: ['es2015', 'safari11'], // Ensures Safari compatibility
  },
  server: {
    host: true
  }
})