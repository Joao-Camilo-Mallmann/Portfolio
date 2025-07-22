import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// CSS imports primeiro para garantir carregamento
import 'primeicons/primeicons.css'
import './assets/main.css'

// Define modo escuro como padrão e garante carregamento
document.documentElement.classList.add('dark')

// Aguardar CSS estar pronto antes de montar o app
function waitForCSS() {
  return new Promise((resolve) => {
    const checkCSS = () => {
      const styles = document.styleSheets
      if (styles.length > 0) {
        resolve()
      } else {
        setTimeout(checkCSS, 10)
      }
    }
    checkCSS()
  })
}

const app = createApp(App)

app.use(router)
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

// Aguardar CSS e montar app de forma segura
waitForCSS().then(() => {
  app.mount('#app')
})
