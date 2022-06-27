<template>
  <div id="app">
    <main>
      <transition name="fade-view" mode="out-in">
        <router-view />
      </transition>
    </main>
    <Nav />
    <NavFooter />
    <footer></footer>
  </div>
</template>

<script>
import Nav from "../src/components/Nav";
import NavFooter from "../src/components/NavFooter";
export default {
  components: {
    Nav,
    NavFooter
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
/* VARS */
:root {
  // COLORS
  --color-primary: #3e2723;
  --color-secondary: #e65100;
  --color-bg: #f8f5f5;
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
  background: var(--color-bg);
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
  color: var(--color-secondary);
  font-size: 1.1em;
  font-weight: 500;
  text-decoration: underline;
  &:active {
    color: blue;
  }
}
// TAGS
// TEMPLATE
main {
  max-width: 1310px;
  margin: 20px auto 0 auto;
  padding: 0 25px;
  text-align: center;
  li {
    margin-bottom: 25px;
    a {
      font-size: 1.1em;
      font-weight: 500;
      line-height: 30px;
    }
  }
}
footer {
  background-image: url("./assets/images/header-bg.jpg");
  background-repeat: no-repeat;
  bottom: 0;
  height: 100px;
  position: fixed;
  width: 100%;
}
@media (max-width: 1000px) {
  footer {
    height: 50px;
    background-size: cover;
  }
}
@media (max-width: 500px) {
  h1 {
    font-weight: 700;
    margin-top: 95px;
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