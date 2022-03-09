<template>
  <div id="app">
    <header>
      <div>
        <h1 class="show-d">RENATO OLIVEIRA <span>WEB</span></h1>
        <Nav />
      </div>
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
/* BOOT START */

:root {
  // COLORS
  --color-primary: #5d5aa7;
  --color-primary: #125db8;
  --color-black: #151526;
  // PROPERTIES
  --default-border-radius: 4px;
  --default-transition: 0.3s;
  --default-box-shadow: 15px 0px 10px rgba($color: #000, $alpha: 0.6);
}

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  animation: fadeIn 0.1s ease-out;
  transition: var(--default-transition);
}
html {
  overflow-y: scroll;
  background: #fafafa;
  background: rgba($color: #ccc, $alpha: 0.2);
}
html,
body {
  color: var(--color-black);
  font-family: "Montserrat", "Helvetica Neue", sans-serif;
}

#app {
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: 0.3fr 1fr 0.3fr;
}
h1 {
  display: block !important;
  font-size: 0.9em;
  span {
    color: var(--color-primary);
  }
}
p {
  font-size: 1.1em;
  // line-height: 40px;
  // margin-bottom: 40px;
}

header {
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  position: fixed;
  width: 100%;
  z-index: 1;
  background: #fff;
  // border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%), 0 3px 1px -2px rgb(0 0 0 / 5%),
    0 1px 5px 0 rgb(0 0 0 / 5%);
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-row-start: 2;
    grid-column: 2 / 2;
  }
}

main {
  grid-row-start: 2;
  grid-column: 2 / 2;
  // margin-top: 25px;
}

@media (max-width: 1000px) {
  main {
    margin-top: 0;
  }
}

// BTN

.btn {
  border: 0px;
  border-radius: var(--default-border-radius);
  cursor: pointer;
  font-size: 0.7em;
  font-weight: 500;
  padding: 13px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: var(--default-transition);
  i {
    font-size: 0.9em !important;
  }
}
@media (max-width: 800px) {
  .btn {
    display: block;
    padding: 2px;
    width: 100%;
    // font-size: 0.6em;
  }
}
.btn-primary {
  background: var(--color-primary);
  border: 2px solid var(--color-primary);
  color: #fff !important;
  &:hover {
    // background: var(--color-primary);
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
}

// CARD

.card {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%), 0 3px 1px -2px rgb(0 0 0 / 5%),
    0 1px 5px 0 rgb(0 0 0 / 5%);
  padding: 50px 25px;
}

@media (max-width: 1000px) {
  .card {
    padding: 15px 25px;
  }
}

// HOVER

.hover {
  // display: inline-block;
  position: relative;
  color: var(--color-primary);
}

.hover:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--color-primary);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

// HOVER

@media (max-width: 1000px) {
  #app {
    grid-template-rows: 0 auto;
    grid-template-columns: 1fr;
  }
  main {
    grid-column: 1 / -1;
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
@media (max-width: 1000px) {
  .show-d {
    display: none !important;
  }
  .show-m {
    display: grid;
  }
}
/* MEDIA QUERIES END  */
</style>