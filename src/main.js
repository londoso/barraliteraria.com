import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from '@/router'
import i18n from '@/i18n'

import '@/scss/main.scss'

// ViteSSG genera HTML estático de cada ruta en el build (mejor SEO y primer
// render), y en el navegador hidrata la misma app como SPA.
export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior,
    base: import.meta.env.BASE_URL
  },
  ({ app }) => {
    app.use(i18n)
  }
)
