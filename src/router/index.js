import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const pageTitle = 'RENATO OLIVEIRA WEB'
const routes = [

  {
    path: '/',
    // name: 'Home',
    // meta: { title: pageTitle + 'FRONTEND / UX & UI', description: 'RENATO OLIVEIRA WEB · FRONTEND / UX & UI' },
    meta: { title: pageTitle },
    component: Home
  },

  {
    path: '/sobre',
    // name: 'lab',
    meta: { title: pageTitle + ' · SOBRE' },
    component: () => import('../views/About.vue')
  },

  {
    path: '/links',
    // name: 'frontend',
    meta: { title: pageTitle + ' · LINKS' },
    component: () => import('../views/Links.vue')
  },

  {
    path: '/*',
    // name: 'NotFound',
    meta: { title: pageTitle + ' · PÁGINA NÃO ENCONTRADA' },
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