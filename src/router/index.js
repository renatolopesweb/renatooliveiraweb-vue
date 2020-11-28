import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [

  { path: '/', 
  name: 'Home', 
  meta:{title: 'renato7oliveira · frontend · transformação web'},
  component: Home },
  { 
    path: '/sobre', 
    name: 'sobre', 
    meta:{title: 'renato7oliveira · sobre'}, 
    component: () => import( '../views/About.vue')},

  { 
    path: '/portfolio', 
    name: 'Portfolio', 
    meta:{title: 'renato7oliveira · portfolio'} , 
    component: () => import( '../views/Lab.vue')},

  { 
    path: '/portfolio-detalhe', 
    name: 'PortfolioDetalhe', 
    meta:{title: 'renato7oliveira · portfolio · detalhe'} , 
    component: () => import( '../views/LabDetail.vue')},
  { 
    path: '/*', 
    name: 'NotFound', 
    meta:{title: 'renato7oliveira · página não encontrada'} , 
    component: () => import( '../views/NotFound.vue')}
]

const router = new VueRouter({
  linkExactActiveClass: 'link_active',
  routes
});

router.beforeEach((to, from, next) =>{
  document.title = to.meta.title
  next()
});

export default router