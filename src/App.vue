<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <main>
      <transition name="fade-view" mode="out-in">
        <router-view />
      </transition>
    </main>
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
$color-light: rgba(0, 0, 0, 0.87);
$color-primary: #43627F;
$radius-def: 2px;
$border-def: rgba(
  $color: #ccc,
  $alpha: 0.5,
);
$t-def: 0.2s;

/* BOOT START */
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  scroll-behavior: smooth;
  animation: fadeIn 0.2s ease-out;
  transition: $t-def;
}
html {
  overflow-y: scroll;
  background: rgba($color: $color-primary, $alpha: 0.05);
}
html,
body {
  color: rgb(33,49,63);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

#app {
  display: grid;
  grid-template-rows: 175px auto;
  grid-template-columns: repeat(7, 1fr);
}

header {
  grid-row-start: 1;
  grid-column: 1 / -1;
  background: $color-primary;
  position: fixed;
  width: 100%;
  z-index: 1;
}

main {
  grid-row-start: 2;
  grid-column: 1 / 8;
  margin: 0 25px 25px 25px;
}

@media(max-width: 700px){
  main{
    margin: 0;
  }
}

// BTN

.btn {
  border: 0px;
  border-radius: $radius-def;
  cursor: pointer;
  font-size: 0.8em;
  padding: 14px;
  text-align: center;
  text-transform: uppercase;
  transition: $t-def;
  i {
    font-size: 0.9em;
    vertical-align: middle;
  }
}
.btn-primary {
  background: #fff;
  border: 1px solid $color-primary;
  color: $color-primary;
  &:hover {
    background: $color-primary;
    color: #fff;
  }
}
.btn-secondary {
  background: $color-primary;
  border: 1px solid $color-primary;
  color: #fff;
}

@media (max-width: 700px) {
  #app {
    grid-template-rows: 0 auto;
    grid-template-columns: 1fr;
  }
  main {
    grid-column: 1 / -1;
    padding-bottom: 15vh;
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
.show-d {
  display: grid;
}
.show-m {
  display: none;
}
@media (max-width: 700px) {
  .show-d {
    display: none !important;
  }
  .show-m {
    display: grid;
  }
}
/* MEDIA QUERIES END  */
</style>