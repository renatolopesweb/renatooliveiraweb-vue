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
  scroll-behavior: smooth;
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

.btn {
  border: 0px;
  border-radius: 2px;
  border: 1px solid $color-primary;
  line-height: 40px;
  cursor: pointer;
  font-size: 0.7em;
  padding: 10px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: $t-def;
  &:hover {
    background: $color-primary;
    border: 1px solid $color-primary;
    color: #fff;
    text-decoration: none;
  }
}

.btn-primary {
  background: $color-primary;
  color: #fff;
}
.btn-second {
  background: #fff;
  color: $color-primary;
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