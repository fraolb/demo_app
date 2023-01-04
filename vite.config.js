import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/demp_app",
  build: {
    chunkSizeWarningLimit: 1700,
  },
  plugins: [react()],
})
