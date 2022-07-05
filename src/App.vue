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
    Nav,
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
/* VARS */
:root {
  // COLORS
  --color-primary: #171413;
  --color-secondary: #F8B430;
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
  background: var(--color-secondary);
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
h1 {
  color: var(--color-primary);
  font-family: "Poiret One", cursive;
  font-size: 2.8em;
  font-weight: lighter;
  margin-bottom: 15px;
  text-transform: uppercase;
}
p {
  font-size: 1.1em;
  font-weight: 500;
  line-height: 30px;
}
a {
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: underline;
}
// TAGS
// TEMPLATE
main {
  max-width: 800px;
  margin: 20px auto 0 auto;
  padding: 0 20px;
  text-align: center;
  li {
    margin-bottom: 25px;
    a {
      font-size: 1.1em;
      font-weight: 700;
      line-height: 30px;
    }
  }
}
@media (max-width: 500px) {
  h1 {
    font-weight: 700;
  }
}
// 4k
/* MEDIA QUERIES START */
@media (min-width: 1537px) {
  p {
    font-size: 1vw;
  }
}
/* MEDIA QUERIES END  */
</style>