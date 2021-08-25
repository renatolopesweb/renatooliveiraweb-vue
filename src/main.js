import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fontawesome from '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import fontRoboto from '../node_modules/roboto-fontface/css/roboto-condensed/roboto-condensed-fontface.css'

Vue.config.productionTip = false

fontawesome;
fontRoboto;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')