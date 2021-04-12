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
$color-primary: #7030A0;
$color-secondary: rgb(51,23,140);
$color-third: rgb(255, 191, 63);
$color-fourth: rgb(166,117,21);

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
/* TEMPLATE START */
section{
    padding: 90px 20px 20px 20px;
}
article, aside{
  border-radius: 15px;
}
article, aside{
  // box-shadow: 5px 1px 30px rgba(112, 48, 160 , 0.3);
  background: #fff;
}
p{
  font-size: 1em;
  line-height: 23px;
}
/* TEMPLATE END */
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

.btn_primary{
  background: #fff;
  color: $color-secondary;
  &:hover{
    color: #220135;
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