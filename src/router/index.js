import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const pageTitle = 'RENATO OLIVEIRA WEB'
const routes = [

  {
    path: '/',
    meta: { title: pageTitle + ' · HOME'},
    component: Home
  },

  {
    path: '/skills',
    meta: { title: pageTitle + ' · SKILLS' },
    component: () => import('../views/Skills.vue')
  },

  {
    path: '/links',
    meta: { title: pageTitle + ' · LINKS' },
    component: () => import('../views/Links.vue')
  },

  {
    path: '/*',
    meta: { title: pageTitle + ' · PÁGINA NÃO ENCONTRADA' },
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'link_active',
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  document.description = to.meta.description
  next()
});

export default router