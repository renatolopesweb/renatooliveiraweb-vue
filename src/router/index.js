import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const pageTitle = 'renato7oliveira · '

  const routes = [



  { path: '/', 
  name: 'Home', 
  meta:{title: pageTitle + 'frontend · webdesign', description: 'renato7oliveira · frontend · webdesign'},
  component: Home },
  { 
    path: '/sobre', 
    name: 'sobre', 
    meta:{title: pageTitle + 'sobre'}, 
    component: () => import( '../views/About.vue')},

    { 
      path: '/portfolio', 
      name: 'Portfolio', 
      meta:{title: pageTitle + 'portfolio'} , 
      component: () => import( '../views/Lab.vue')},
    { 
 
    path: '/portfolio-detalhe', 
    name: 'PortfolioDetalhe', 
    meta:{title: pageTitle + 'portfolio > detalhe'} , 
    component: () => import( '../views/LabDetail.vue')},
  { 
    path: '/*', 
    name: 'NotFound', 
    meta:{title: pageTitle + 'página não encontrada'} , 
    component: () => import( '../views/NotFound.vue')}
]

const router = new VueRouter({
  linkExactActiveClass: 'link_active',
  routes
});

router.beforeEach((to, from, next) =>{
  document.title = to.meta.title
  document.description = to.meta.description
  next()
});

export default router