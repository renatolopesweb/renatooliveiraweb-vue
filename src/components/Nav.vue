<template>
  <nav>
    <ul>
      <li @click="toTop()">
        <router-link to="/"><i class="fas fa-home"></i>Home</router-link>
      </li>
      <li @click="toTop()">
        <router-link to="/sobre"
          ><i class="fas fa-running"></i>Sobre</router-link
        >
      </li>
      <li @click="toTop()">
        <router-link to="/projetos"
          ><i class="fas fa-gamepad"></i>Projetos</router-link
        >
      </li>
      <!-- <li @click="toTop()">
        <router-link to="/contato"
          ><i class="fas fa-share-alt"></i>Contato</router-link
        >
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};

window.addEventListener("scroll", () => {
  const header = document.querySelector("nav");
  header.classList.toggle("header-mini", window.scrollY > 25);
});
</script>

<style lang="scss" scoped>
@import "../assets/css/_variables.scss";
.link_active {
  color: $color-primary;
}
@media (max-width: 700px) {
  .link_active {
    // background: none;
    // color: rgba($color: #999, $alpha: 0.5)!important;
    opacity: 0.5;
  }
}

nav {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: #fff;
  // box-shadow: $box-shadow;
  border-bottom: $border-gray;
  // border-bottom: 1px solid rgba($color: #ccc, $alpha: 0.5);
  height: 125px;
  // box-shadow: $box-shadow;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column: 4 / 5;
  grid-gap: 100px;
}
li {
  text-align: center;
  text-transform: uppercase;
  a {
    display: grid;
    align-items: center;
    // align-content: center;
    color: rgba($color: #999, $alpha: 0.4);
    font-weight: 500;
    font-size: 0.8em;
    height: 100%;
    transition: 0s !important;
    &:hover {
      color: $color-primary;
    }
  }
  i {
    font-size: 2.6em;
    width: 100%;
  }

  @media (max-width: 700px) {
    &:hover {
      background: none;
    }
  }
}

.header-mini {
  height: 70px;
}

@media (max-width: 700px) {
  nav {
    display: grid;
    align-content: center;
    bottom: 0px;
    border-top: $border-gray;
    // box-shadow: $box-shadow;
    height: 70px;
    left: 0px;
    position: absolute;
    position: fixed;
    width: 100%;
    z-index: 2;
    ul {
      grid-column: 1 / -1;
      grid-gap: 0;
      i {
        font-size: 2.6em;
        margin-bottom: 5px;
      }

      a {
        color: $color-primary;
        cursor: pointer;
        // display: block;
        font-size: 0.6em;
        // padding: 25px 0;
        text-transform: uppercase;
        &:hover {
          background: transparent;
        }
      }
    }
  }
}
</style>