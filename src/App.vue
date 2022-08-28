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
  --color-primary: #0d0d0d;
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
  color: var(--color-primary);
  overflow-y: scroll;
  scroll-behavior: smooth;
}
html,
body {
  color: var(--color-primary);
  font-family: "Montserrat", "Helvetica Neue", sans-serif;
}
// TAGS
a , summary{
  color: var(--color-secondary);
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: underline;
}
// TAGS
h1,
h2 {
  text-transform: uppercase;
}
// TEMPLATE
section{
  padding: var(--mar-pad-dft);
}
main {
  p {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 35px;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 35px;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 900;
    margin: 25px 0;
  }
  li {
    margin-bottom: 25px;
    i {
      margin-right: 15px;
    }
  }
}

// BUTTON

.btn {
  background-color: var(--color-secondary);
  border-radius: 5px;
  border: 1px solid var(--color-secondary);
  color: #fff;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: --df-transition;
  i {
    font-size: 0.9rem!important;
  }
  &:hover {
    background-color: var(--color-bg);
    color: var(--color-secondary);
  }
}
// BUTTON

// CLASS

.card{
  background: #fff;
  border: 1px solid rgba($color: #ccc, $alpha: 0.6);
  img{
    width: 100%;
  }
}
@media (max-width: 1024px) {
  .card {
    margin: 20px;
  }
}

/* MEDIA QUERIES START */
@media (max-width: 900px) {
  a, summary {
    font-size: 1rem;
  }
  details p{
    font-size: 0.9rem!important;
  }
  main {
    // padding: 20px;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }
    p {
      font-size: 1rem;
      line-height: 28px;
    }
  }
  section{
    padding: 20px;
  }
}
/* MEDIA QUERIES END  */
</style>