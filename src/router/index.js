import Vue from 'vue'
import VueRouter from 'vue-router'
import Day from '../views/Day.vue'
import Month from '../views/Month.vue'
import Year from '../views/Year.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Day',
    component: Day
  },
  {
    path: '/month',
    name: 'Month',
    component: Month
    // component: () => import('../views/Month.vue')
  },
  {
    path: '/year',
    name: 'Year',
    component: Year
    // component: () => import('../views/Year.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
