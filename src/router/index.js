import { createRouter, createWebHistory } from 'vue-router'

// Definir rotas (exportado para uso no ViteSSG)
export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/dev',
    name: 'DevView',
    component: () => import('../views/DevView.vue'),
  },
  {
    path: '/editor',
    name: 'EditorView',
    component: () => import('../views/EditorView.vue'),
  },
  {
    path: '/easter-egg',
    name: 'SecretView',
    component: () => import('../views/SecretView.vue'),
  },
  // Captura todas as rotas não encontradas e redireciona para home
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/',
  },
]

// Scroll behavior (exportado para uso no ViteSSG)
export const scrollBehavior = () => {
  // Senão, sempre ir para o topo da página
  return { top: 0, behavior: 'smooth' }
}

// Configuração de navegação (aplicada apenas no cliente)
export const setupRouterGuards = (router) => {
  // Exemplo de lógica global antes de cada navegação
  router.beforeEach((to, from, next) => {
    // Força a navegação mesmo para a mesma rota (Vue Router 4.2+)
    if (to.fullPath === from.fullPath && to.fullPath !== '/') {
      // Força reload do componente
      next(false)
      setTimeout(() => {
        router.replace({ path: to.fullPath, query: { reload: Date.now() } })
      }, 0)
    } else {
      next()
    }
  })
}

// Criar router apenas quando necessário (para uso em modo não-SSG)
// Não criar durante build SSR para evitar erro "window is not defined"
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
