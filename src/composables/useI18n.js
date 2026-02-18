import en from '@/i18n/en.js'
import ptBR from '@/i18n/pt-BR.js'
import { computed, reactive } from 'vue'

// Mapa de idiomas disponíveis
const messages = {
  'pt-BR': ptBR,
  en: en,
}

// Estado global reativo (singleton)
const state = reactive({
  locale: 'pt-BR',
})

/**
 * Busca uma tradução por chave dot-notation (ex: 'home.aboutMe')
 * @param {object} obj - Objeto de traduções
 * @param {string} path - Caminho da chave
 * @returns {string} Tradução encontrada ou a chave original
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : null
  }, obj)
}

/**
 * Inicializa o locale a partir do localStorage (apenas no cliente)
 */
export function initI18n() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('portfolio-locale')
    if (saved && messages[saved]) {
      state.locale = saved
    }
  }
}

/**
 * Composable principal de internacionalização
 */
export function useI18n() {
  const locale = computed(() => state.locale)

  /**
   * Traduz uma chave para o idioma atual
   * @param {string} key - Chave dot-notation (ex: 'home.aboutMe')
   * @returns {string}
   */
  function t(key) {
    const translation = getNestedValue(messages[state.locale], key)
    if (translation !== null) return translation

    // Fallback para pt-BR
    const fallback = getNestedValue(messages['pt-BR'], key)
    if (fallback !== null) return fallback

    // Retorna a chave se não encontrar tradução
    return key
  }

  /**
   * Altera o idioma e persiste no localStorage
   * @param {string} newLocale - Código do idioma ('pt-BR' ou 'en')
   */
  function setLocale(newLocale) {
    if (messages[newLocale]) {
      state.locale = newLocale
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-locale', newLocale)
      }
    }
  }

  /**
   * Alterna entre PT-BR e EN
   */
  function toggleLocale() {
    const next = state.locale === 'pt-BR' ? 'en' : 'pt-BR'
    setLocale(next)
  }

  return {
    locale,
    t,
    setLocale,
    toggleLocale,
  }
}
