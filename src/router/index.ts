import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Index from '@/views/index.vue'
import Home from '@/views/home.vue'
import Lodash from '@/views/lodash.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => Index
  },
  {
    path: '/home',
    component: () => Home
  },
  {
    path: '/lodash',
    component: () => Lodash
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router