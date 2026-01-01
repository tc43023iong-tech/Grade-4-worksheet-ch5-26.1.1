import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using './' makes assets relative to index.html, preventing 404 errors on GitHub Pages
  // regardless of the repository name (spaces, dashes, etc.)
  base: './',
})