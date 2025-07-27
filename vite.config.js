import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CreaTuLanding_gallo/', // <- importante
  plugins: [react()],
})