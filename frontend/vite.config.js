import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: './', // 👈 Esto es clave para servir desde cualquier carpeta
  plugins: [react()],
  resolve: {
    alias: {
      'katex': fileURLToPath(new URL('./node_modules/katex', import.meta.url))
    }
  },
  server: {
    fs: {
      strict: false
    }
  }
})