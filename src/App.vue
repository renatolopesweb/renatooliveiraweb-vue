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
/* VARS */
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
  background: #333;
  background: rgba($color: #ccc, $alpha: 0.2);
}
html,
body {
  color: var(--color-black);
  font-family: "Montserrat", "Helvetica Neue", sans-serif;
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
}

@media (max-width: 1100px) {
  h1 {
    font-size: 3em;
  }
}

article {
  li {
    font-size: 1.2em;
    margin-top: 20px;
    a {
      color: var(--color-black);
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

#app {
  display: grid;
  grid-template-columns: 250px auto;
  // grid-template-areas: "aside main";
}

@media (max-width: 1100px) {
  #app {
    grid-template-columns: 1fr;
  }
}

aside {
  // grid-area: aside;
  background: #fff;
  box-shadow: 0px 0px 5px 1px #ccc;
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
  // grid-area: main;
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

// CARD

.card {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%), 0 3px 1px -2px rgb(0 0 0 / 5%),
    0 1px 5px 0 rgb(0 0 0 / 5%);
  padding: 50px 25px;
}

@media (max-width: 1100px) {
  .card {
    padding: 15px 25px;
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