import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-personal-website/', // This should match your repository name
  plugins: [react()],
})

