<template>
  <nav>
    <ul>
      <li @click="toTop()">
        <router-link to="/"><i class="fas fa-house-user"></i>Home</router-link>
      </li>
      <li @click="toTop()">
        <router-link to="/skills"
          ><i class="fas fa-chess-knight"></i>Skills</router-link
        >
      </li>
      <li @click="toTop()">
        <router-link to="/contact"
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
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.link_active {
  color: rgba($color: #999, $alpha: 0.7);
  &:hover {
    cursor: auto;
  }
}

nav {
  text-align: center;
  text-transform: uppercase;
  ul {
    position: fixed;
  }
  li {
    margin-top: 50px;
    width: 225px;
    i {
      font-size: 3.4em;
      padding-bottom: 10px;
      width: 100%;
    }
    a {
      color: var(--color-primary);
      transition: none;
      &:hover{
        color: rgba($color: #999, $alpha: 0.7);
      }
    }
  }
}

@media(max-width: 1100px){
  ul{
    display: flex;
    justify-content: space-between;
    background: #fff;
    box-shadow: var(--df-box-shadow);
    bottom: 0;
    width: 100%;
    z-index: 1;
  li{
    font-size: 0.8em;
    font-weight: 500;
    margin: 0;
    padding: 15px 0;
    i{
      font-size: 1.3em;
    }
  }
  }
}
</style>