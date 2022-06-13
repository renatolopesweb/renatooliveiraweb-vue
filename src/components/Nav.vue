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
          ><i class="fas fa-link"></i>Links</router-link
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
  color: var(--color-primary);
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
    font-size: 1em;
    margin-top: 50px;
    width: 300px;
    &:hover{
      transform: scale(1.1);
    }
    i {
      font-size: 3.4em;
      padding-bottom: 10px;
      width: 100%;
    }
    a {
      color: rgba($color: #000, $alpha: 0.3);
      &:hover{
        color: var(--color-primary);
        text-decoration: none;
      }
    }
  }
}

@media(max-width: 1100px){
  ul{
    display: flex;
    justify-content: space-between;
    background: #fff;
    // box-shadow: var(--df-box-shadow);
    border-top: 1px solid rgba($color: #ccc, $alpha: 0.7);
    bottom: 0;
    width: 100%;
    z-index: 5;
  li{
    font-size: 0.8em;
    font-weight: 500;
    margin: 0;
    padding: 15px 0;
    &:hover{
      transform: scale(1);
    }
    i{
      font-size: 1.3em;
    }
  }
  }
}
</style>