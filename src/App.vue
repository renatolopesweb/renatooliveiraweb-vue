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
$radius-def: 2px;
$border-def: rgba($color: #ccc, $alpha: 0.5);
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
}
@media (max-width: 1024px) {
  article {
    margin: 0px;
  }
}

/* GRIDS LAB */
.grid-lab {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  margin: 25px;
  article {
    border: 1px solid $border-def;
    border-radius: $radius-def;
    background: #fff;
    margin: 0px;
    transition: $t-def;
    &:hover {
      cursor: pointer;
      transform: translateY(-5px);
    }
    &:active {
      transform: translateY(5px);
    }
    div {
      padding: 1rem 1.5rem;
      h2 {
        color: #262626;
        // font-size: 1.2em;
      }
      p {
        color: #a6a6a6;
        font-weight: 400;
        line-height: 25px;
      }
    }
    img {
      width: 100%;
      border-radius: $radius-def $radius-def 0 0;
      border-bottom: 1px solid $border-def;
    }
  }
}

/* MEDIA QUERIES START */
@media (max-width: 1024px) {
  .grid-lab {
    grid-template-columns: 1fr;
    grid-gap: 15px;
    margin: 0px;
    article {
      margin-bottom: 2rem;
      border-radius: 0px;
      border-left: 0px;
      border-right: 0px;
      img {
      border-radius: 0px;
    }
    }
  }
}
/* MEDIA QUERIES END  */
/* GRIDS LAB */

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