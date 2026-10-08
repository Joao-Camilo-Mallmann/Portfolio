import en from '@/i18n/en.js'
import ptBR from '@/i18n/pt-BR.js'
import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'

export const SUPPORTED_LOCALES = ['pt-br', 'en-us']
export const DEFAULT_LOCALE = 'en-us'

// Mapa de mensagens indexado pelas variações de código
const messages = {
  'pt-br': ptBR,
  'pt-BR': ptBR,
  'en-us': en,
  'en-US': en,
  en: en,
}

// Estado global reativo
const state = reactive({
  locale: 'pt-br',
})

/**
 * Normaliza qualquer código de idioma para 'pt-br' ou 'en-us'
 * @param {string} lang
 * @returns {'pt-br' | 'en-us'}
 */
export function normalizeLocale(lang) {
  if (!lang) return 'en-us'
  const lower = String(lang).toLowerCase()
  if (lower.startsWith('pt')) return 'pt-br'
  return 'en-us'
}

/**
 * Detecta o idioma padrão no cliente com base em localStorage ou navegador
 * @returns {'pt-br' | 'en-us'}
 */
export function getDefaultLocale() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('portfolio-locale')
    if (saved) {
      return normalizeLocale(saved)
    }
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase()
    if (browserLang.startsWith('pt')) {
      return 'pt-br'
    }
  }
  return 'en-us'
}

/**
 * Retorna a rota equivalente (espelhada) no idioma de destino
 * Ex: /pt-br/dev com target 'en-us' -> /en-us/dev
 * @param {string} path
 * @param {'pt-br' | 'en-us'} targetLocale
 * @returns {string}
 */
export function getMirroredPath(path, targetLocale) {
  const normTarget = normalizeLocale(targetLocale)
  const pathWithoutLocale = path.replace(/^\/(pt-br|en-us)/i, '') || '/'
  if (pathWithoutLocale === '/') {
    return `/${normTarget}/`
  }
  return `/${normTarget}${pathWithoutLocale.startsWith('/') ? '' : '/'}${pathWithoutLocale}`
}

/**
 * Busca uma tradução por chave dot-notation (ex: 'home.aboutMe')
 * @param {object} obj - Objeto de traduções
 * @param {string} path - Caminho da chave
 * @returns {string|null}
 */
function getNestedValue(obj, path) {
  if (!obj || !path) return null
  return path.split('.').reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : null
  }, obj)
}

/**
 * Inicializa o locale a partir do localStorage ou preferência do visitante
 */
export function initI18n() {
  if (typeof window !== 'undefined') {
    const def = getDefaultLocale()
    state.locale = def
  }
}

/**
 * Altera o idioma e persiste no localStorage
 * @param {string} newLocale
 */
export function setLocale(newLocale) {
  const norm = normalizeLocale(newLocale)
  state.locale = norm
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('portfolio-locale', norm)
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }
}

/**
 * Composable principal de internacionalização
 */
export function useI18n() {
  let route = null
  try {
    route = useRoute()
  } catch {
    // Fora de contexto de componente Vue
  }

  // Sincroniza reativamente com route.params.lang se presente, senão com o state global
  const locale = computed(() => {
    if (route && route.params && route.params.lang) {
      return normalizeLocale(route.params.lang)
    }
    return state.locale
  })

  const isPt = computed(() => locale.value === 'pt-br' || locale.value === 'pt-BR')

  /**
   * Traduz uma chave para o idioma atual
   * @param {string} key - Chave dot-notation
   * @returns {string}
   */
  function t(key) {
    const currentLang = locale.value
    const translation = getNestedValue(messages[currentLang], key)
    if (translation !== null) return translation

    // Fallback para pt-br
    const fallback = getNestedValue(messages['pt-br'], key)
    if (fallback !== null) return fallback

    // Retorna a chave se não encontrar tradução
    return key
  }

  /**
   * Gera caminho localizado a partir do path relativo
   * @param {string} targetPath
   * @returns {string}
   */
  function localizedPath(targetPath = '/') {
    return getMirroredPath(targetPath, locale.value)
  }

  /**
   * Alterna entre PT-BR e EN-US, navegando no router se fornecido
   * @param {object} [routerInstance]
   * @param {object} [routeInstance]
   */
  function toggleLocale(routerInstance, routeInstance) {
    const next = isPt.value ? 'en-us' : 'pt-br'
    setLocale(next)

    const r = routerInstance
    const currentRoute = routeInstance || route

    if (r && currentRoute) {
      const nextPath = getMirroredPath(currentRoute.fullPath || currentRoute.path, next)
      r.push(nextPath)
    }
  }

  return {
    locale,
    isPt,
    t,
    setLocale,
    toggleLocale,
    localizedPath,
    getMirroredPath,
  }
}
