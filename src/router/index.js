import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const pageTitle = 'RENATO7OLIVEIRA · '
const routes = [

  {
    path: '/',
    // name: 'Home',
    meta: { title: pageTitle + 'FRONTEND / UX & UI', description: 'RENATO7OLIVEIRA · FRONTEND / UX & UI' },
    component: Home
  },

  {
    path: '/sobre',
    // name: 'lab',
    meta: { title: pageTitle + 'SOBRE' },
    component: () => import('../views/About.vue')
  },

  {
    path: '/projetos',
    // name: 'frontend',
    meta: { title: pageTitle + 'PROJETOS' },
    component: () => import('../views/Projects.vue')
  },

  {
    path: '/contato',
    name: 'Contact',
    meta: { title: pageTitle + 'CONTATO' },
    component: () => import('../views/Contact.vue')
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