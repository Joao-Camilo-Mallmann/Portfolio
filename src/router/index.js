import DevView from '@/views/DevView.vue'
import EditorView from '@/views/EditorView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dev',
      name: 'DevView',
      component: DevView,
    },
    {
      path: '/editor',
      name: 'EditorView',
      component: EditorView,
    },
  ],
})

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

export default router
