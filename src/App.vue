<template>
  <div id="app">
    <!-- <Header /> -->
    <transition name="fade-view" mode="out-in">
      <router-view />
    </transition>
    <Nav />
  </div>
</template>

<script>
// import Header from "../src/components/Header";
import Nav from "../src/components/Nav";
export default {
  components: {
    // Header,
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
  transition: 0.3s;
}

section {
  // height: 85vh;
  display: grid;
  padding: 20px;
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