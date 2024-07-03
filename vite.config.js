import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/steam-clone-preview/',
  server: {
    port: 3000,
    historyApiFallback: true,
  },
  build: {
    outDir: 'build'
  }
})