import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

import Welcome from '@/views/welcome.vue'

import Login from '@/views/login.vue'
import Sources from '@/views/DataSource/list.vue'
import sourceDetail from '@/views/DataSource/detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          component: Welcome
        },
        {
          path: '/org/:orgId/sources',
          name: 'sources',
          component: Sources
        },
        {
          path: '/org/:orgId/sources/:sourceId',
          name: 'sourceDetail',
          component: sourceDetail
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
