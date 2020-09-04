<template>
  <div id="app">
    <Nav />
    <router-view/>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

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
    text-shadow: 0px 0px 1px #666;
    color: #111;
 //   background: #333;
}
p{
    margin-bottom: 15px;
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
        animation-delay: 1s;
        filter: brightness(80%);
    }
    &:active{
        filter: brightness(100%);
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
section , header{
    animation: fadeIn 0.2s ease-out;
}
.fadeOut{
    animation: fadeOut 0.2s ease-out forwards;
}
/* TRANSITIONS END */
</style>