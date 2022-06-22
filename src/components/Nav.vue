<template>
  <ul>
    <li @click="toTop()">
      <router-link to="/">
        <i class="fas fa-running"></i>Home
      </router-link>
    </li>
    <li @click="toTop()">
      <router-link to="/links">
        <i class="fas fa-link"></i>Links
      </router-link>
    </li>
    <li @click="toTop()">
      <router-link to="/contato">
        <i class="fas fa-share-alt"></i>Contato
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.link_active {
  color: rgba($color: #fff, $alpha: 0.1);
  &:hover {
    cursor: auto;
  }
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  bottom: 0;
  height: 150px;
  position: fixed;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  z-index: 1;
}
li {
  margin-left: 10px;
  margin-right: 10px;
  &:hover {
    transform: scale(1.2);
  }
  i {
    padding-bottom: 5px;
    font-size: 3em;
    width: 100%;
  }
  a {
    color: rgba($color: #fff, $alpha: 0.8);
    font-weight: normal;
    font-size: 1em;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
}
@media (max-width: 1100px) {
  ul {
    height: 75px;
    li {
      font-size: 0.8em;
      &:hover {
        transform: scale(1);
      }
      i {
        font-size: 1.3em;
      }
    }
  }
}
@media (max-width: 500px) {
  ul {
    justify-content: space-around;
  }
}
</style>