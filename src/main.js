import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { initI18n } from './composables/useI18n'
import { routes, scrollBehavior, setupRouterGuards } from './router'

import 'primeicons/primeicons.css'
import './assets/main.css'

// Criar app com ViteSSG - gera HTML estático para cada rota
export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ app, router, isClient }) => {
  // Configurar PrimeVue
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: '.dark',
        cssLayer: false,
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
