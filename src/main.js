import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.overlay');

function scrollTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
document.querySelector('.nav').onclick = function () {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('ds_block');
}
document.querySelector('.sidebar').onclick = function () {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('ds_block');
    scrollTop();
}
document.querySelector('.overlay').onclick = function () {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('ds_block');
}