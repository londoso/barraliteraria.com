import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages con dominio propio (barraliteraria.com) sirve desde la raíz.
// Si algún día se despliega en un subpath, sobreescribe con BASE_URL.
export default defineConfig({
  base: process.env.BASE_URL || '/',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // Silence Dart Sass legacy @import deprecation notices.
        silenceDeprecations: ['legacy-js-api', 'import']
      }
    }
  },
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 4096,
    reportCompressedSize: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
