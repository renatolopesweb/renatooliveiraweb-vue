<template>
  <nav>
    <ul>
      <li @click="toTop()">
        <router-link to="/" class="nav"
          ><i class="fas fa-home"></i>Home</router-link
        >
      </li>
      <li @click="toTop()">
        <router-link to="/sobre" class="nav"
          ><i class="fas fa-running"></i>Sobre</router-link
        >
      </li>
      <li @click="toTop()">
        <router-link to="/projetos" class="nav"
          ><i class="fas fa-gamepad"></i>Projetos</router-link
        >
      </li>
      <li @click="toTop()">
        <router-link to="/contato" class="nav"
          ><i class="fas fa-share-alt"></i>Contato</router-link
        >
      </li>
    </ul>
  </nav>
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

window.addEventListener("scroll", () => {
  const header = document.querySelector("nav");
  header.classList.toggle("header-mini", window.scrollY > 75);
});
</script>

<style lang="scss" scoped>
// $bg-light: rgba($color: #f0f0f0, $alpha: 0.5,);
$background-hover: rgba(
  $color: #000,
  $alpha: 0.5,
);
$border-def: #ccc;
$color-primary: #141e55;
$t-def: 0.2s;

.link_active {
  background: $background-hover;
}

@media (max-width: 600px) {
  .link_active {
    background: none;
    opacity: 0.3;
  }
}

nav {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 150px;
}

ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 2 / 7;
}
li {
  text-align: center;
  a {
    display: grid;
    align-items: center;
    color: #fff;
    height: 100%;
  }
  i {
    font-size: 3em;
    width: 100%;
  }
  &:hover {
    background: $background-hover;
  }
}

.header-mini {
  height: 80px;
}

@media (max-width: 600px) {
  nav {
    background: $color-primary;
    border: 0;
    bottom: 0px;
    height: 80px;
    position: absolute;
    position: fixed;
    left: 0px;
    width: 100%;
    z-index: 2;
    ul {
      grid-column: 1 / -1;
      align-items: center;
      i {
        font-size: 1.9em;
        margin-bottom: 3px;
      }

      a {
        cursor: pointer;
        display: block;
        font-size: 0.6em;
        padding: 25px 0;
        text-transform: uppercase;
        &:hover {
          background: transparent;
        }
      }
    }
  }
}
</style>