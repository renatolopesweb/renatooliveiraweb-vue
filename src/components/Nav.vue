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
        <router-link to="/links"
          ><i class="fas fa-external-link-alt"></i>Links</router-link
        >
      </li>
      <li @click="toTop()">
        <router-link to="/contato"
          ><i class="fas fa-paper-plane"></i>Contato</router-link
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
  color: var(--color-black);
  &:hover {
    cursor: auto;
  }
}
@media (max-width: 1100px) {
  .link_active {
    background: none;
    color: var(--color-black);
  }
}

nav {
  text-align: center;
  text-transform: uppercase;
  ul {
    position: fixed;
  }
  li {
    padding: 30px 0;
    width: 250px;
    i {
      font-size: 3em;
      padding-bottom: 10px;
      width: 100%;
    }
    a {
      color: var(--color-primary);
      transition: none;
      &:hover{
        color: var(--color-black);
      }
    }
  }
}

@media(max-width: 1100px){
  ul{
    display: flex;
    background: #fff;
    box-shadow: 0px 10px 10px 5px #ccc;
    bottom: 0;
    width: 100%;
  li{
    font-size: 0.8em;
    font-weight: 500;
    padding: 15px 0;
    i{
      font-size: 1.3em;
    }
  }
  }
}
</style>