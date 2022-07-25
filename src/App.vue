<template>
  <div id="app">
    <main>
      <transition name="fade-view" mode="out-in">
        <router-view />
      </transition>
    </main>
    <Nav />
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
/* VARS */
:root {
  // COLORS
  --color-primary: #111;
  --color-secondary: #0062ff;
  --color-bg: #f8f9fa;
  // PROPERTIES
  --df-transition: 0.5s;
  --mar-pad-dft: 50px;
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
  background: var(--color-bg);
  color: #0d0d0d;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
html,
body {
  color: var(--color-primary);
  font-family: "Montserrat", "Helvetica Neue", sans-serif;
}
// TAGS
a {
  color: var(--color-secondary);
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: underline;
}
// TAGS
h1,
h2 {
  text-transform: uppercase;
}
// TEMPLATE
section {
  padding-bottom: 100px;
}
main {
  padding: var(--mar-pad-dft);
  p {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 35px;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 25px;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 900;
    margin: 25px 0;
  }
  li {
    margin-bottom: 15px;
    i {
      margin-right: 15px;
    }
  }
}
/* MEDIA QUERIES START */
@media (max-width: 600px) {
  a {
    font-size: 1rem;
    font-weight: 500;
  }
  main {
    padding: 20px;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
      line-height: 27px;
    }
  }
}
/* MEDIA QUERIES END  */
</style>