<template>
  <div id="app">
    <Nav />
    <i class="material-icons-round md-brightness_2" id="switch" title="Click!"></i>
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
:root{
    --body-bg: #fff;
    --body-color: #111;
}

.dark-mode:root{
    --body-bg: #041017;
    --body-color: #fff;
}
#switch{
    cursor: pointer;
    padding-top: 30px;
    left: 96%;
    position: absolute;
    position: fixed;
    z-index: 1;
}
@media (max-width: 60em) {
  #switch {
    display: none;
  }
}
.fade-view-enter , .fade-view-leave-to{
    opacity: 0;
}
.fade-view-enter-active , .fade-view-leave-active{
    transition: opacity .3s ease-in-out ;
}
body{
    background: var(--body-bg);
    color: var(--body-color);
    margin: 0px;
    transition: 0.5s;
}

p{
    font-size: 1.4em;
}
@media(max-width: 60em){
    p{
        font-weight: normal;
        font-size: 1.1em;
    }  
}
/* BOOT END */

/* TEMPLATE START */
section{
    padding: 80px;
}
/*1024px*/
@media(max-width: 64em){
    section{
        padding: 15px 15px 80px 15px;
    }
}
.internal{
    padding-top: 100px;
}
/* TEMPLATE END */

/* BUTTON START */
.btn{
    border: 0;
    border-radius: 100px;
    color: #fff;
    cursor: pointer;
    font-size: 0.8em;
    outline: 0;
    padding: 15px 20px;
    text-transform: uppercase;
    transition: 0.3s;
    &:hover{
        animation-name: button_pulse;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        // animation-delay: 1s;
        filter: brightness(80%);
    }
    &:active{
        filter: brightness(100%);
    }
    i{
            font-size: 1em;
        }
}

.btn_animate{
    animation-name: button_pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

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
</style>