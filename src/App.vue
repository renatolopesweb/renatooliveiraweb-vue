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
    Nav,
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  animation: fadeIn 0.2s ease-out;
}

$color-primary: #9e51ff;
$t-def: 0.3s;

html,
body {
  background: #fff;
  color: #444;
  transition: 0.3s;
}
a {
  color: $color-primary;
  font-size: 1.1em;
  &:hover {
    text-decoration: underline;
  }
}

header,
main,
section {
  display: grid;
}

.fade-view-enter,
.fade-view-leave-to {
  opacity: 0;
}
.fade-view-enter-active,
.fade-view-leave-active {
  transition: opacity 0.3s ease-in-out;
}

/* DESIGN */
.card {
  border-radius: 2px;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  // box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
  // box-shadow: 1px 25px 40px rgba($color: #666, $alpha: 0.1);
  transition: $t-def;
  &:hover {
    transform: translateY(-5px);
  }
  &:active {
    transform: translateY(5px);
  }
}
/* DESIGN */

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
@media (max-width: 1024px) {
  .show-d {
    display: none !important;
  }
  .show-m {
    display: grid;
  }
}
/* MEDIA QUERIES END  */
</style>