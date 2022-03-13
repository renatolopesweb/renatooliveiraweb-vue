<template>
  <nav>
    <ul>
      <li @click="toTop()">
        <router-link to="/"><i class="fas fa-house-user"></i>Home</router-link>
      </li>
      <li @click="toTop()">
        <router-link to="/sobre"
          ><i class="fas fa-running"></i>Sobre</router-link
        >
      </li>
      <li @click="toTop()">
        <router-link to="/links"
          ><i class="fas fa-external-link-alt"></i>Links</router-link
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
.link_active {
  color: var(--color-primary);
  opacity: 0.4;
  &:hover {
    cursor: auto;
  }
}
@media (max-width: 1100px) {
  .link_active {
    background: none;
    color: var(--color-black);
    opacity: 0.4;
  }
}

nav {
  display: grid;
  background: #fff;
  height: 100px;
}

ul {
  display: flex;
}
li {
  text-transform: uppercase;
  a {
    display: grid;
    align-items: center;
    color: var(--color-primary);
    font-size: 1em;
    font-weight: 700;
    height: 100%;
    padding: 0 30px;
    &:hover {
      background: rgba($color: #f0f0f0, $alpha: 0.7);
    }
    &:active {
      background: #f0f0f0;
      color: var(--color-black);
    }
  }
  i {
    display: none;
    font-size: 2.6em;
    width: 100%;
  }
}

.header-mini {
  height: 50px;
}

@media (max-width: 1100px) {
  nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-content: center;
    bottom: 0px;
    box-shadow: 5px 2px 2px 0 rgb(0 0 0 / 55%), 0 3px 1px -2px rgb(0 0 0 / 55%), 0 10px 15px 0 rgb(0 0 0 / 55%);
    height: 50px;
    left: 0px;
    position: absolute;
    position: fixed;
    text-align: center;
    width: 100%;
    z-index: 2;
    ul {
      grid-column: 2;
      grid-gap: 25px;
      i {
        display: block;
        font-size: 1.8em;
        margin-bottom: 5px;
      }

      a {
        color: var(--color-black);
        cursor: pointer;
        font-size: 0.6em;
        padding: 0 15px;
        text-transform: uppercase;
        &:hover {
          background: transparent;
        }
      }
    }
  }
}
</style>