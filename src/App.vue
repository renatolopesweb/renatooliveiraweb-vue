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
$color-primary: #141e55;
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
}
html,
body {
  background: #fafafa;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

#app {
  display: grid;
  grid-template-rows: 200px auto;
  grid-template-columns: repeat(7, 1fr);
}

header {
  grid-row-start: 1;
  grid-column: 1 / -1;
  margin-bottom: 25px;
  background: $color-primary;
  position: fixed;
  width: 100%;
}

main {
  grid-row-start: 2;
  grid-column: 2 / 7;
}

// BTN

.btn {
  // display: grid;
  // align-content: center;
  // align-items: center;
  border: 0px;
  border-radius: $radius-def;
  // height: 55px;
  cursor: pointer;
  font-size: 0.8em;
  // margin-right: 10px;
  padding: 7px 14px;
  text-align: center;
  text-transform: uppercase;
  transition: $t-def;
  i {
    vertical-align: middle;
  }
}
.btn-primary {
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

// MODAL
.modal {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  // align-items: center;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  background: #fafafa;
  position: fixed;
  z-index: 1;
  .modal-block {
    grid-column: 3 / 6;
    padding-top: 20px;
    margin: 10px 0;
    img {
      width: 100%;
      border-radius: $radius-def;
    }
    .modal-info {
      padding: 15px 0;
      h2 {
        font-size: 1.4em;
        margin-bottom: 10px;
      }
      p {
        color: #333;
        font-weight: 400;
        line-height: 25px;
      }
    }
  }
  .modal-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}

@media (max-width: 1024px) {
  .modal {
    grid-template-columns: 1fr;
    .modal-block {
      padding: 0;
      margin: 0;
      img {
        border-radius: 0px;
      }
      .modal-info {
        padding: 15px;
      }
      .modal-buttons {
        grid-template-columns: 1fr;
        margin: 0 15px;
      }
    }
  }
}
// MODAL

@media (max-width: 600px) {
  #app {
    grid-template-rows: 0 auto;
    grid-template-columns: 1fr;
  }
  main {
    grid-column: 1 / -1;
    padding-bottom: 15vh;
  }
}
// MODAL

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
@media (max-width: 600px) {
  .show-d {
    display: none !important;
  }
  .show-m {
    display: grid;
  }
}
/* MEDIA QUERIES END  */
</style>