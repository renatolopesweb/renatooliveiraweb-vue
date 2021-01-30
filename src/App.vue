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
$color-main: rgba(230, 230, 230, 0.1);
// $color-main: #333;
$color-primary: rgb(106,72,215);
$color-secondary: rgb(51,23,140);
$color-third: rgb(255, 191, 63);
$color-fourth: rgb(166,117,21);

html, body{
    background: $color-main;
    margin: 0px;
    transition: 0.3s;
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
    margin-bottom: 120px;
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
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.7em;
  outline: 0;
  margin-bottom: 10px;
  padding: 12px 20px;
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
    font-size: 1.2em;
  }
}

.btn_primary{
  background: $color-secondary;
  color: #fff;
  &:hover{
    background: $color-primary;
  }
}
.btn_secondary{
  background: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.6);
  &:hover{
    background: #000;
    color: #fff;
  }
}
.btn_third{
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.4);
  &:hover{
    color: #fff;
    background: #000;
    border: 1px solid #000;
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
.hide-mobile{
  display: block;
}
.show-mobile{
  display: none;
}
@media (max-width: 60em) {
  html,body{
    overflow-x: hidden;
  }
  section{
    padding: 20px;
  }
  .hide-mobile{
    display: none;
  }
  .show-mobile{
    display: block;
  }
}
/* MEDIA QUERIES END  */
</style>