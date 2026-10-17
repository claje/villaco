
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/homePage.vue'
import Program from '../views/program.vue'
import FacultyAndStaff from '../views/FacultyAndStaff.vue'
import Partnerships from '../views/Partnerships.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/program', component: Program },
  { path: '/faculty', component: FacultyAndStaff },
  { path: '/partnerships', component: Partnerships }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
