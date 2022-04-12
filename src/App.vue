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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap');
/* VARS */
:root {
  // COLORS
  --color-primary: #5d5aa7;
  --color-primary: #125db8;
  --color-secondary: #FF5F04;
  --color-black: #262626;
  --color-black: #151526;
  // PROPERTIES
  --box-shadow: 0px 0px 8px 0px #CCCCCC;
  --default-border-radius: 4px;
  --default-transition: 0.1s;
  --default-box-shadow: 15px 0px 10px rgba($color: #000, $alpha: 0.6);
}

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  transition: var(--default-transition);
}
html {
  overflow-y: scroll;
  background: #333;
  background: #fafafa;
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

span {
  color: var(--color-primary);
  text-transform: uppercase;
}


article {

h2 {
  color: var(--color-secondary);
  font-size: 1.8em;
  font-weight: 900;
  margin-bottom: 15px;
}
h3 {
  font-weight: 700;
  margin-bottom: 10px;
}
ul {
  margin-bottom: 50px;
}

  li {
    font-size: 1.2em;
    margin-bottom: 20px;
    a {
      color: var(--color-black);
      transition: 0.3s;
      &:hover {
        padding: 10px;
        background: rgba($color: #ccc, $alpha: 0.5);
        border-radius: var(--default-border-radius);
      }
    }
  }
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
  li{
    line-height: 30px;
  }
}

aside {
  background: #fff;
  box-shadow: var(--box-shadow);
  height: 100vh;
  min-height: 100%;
}
@media (max-width: 1100px) {
  aside {
    height: 0;
    min-height: 0;
  }
}

main {
  padding: 25px 25px 25px 50px;
}

@media (max-width: 1100px) {
  main{
    padding: 25px;
  }
  article {
    padding-bottom: 50px;
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
    display: grid;
  }
}
/* MEDIA QUERIES END  */
</style>