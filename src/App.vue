<template>
  <div id="app">
    <Nav />
    <transition name="fade-view" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

import Nav from "../src/components/Nav";
export default {
  components: {
    Nav
  },
};
</script>

<style lang="scss">
/* BOOT START */
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  font-family: "Roboto", sans-serif;
  animation: fadeIn 0.2s ease-out;
}

html,
body {
  background: #fff;
  color: #000;
  transition: 0.3s;
}

section{
  display: grid;
  grid-template-columns: 370px auto;
  height: 100vh;
}
article {
  grid-column-start: 2;
  padding: 40px 40px 40px 0;
}
@media(max-width: 800px){
  section{
    grid-template-columns: auto;
  }
 article{
  grid-column-start: 1;
  padding: 20px;
 } 
}

.fade-view-enter,
.fade-view-leave-to {
  opacity: 0;
}
.fade-view-enter-active,
.fade-view-leave-active {
  transition: opacity 0.3s ease-in-out;
}
/* BOOT END */
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
.show-d {
  display: grid;
}
.show-m {
  display: none;
}
@media (max-width: 800px) {
  .show-d {
    display: none !important;
  }
  .show-m {
    display: grid;
  }
}
/* MEDIA QUERIES END  */
</style>