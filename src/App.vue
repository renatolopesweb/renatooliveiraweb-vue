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
    animation: fadeIn 0.2s ease-out;
}
$color-primary: #6a48d7;
$color-secondary: #37266b;

html, body{
    transition: 0.3s;
}
.fade-view-enter , .fade-view-leave-to{
    opacity: 0;
}
.fade-view-enter-active , .fade-view-leave-active{
    transition: opacity .3s ease-in-out ;
}
/* BOOT END */
/* BUTTON START */
.btn {
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.7em;
  height: 50px;
  padding: 15px 20px;
  outline: 0;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  i {
    font-size: 1.2em;
    vertical-align: middle;
  }
  // &:hover{
  //   animation-name: button_pulse;
  //   animation-duration: 1.5s;
  //   animation-iteration-count: infinite;
  //   animation-delay: 1s;
  // }
}
.btn_secondary {
  background: $color-primary;
  color: #fff;
  &:hover {
    background: #37dd6f;
  }
  &:active{
    background: #68EE95;
  }
}
/* TRANSITIONS START */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
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
  .hide-mobile{
    display: none;
  }
  .show-mobile{
    display: block;
  }
}
/* MEDIA QUERIES END  */
</style>