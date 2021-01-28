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
$color-main: rgb(29, 0, 34);
// $color-main: rgb(6,79,70);
html, body{
    background: $color-main;
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
    padding: 90px 10px 20px 10px;
      ul{
        margin: 10px 0 15px;
      }
      li{
        border: 1px solid #ccc;
        border-radius: 3px;
        color: #999;
        display: inline;
        font-size: 0.8em;
        margin-right: 10px;
        padding: 5px 12px;
      }
}
/* TEMPLATE END */
/* BUTTON START */
.btn {
  border: 0px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8em;
  outline: 0;
  margin-bottom: 10px;
  padding: 12px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  &:hover{
    animation-name: button_pulse;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
  }
  i {
    font-size: 1.1em;
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
.btn_white{
  background: rgba(255, 255, 255 , 0.9);
  color: rgba(0, 0, 0, 0.8);
  &:hover{
    background: rgba(255, 255, 255, 0.8);
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
      box-shadow: 0 0 0 0px rgba(100, 100, 100, 0.9);
    }
    100% {
      box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
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