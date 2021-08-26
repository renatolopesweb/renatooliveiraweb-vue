<template>
  <main id="app">
    <section>
      <transition name="fade-view" mode="out-in">
        <router-view />
      </transition>
    </section>
    <aside>
      <Nav />
    </aside>
  </main>
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
$color-light: rgba(0,0,0,0.87);
$color-primary: #512da8;
$t-def: 0.2s;

/* BOOT START */
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  scroll-behavior: smooth;
  animation: fadeIn 0.2s ease-out;
  transition: $t-def;
}

html,
body {
  background: #fafafa;
  color: $color-light;
  font-family: "Roboto Condensed";
  transition: 0.2s;
}

// ::-webkit-scrollbar {
//     width: 17px;
// }
// ::-webkit-scrollbar-thumb {
//     background: #c0c0c0;
// }
// ::-webkit-scrollbar-track {
//     background: #f1f1f1;
// }

h2 {
  font-size: 1.2em;
  font-weight: normal;
  margin-bottom: 10px;
}
p {
  font-weight: 400;
  line-height: 25px;
}
a {
  &:hover {
    text-decoration: none;
  }
}
article {
  margin: 25px;
  // li {
  //   font-size: 1.3em;
  //   line-height: 30px;
  //   margin-bottom: 10px;
  // }
}
@media (max-width: 1024px) {
  article {
    margin: 0px;
  }
}
#app {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
section {
  grid-column: 1 / 6;
}
aside {
  grid-column: 6 / 7;
}

.btn {
  border: 0px;
  border-radius: 3px;
  line-height: 40px;
  cursor: pointer;
  font-size: 0.6em;
  margin-right: 10px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: $t-def;
  i {
    font-size: 0.9em;
  }
  &:hover {
    text-decoration: none;
  }
}
.btn-primary {
  // background: #fff;
  border: 1px solid #111;
  color: #111;
  &:hover {
    background: #111;
    color: #fff;
  }
}
.btn-light {
  background: #fff;
  border: 1px solid $color-light;
  color: $color-light;
  &:hover {
    background: $color-light;
    color: #fff;
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
@media (max-width: 1024px) {
  .show-d {
    display: none !important;
  }
  .show-m {
    display: grid;
  }
  section {
    grid-column: 1 / -1;
    padding-bottom: 35px;
  }
}
/* MEDIA QUERIES END  */
</style>