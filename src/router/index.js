import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)



const pageTitle = 'RENATO7OLIVEIRA · '

  const routes = [

  { path: '/', 
  name: 'Home', 
  meta:{title: pageTitle + 'FRONTEND · WEB', description: 'RENATO7OLIVEIRA · FRONTEND · WEB'},
  component: Home },

  { 
    path: '/about', 
    name: 'about', 
    meta:{title: pageTitle + 'SOBRE'}, 
    component: () => import( '../views/About.vue')},

  { 
    path: '/lab', 
    name: 'trabalhos', 
    meta:{title: pageTitle + 'TRABALHOS'}, 
    component: () => import( '../views/Lab.vue')},

  { 
    path: '/*', 
    name: 'NotFound', 
    meta:{title: pageTitle + 'PÁGINA NÃO ENCONTRADA'} , 
    component: () => import( '../views/NotFound.vue')}
]

const router = new VueRouter({
  linkExactActiveClass: 'link_active',
  // mode: 'history',
  routes
});

router.beforeEach((to, from, next) =>{
  document.title = to.meta.title
  document.description = to.meta.description
  next()
});

export default router