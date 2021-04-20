import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fontRoboto from '../node_modules/roboto-fontface/css/roboto/roboto-fontface.css'
import fontawesome from '../node_modules/font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

fontRoboto;
fontawesome;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')