import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const pageTitle = 'RENATO7OLIVEIRA · '
const routes = [

  {
    path: '/',
    // name: 'Home',
    meta: { title: pageTitle + 'WEBDESIGNER', description: 'RENATO7OLIVEIRA · WEBDESIGNER' },
    component: Home
  },

  {
    path: '/skills',
    // name: 'lab',
    meta: { title: pageTitle + 'HABILIDADES' },
    component: () => import('../views/Skills.vue')
  },

  {
    path: '/frontend',
    // name: 'frontend',
    meta: { title: pageTitle + 'FRONTEND' },
    component: () => import('../views/Frontend.vue')
  },

  {
    path: '/frontend-detalhe',
    name: 'FrontendDetail',
    meta: { title: pageTitle + 'FRONTEND · DETALHE' },
    component: () => import('../views/FrontendDetail.vue')
  },

  {
    path: '/design',
    // name: 'design',
    meta: { title: pageTitle + 'DESIGN' },
    component: () => import('../views/Design.vue')
  },

  {
    path: '/video',
    // name: 'design',
    meta: { title: pageTitle + 'VIDEO' },
    component: () => import('../views/Video.vue')
  },

  {
    path: '/*',
    // name: 'NotFound',
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