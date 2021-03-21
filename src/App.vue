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
$color-primary: rgb(106,72,215);
$color-secondary: rgb(51,23,140);
$color-third: rgb(255, 191, 63);
$color-fourth: rgb(166,117,21);

html, body{
    transition: 0.3s;
    background: #f0f0f0;
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
section article{
  border-radius: 15px;
}
article, aside{
  box-shadow: 5px 1px 30px rgba(112, 48, 160 , 0.3);
  background: #fff;
}
p{
  font-size: 1em;
  line-height: 27px;
}
/* TEMPLATE END */
/* BUTTON START */
.btn {
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.7em;
  outline: 0;
  margin: 0px auto 20px auto;
  padding: 16px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  width: 90%;
  &:hover{
    animation-name: button_pulse;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
  }
  i {
    font-size: 1.2em;
    vertical-align: middle;
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
  background: $color-secondary;
  color: rgba(255, 255, 255, 0.7);
  &:hover{
    background: #000;
    color: #fff;
  }
}
.btn_third{
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.5);
  &:hover{
    color: #fff;
    background: #000;
    border: 1px solid #000;
  }
}
.btn_fourth{
  background: rgb(255,107,63);
  color: rgba(255, 255, 255, 1);
  &:hover{
      background: rgba(255,107,63, 0.7);

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
@media (max-width: 800px) {
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