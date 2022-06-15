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
  background: #fafafa;
  background: #333;
  background: #f1f1f1;
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
  font-size: 3.2em;
  font-weight: 900;
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
  line-height: 30px;
}
li {
  font-size: 1.1em;
  margin-top: 15px;
  a {
    color: var(--color-primary);
    width: 100%;
    &:hover {
      text-decoration: underline;
    }
  }
}
a {
    color: var(--color-primary);
    &:hover {
      text-decoration: underline;
    }
}
#app {
  display: grid;
  grid-template-columns: 300px auto;
  // grid-template-areas: "aside main";
}

@media (max-width: 1100px) {
  #app {
    grid-template-columns: 1fr;
  }
}

aside {
  background: #fff;
  // box-shadow: var(--df-box-shadow);
  height: 100vh;
  min-height: 100%;
  border-right: 1px solid rgba($color: #ccc, $alpha: 0.7);
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
    padding: 25px 25px 75px 25px;
  }
}

/* UI COMPONENT */

.btn-content {
  display: flex;
  margin-top: 30px;
  padding-bottom: 35px;
}
.btn {
  background-color: var(--color-primary);
  border: 0;
  border-radius: var(--df-border-radius);
  color: #fff;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: 500;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    background: #092e5c;
    text-decoration: none;
  }
  i {
    margin-right: 5px;
  }
}
@media (max-width: 400px) {
  .btn-content {
    flex-direction: column;
    margin-bottom: 50px;
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