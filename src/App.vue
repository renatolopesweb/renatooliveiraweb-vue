<template>
  <div id="app">
    <Header />
    <section>
      <article>
        <transition name="fade-view" mode="out-in">
          <router-view />
        </transition>
      </article>
      <Nav />
    </section>
  </div>
</template>

<script>
import Header from "../src/components/Header";
import Nav from "../src/components/Nav";
export default {
  components: {
    Header,
    Nav,
  },
};
</script>

<style lang="scss">
/* BOOT START */
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  font-family: "Roboto", sans-serif;
  animation: fadeIn 0.2s ease-out;
}

$color-primary: #630094;
$color-secondary: #37266b;

html,
body {
  background: #FBFAFC;
  // background: #eae0f1;
  // background: rgba(99, 0, 148, 0.1);
  transition: 0.3s;
}
section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-content: center;
  height: 100vh;
  article {
    grid-column-start: 2;
    grid-column-end: 5;
  }
}
.fade-view-enter,
.fade-view-leave-to {
  opacity: 0;
}
.fade-view-enter-active,
.fade-view-leave-active {
  transition: opacity 0.3s ease-in-out;
}
/* BOOT END */
/* BUTTON START */
.btn {
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.7em;
  height: 50px;
  padding: 15px 20px;
  outline: 0;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  i {
    font-size: 1.2em;
    vertical-align: middle;
  }
}
.btn_secondary {
  background: $color-primary;
  color: #fff;
  &:hover {
    background: #37dd6f;
  }
  &:active {
    background: #68ee95;
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
.show-desk {
  display: grid;
}
.show-mobile {
  display: none;
}


@media (max-width: 800px) {
  section {
    grid-template-columns: 1fr;
    article{
      grid-column: 1 / 3;
    }
  }
  .show-desk {
    display: none!important;
  }
  .show-mobile {
    display: grid;
  }
}
/* MEDIA QUERIES END  */
</style>