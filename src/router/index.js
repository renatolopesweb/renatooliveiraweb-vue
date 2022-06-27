import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const pageTitle = 'RENATO OLIVEIRA · '
const routes = [

  {
    path: '/',
    meta: { title: pageTitle + 'front-end · web-designer'},
    component: Home
  },

  {
    path: '/links',
    meta: { title: pageTitle + 'LINKS' },
    component: () => import('../views/Links.vue')
  },

  {
    path: '/contato',
    meta: { title: pageTitle + 'CONTATO' },
    component: () => import('../views/Contact.vue')
  },

  {
    path: '/curriculo',
    meta: { title: pageTitle + 'CURRÍCULO' },
    component: () => import('../views/Vitae.vue')
  },

  {
    path: '/*',
    meta: { title: pageTitle + 'NADA ENCONTRADO...' },
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