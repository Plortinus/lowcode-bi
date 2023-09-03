import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import Sources from '@/views/DataSource/list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/org/:orgId/sources',
      name: 'sources',
      component: Sources
    }
  ]
})

export default router
