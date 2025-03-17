import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import DataView from '../views/DataView.vue'

const routes = [
  { path: '/', component: FormView },
  { path: '/data', component: DataView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
