import Home from '@/views/HomePage.vue'

// Definición de rutas. vite-ssg crea el router internamente a partir de
// estas rutas (en desarrollo y en el prerender de producción).
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export function scrollBehavior (to) {
  if (to.hash) {
    return { el: to.hash, behavior: 'smooth' }
  }
  return { top: 0 }
}
