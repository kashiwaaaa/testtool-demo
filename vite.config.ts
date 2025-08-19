import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(new URL('./src', import.meta.url).pathname)
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    server: {
      deps: {
        inline: []
      }
    }
  }
})
