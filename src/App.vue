<template>
  <div id="app">
    <Nav />
    <transition name="fade-view" mode="out-in">
        <router-view/>
    </transition>
  </div>
</template>

<script>
import Nav from '../src/components/Nav'
export default {
  components:{
    Nav
  }
}
</script>

<style lang="scss">
/* BOOT START */
*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
    font-family: 'Roboto', sans-serif;
}
html, body{
    background: rgb(242, 242, 242);
    margin: 0px;
    transition: 0.5s;
}
.fade-view-enter , .fade-view-leave-to{
    opacity: 0;
}
.fade-view-enter-active , .fade-view-leave-active{
    transition: opacity .3s ease-in-out ;
}

/* BOOT END */
/* TEMPLATE START */
section{
    padding: 90px 20px 20px 20px;
}
/* TEMPLATE END */
/* BUTTON START */
.btn {
  border: 0px;
  box-shadow: 0px 10px 13px -7px #ccc, 5px 5px 15px 5px rgba(0,0,0,0);
  cursor: pointer;
  display: block;
  font-size: 0.8em;
  margin-bottom: 13px;
  outline: 0;
  padding: 12px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  width: 100%;
  &:hover{
    animation-name: button_pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
  }
  i {
    font-size: 1em;
  }
}

.btn_primary{
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  &:hover{
    background: #000;
  }
}
.btn_secondary{
  background: rgba(0, 0, 0, 0.1);
  color: #999;
  &:hover{
    background: #000;
    color: #fff;
  }
}

.btn_animate{
    animation-name: button_pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}
/* BUTTON END */
@keyframes button_pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.5);
    }
    100% {
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }
  }
/* BUTTON END */
/* TRANSITIONS START */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
header{
    animation: fadeIn 0.2s ease-out;
}
.fadeOut{
    animation: fadeOut 0.2s ease-out forwards;
}
/* TRANSITIONS END */
/* MEDIA QUERIES START */
.hide_mobile{
  display: block;
}
.show_mobile{
  display: none;
}
@media (max-width: 60em) {
  .hide_mobile{
    display: none;
  }
  .show_mobile{
    display: block;
  }
}
/* MEDIA QUERIES END  */
</style>