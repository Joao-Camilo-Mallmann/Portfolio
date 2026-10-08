import { createRouter, createWebHistory } from 'vue-router'
import { getDefaultLocale, setLocale } from '../composables/useI18n'

// Definir rotas (exportado para uso no ViteSSG)
export const routes = [
  // Redirecionamento dinâmico e inteligente na raiz
  {
    path: '/',
    name: 'root',
    component: () => import('../views/RootRedirect.vue'),
  },

  // Rotas principais localizadas sob prefixo de idioma
  {
    path: '/:lang(pt-br|en-us)',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/:lang(pt-br|en-us)/dev',
    name: 'DevView',
    component: () => import('../views/DevView.vue'),
  },
  {
    path: '/:lang(pt-br|en-us)/editor',
    name: 'EditorView',
    component: () => import('../views/EditorView.vue'),
  },
  {
    path: '/:lang(pt-br|en-us)/easter-egg',
    name: 'SecretView',
    component: () => import('../views/SecretView.vue'),
  },

  // Mapeamento de rotas legadas para compatibilidade de URLs e backlinks
  {
    path: '/dev',
    redirect: () => `/${getDefaultLocale()}/dev`,
  },
  {
    path: '/editor',
    redirect: () => `/${getDefaultLocale()}/editor`,
  },
  {
    path: '/easter-egg',
    redirect: () => `/${getDefaultLocale()}/easter-egg`,
  },

  // Captura todas as rotas não encontradas e redireciona para a home no idioma ativo
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: () => `/${getDefaultLocale()}/`,
  },
]

// Scroll behavior (exportado para uso no ViteSSG)
export const scrollBehavior = () => {
  return { top: 0, behavior: 'smooth' }
}

// Configuração de navegação e guards
export const setupRouterGuards = (router) => {
  router.beforeEach((to, from, next) => {
    // Normalização de caixa alta na URL
    if (to.params.lang) {
      const lower = to.params.lang.toLowerCase()
      if (to.params.lang !== lower) {
        return next({
          path: to.path.toLowerCase(),
          replace: true,
        })
      }
      setLocale(lower)
    }

    // Força a navegação mesmo para a mesma rota se necessário
    if (
      to.fullPath === from.fullPath &&
      to.fullPath !== '/' &&
      to.fullPath !== '/pt-br' &&
      to.fullPath !== '/en-us'
    ) {
      setTimeout(() => {
        router.replace({ path: to.fullPath, query: { reload: Date.now() } })
      }, 0)
      return false
    }

    next()
  })
}

// Criar router apenas quando necessário (para uso em modo não-SSG)
let router = null

export default function getRouter() {
  if (!router) {
    router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      scrollBehavior,
      routes,
    })
    setupRouterGuards(router)
  }
  return router
}
