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
  --color-primary: #69452b;
  --color-secondary: #E57545;
  // PROPERTIES
  --df-transition: 0.1s;
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
  background: #FCFCFC;
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
h1{
  font-weight: 300;
  text-transform: uppercase;
}

h1 {
  color: var(--color-primary);
  font-size: 3.2em;
  font-weight: 300;
  margin-bottom: 15px;
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
    margin-bottom: 25px;
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