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
$color-light: rgba(0, 0, 0, 0.87);
$color-primary: #4a148c;
$radius-def: 2px;
$border-def: rgba(
  $color: #ccc,
  $alpha: 0.5,
);
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
  font-family: "Roboto", sans-serif;
  overflow-y: scroll;
}
@media (max-width: 1024px) {
  body {
    overflow-y: auto;
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

h2 {
  font-size: 1.2em;
  font-weight: normal;
  // margin-bottom: 10px;
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
.grid-default {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  margin: 25px;
  article {
    border: 1px solid $border-def;
    border-radius: $radius-def;
    background: #fff;
    cursor: pointer;
    margin: 0px;
    transition: $t-def;
    &:hover {
      transform: translateY(-5px) scale(1.01);
    }
    &:active {
      transform: translateY(5px);
    }
    div {
      padding: 1rem;
      h2 {
        color: #262626;
        // margin-bottom: 5px;
        font-size: 1em;
      }
      p {
        color: rgba($color: $color-primary, $alpha: 0.6);
        font-weight: 400;
        line-height: 25px;
      }
      a {
        border-top: 1px solid $border-def;
        color: blue;
        display: block;
        font-weight: 400;
        text-transform: uppercase;
        width: 100%;
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
  .grid-default {
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

.btn {
  border: 0px;
  border-radius: $radius-def;
  line-height: 50px;
  cursor: pointer;
  font-size: 0.8em;
  // margin-right: 10px;
  // padding: 10px 15px;
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
  border: 1px solid $color-primary;
  background: $color-primary;
  color: #fff;
  &:hover {
    background: rgba($color: $color-primary, $alpha: 0.9);
    border: 1px solid $color-primary;
  }
}
.btn-secondary {
  background: #fff;
  border: 1px solid $color-primary;
  color: $color-primary;
  &:hover {
    background: rgba($color: $color-primary, $alpha: 0.1);
    border: 1px solid rgba($color: $color-primary, $alpha: 0.1);
  }
}

// MODAL
.modal {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  // align-items: center;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  background: #fafafa;
  position: fixed;
  z-index: 1;
  .modal-block {
    grid-column: 3 / 6;
    padding-top: 20px;
    margin: 10px 0;
    img {
      width: 100%;
      border-radius: $radius-def;
    }
    .modal-info {
      padding: 15px 0;
      h2 {
        font-size: 1.4em;
        margin-bottom: 10px;
      }
      p {
        color: #333;
        font-weight: 400;
        line-height: 25px;
      }
    }
  }
  .modal-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}

@media (max-width: 1024px) {
  .modal {
    grid-template-columns: 1fr;
    .modal-block {
      padding: 0;
      margin: 0;
      .modal-info {
        padding: 15px;
      }
      .modal-buttons{
        grid-template-columns: 1fr;
        margin: 0 15px;
      }
    }
  }
}
// MODAL

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