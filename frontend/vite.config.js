import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  base: './', // 👈 Esto es clave para servir desde cualquier carpeta
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      'katex': fileURLToPath(new URL('./node_modules/katex', import.meta.url))
    }
  },
  server: {
    fs: {
      strict: false
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom') || id.includes('react-dom') || id.includes('react')) {
              return 'vendor-react';
            }
            if (id.includes('katex')) {
              return 'vendor-katex';
            }
            if (id.includes('react-markdown') || id.includes('rehype-katex') || id.includes('remark-math') || id.includes('react-latex-next')) {
              return 'vendor-markdown';
            }
            return 'vendor';
          }
        }
      }
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
    globals: true,
    exclude: [...configDefaults.exclude, '**/tests-examples/**'],
  },
})
