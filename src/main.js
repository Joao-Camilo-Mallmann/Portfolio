import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { initI18n } from './composables/useI18n'
import { routes, scrollBehavior, setupRouterGuards } from './router'

import { MotionPlugin } from '@vueuse/motion'

import 'lenis/dist/lenis.css'
import 'primeicons/primeicons.css'
import './assets/main.css'

// Criar app com ViteSSG - gera HTML estático para cada rota
export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ app, router, isClient }) => {
  app.use(MotionPlugin, {
    directives: {
      'scroll-visible': {
        initial: { opacity: 0, y: 16 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: { type: 'keyframes', ease: [0.16, 1, 0.3, 1], duration: 600 },
        },
      },
    },
  })
  // Configurações apenas no cliente
  if (isClient) {
    // Define modo escuro como padrão
    document.documentElement.classList.add('dark')

    // Inicializa internacionalização (restaura idioma do localStorage)
    initI18n()

    // Aplicar guards de navegação
    setupRouterGuards(router)
  }
})
