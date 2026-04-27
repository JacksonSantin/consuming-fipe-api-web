import { createRouter, createWebHistory } from 'vue-router'
import FipeCar from '@/module/view/fipeCar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: FipeCar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
