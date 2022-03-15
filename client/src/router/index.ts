import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/detail.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
