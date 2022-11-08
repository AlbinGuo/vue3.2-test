import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Index from '@/views/index.vue'
import Home from '@/views/home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => Index
  },
  {
    path: '/home',
    component: () => Home
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router