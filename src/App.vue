<template>
  <div id="app">
    <main>
      <transition name="fade-view" mode="out-in">
        <router-view />
      </transition>
    </main>
    <nav>
      <Nav />
    </nav>
  </div>
</template>

<script>
import Nav from "../src/components/Nav";
export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
/* VARS */
:root {
  // COLORS
  --color-primary: #06174f;
  --color-secondary: #F77725;
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
  background: #fafafa;
  background: #333;
  background: #e5e5e5;
  background: #f1f1f1;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
html,
body {
  color: var(--color-primary);
  font-family: "Montserrat", "Helvetica Neue", sans-serif;
  font-weight: 400;
}

// TAGS
h1,
h2,
h3 {
  font-weight: 300;
  text-transform: uppercase;
}

h1 {
  color: var(--color-primary);
  font-size: 3.2em;
  font-weight: 300;
  margin-bottom: 15px;
}
h2 {
  font-size: 1.2em;
  font-weight: 900;
  color: var(--color-black);
}

@media (max-width: 1100px) {
  h1 {
    font-size: 2.5em;
  }
}
@media (max-width: 280px) {
  h1 {
    font-size: 2em;
  }
}
p {
  font-size: 1.1em;
  font-weight: 500;
  line-height: 30px;
}
a {
  color: var(--color-secondary);
  font-weight: bold;
  text-decoration: underline;
}
// TAGS

// TEMPLATE
main {
  max-width: 700px;
  margin: 25px auto;
  padding-bottom: 250px;
  text-align: center;
  li {
    margin-top: 25px;
    a {
      font-size: 1.1em;
      font-weight: bold;
      line-height: 30px;
    }
  }
}
@media (max-width: 1100px) {
  main {
    padding: 0 25px;
  }
}
// TEMPLATE

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