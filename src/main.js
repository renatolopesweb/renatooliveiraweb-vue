import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fontawesome from '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

Vue.config.productionTip = false

fontawesome;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')