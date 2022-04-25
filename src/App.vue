<template>
  <div id="app">
    <aside>
      <Nav />
    </aside>
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap");
/* VARS */
:root {
  // COLORS
  --color-primary: #5d5aa7;
  --color-primary: #125db8;
  --color-secondary: #ff5f04;
  --color-third: rgba($color: #999, $alpha: 0.8);
  --color-black: #151526;
  --color-black: #001132;
  // PROPERTIES
  // --box-shadow: 0px 0px 8px 0px #cccccc;
  --df-border-radius: 2px;
  --df-transition: 0.1s;
  --df-box-shadow: -1 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  --df-box-shadow: 15px 0px 10px rgba($color: #000, $alpha: 0.6);
  --df-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
  --df-padding: 25px 25px 0px 50px;
}

* {
  box-sizing: border-box;
  font-family: "Montserrat", "Helvetica Neue", sans-serif;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  transition: var(--df-transition);
}
html {
  background: #333;
  background: #fafafa;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
html,
body {
  color: var(--color-black);
  font-family: "Montserrat", "Helvetica Neue", sans-serif;
  font-weight: 400;
}

// TAGS

h1,
h2,
h3 {
  text-transform: uppercase;
}

h1 {
  color: var(--color-primary);
  font-size: 4.2em;
  font-weight: 900;
  margin-bottom: 15px;
}

@media (max-width: 1100px) {
  h1 {
    font-size: 3em;
  }
}
@media (max-width: 280px) {
  h1 {
    font-size: 2em;
  }
}

span {
  color: var(--color-primary);
  font-weight: bolder;
}

#app {
  display: grid;
  grid-template-columns: 225px auto;
  // grid-template-areas: "aside main";
}

@media (max-width: 1100px) {
  #app {
    grid-template-columns: 1fr;
  }
}

aside {
  background: #fff;
  box-shadow: var(--df-box-shadow);
  height: 100vh;
  min-height: 100%;
}
section {
  padding: var(--df-padding);
}
@media (max-width: 1100px) {
  aside {
    height: 0;
    min-height: 0;
  }
  section {
    padding: 25px;
  }
}

/* UI COMPONENT */

// CARD
.card {
  box-shadow: var(--df-box-shadow);
  border-radius: var(--df-border-radius);
  img {
    border-radius: var(--df-border-radius);
  }
  div {
    padding: 25px;
  }
}

/* MEDIA QUERIES START */
.show-d {
  display: grid;
}
.show-m {
  display: none;
}
@media (max-width: 1100px) {
  .show-d {
    display: none !important;
  }
  .show-m {
    display: inline;
  }
}
/* MEDIA QUERIES END  */
</style>