import DevView from '@/views/DevView.vue'
import Editor from '@/views/EditorView.vue'
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
      name: 'Editor',
      component: Editor,
    },
  ],
})

export default router
