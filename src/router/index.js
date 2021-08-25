import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const pageTitle = 'RENATO7OLIVEIRA · '
const routes = [

  {
    path: '/',
    name: 'Home',
    meta: { title: pageTitle + 'WEBDESIGNER', description: 'RENATO7OLIVEIRA · WEBDESIGNER' },
    component: Home
  },

  {
    path: '/frontend',
    name: 'frontend',
    meta: { title: pageTitle + 'FRONTEND' },
    component: () => import('../views/Frontend.vue')
  },

  {
    path: '/design',
    name: 'design',
    meta: { title: pageTitle + 'DESIGN' },
    component: () => import('../views/Design.vue')
  },

  {
    path: '/*',
    name: 'NotFound',
    meta: { title: pageTitle + 'PÁGINA NÃO ENCONTRADA' },
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'link_active',
  // mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  document.description = to.meta.description
  next()
});

export default router