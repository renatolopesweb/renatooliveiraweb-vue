<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <i class="fas fa-house-user"></i>Home
        </router-link>
      </li>
      <li>
        <router-link to="/links">
          <i class="fas fa-link"></i>Links
        </router-link>
      </li>
      <li>
        <router-link to="/contato">
          <i class="fas fa-paper-plane"></i>Contato
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toTop() {
      // window.scrollTo({ top: 0, behavior: "smooth" });
      window.scrollTo({ top: 0 });
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 1);
  width: 100%;
  ul {
    display: flex;
    align-items: center;
    gap: 25px;
    height: 100px;
    justify-content: center;
    i {
      width: 100%;
    }
    li {
      text-align: center;
      a {
        color: var(--color-secondary);
        font-size: 1em;
        font-weight: normal;
        text-decoration: none;
        text-transform: uppercase;
      }
      &:hover {
        transform: scale(1.2);
      }
      &:active {
        color: var(--color-secondary);
        transform: scale(1);
      }
    }
  }
}
@media (max-width: 500px) {
  nav {
    ul {
      height: 75px;
      li {
        a {
          font-size: 0.9em;
        }
        &:hover {
          transform: scale(1);
        }
      }
    }
  }
}
</style>