<template>
  <main>
    <nav>
      <ul>
        <li @click="toTop()">
          <router-link to="/"
            ><i class="fas fa-house-user"></i>Sobre</router-link
          >
        </li>
        <li @click="toTop()">
          <router-link to="/frontend"
            ><i class="fas fa-code"></i>Frontend</router-link
          >
        </li>
        <li @click="toTop()">
          <router-link to="/design"
            ><i class="fab fa-sketch"></i>Design</router-link
          >
        </li>
      </ul>
    </nav>
  </main>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$border-def: rgba(
  $color: #ccc,
  $alpha: 0.5,
);

$box-shadow-def: 0 1px 7px 0 rgb(0 0 0 / 10%), 0 1px 1px 0 rgb(0 0 0 / 14%),
  0 2px 1px -1px rgb(0 0 0 / 0%);

$bg-white: #fff;
$color-primary: #4a148c;
$t-def: 0.2s;

$nav-hover: rgba(
  $color: #ccc,
  $alpha: 0.2,
);

.link_active {
  background: $nav-hover;
}

@media (max-width: 1024px) {
  .link_active {
    background: $bg-white !important;
    // opacity: 0.4;
  }
}

nav {
  // background: url("https://lorempixel.com/600/900/abstract/");
  // background-position: center;
  background-color: #fff;
  box-shadow: $box-shadow-def;
  // background-size: cover;
  // box-shadow: $box-shadow-def;
  height: 100vh;
  min-height: 100%;
  position: fixed;
  width: 100%;
  li {
    // background: rgba($color: #000, $alpha: 0.6);
    border-bottom: 1px solid rgba($color: #ccc, $alpha: 0.5);
    text-transform: uppercase;
    i {
      font-size: 1.2em;
      text-align: center;
      width: 50px;
    }
    a {
      display: block;
      border-left: 5px solid transparent;
      color: rgba($color: #000, $alpha: 0.9);
      font-size: 0.9em;
      padding: 40px 5px;
      transition: $t-def;
      &:hover {
        background: $nav-hover;
        // border-left: 5px solid #000;
        text-decoration: none;
      }
    }
    @media (min-width: 1800px) {
      a {
        font-size: 1.4em;
        padding: 50px 20px;
      }
    }
  }
}

@media (max-width: 1024px) {
  nav {
    background: transparent !important;
    box-shadow: 0px 0px 0px;
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      background: $bg-white;
      bottom: 0px;
      box-shadow: $box-shadow-def;
      position: absolute;
      position: fixed;
      left: 0px;
      text-align: center;
      width: 100%;
      z-index: 1;
      li {
        box-shadow: 0px 0px 0px;
        background: #fff;
      }

      i {
        font-size: 1.5em;
        margin-bottom: 3px;
        width: 100%;
      }

      a {
        border-left: 0px;
        color: #222;
        cursor: pointer;
        display: block;
        font-size: 0.6em;
        outline: none;
        padding: 10px;
        text-transform: uppercase;
        transition: $t-def;
        &:hover {
          background: none;
          text-decoration: none;
        }
      }
    }
  }
}
</style>