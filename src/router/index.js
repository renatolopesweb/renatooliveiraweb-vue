import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const pageTitle = 'Renato Oliveira Web · '
const routes = [

  {
    path: '/',
    meta: { title: pageTitle + 'Front-end · Web-designer'},
    component: Home
  },

  {
    path: '/links',
    meta: { title: pageTitle + 'Links' },
    component: () => import('../views/Links.vue')
  },

  {
    path: '/contato',
    meta: { title: pageTitle + 'Contato' },
    component: () => import('../views/Contact.vue')
  },

  {
    path: '/curriculo',
    meta: { title: pageTitle + 'Currículo' },
    component: () => import('../views/Vitae.vue')
  },

  {
    path: '/*',
    meta: { title: pageTitle + 'Página não encontrada...' },
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