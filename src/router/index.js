import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'PersonIndex',
      component: () => import('../views/person/PersonIndex.vue')
    },    
    {
      path: '/person/create',
      name: 'PersonCreate',
      component: () => import('../views/person/PersonCreate.vue')
    },
    {
      path: '/person/:id/edit',
      name: 'PersonEdit',
      component: () => import('../views/person/PersonEdit.vue'),
      props: true
    },
    {
      path: '/trial',
      name: 'Trial',
      component: () => import('../views/person/Trial.vue'),
      props: true
    }
  ]
})

export default router
