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
    path: '/about',
    name: 'about',
    meta: { title: pageTitle + 'SOBRE' },
    component: () => import('../views/About.vue')
  },

  {
    path: '/skills',
    name: 'skills',
    meta: { title: pageTitle + 'SOBRE' },
    component: () => import('../views/About.vue')
  },

  {
    path: '/lab',
    name: 'experimentos',
    meta: { title: pageTitle + 'EXPERIMENTOS' },
    component: () => import('../views/Lab.vue')
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