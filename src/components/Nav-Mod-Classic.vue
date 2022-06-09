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
        <router-link to="/links"><i class="fas fa-link"></i>Links</router-link>
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
  // color: #ccc;
  &:hover {
    cursor: auto;
  }
}

nav {
  // text-align: center;
  text-transform: uppercase;
  ul {
    position: fixed;
  }
  li {
    display: grid;
    align-content: center;
    border-bottom: 1px solid rgba($color: #125db8, $alpha: 0.1);
    // height: 150px;
    width: 300px;
    background: #fff;
    &:hover{
      background-color: rgba($color: #125db8, $alpha: 0.1);
    }
    &:active{
      background-color: rgba($color: #125db8, $alpha: 0.2);
    }
    a {
      color: var(--color-primary);
      font-size: 1.2em;
      padding: 50px 0;
    }
    i {
      font-size: 1.2em;
      padding: 0 15px;
    }
  }
}


@media (max-width: 1100px) {
  ul {
    display: flex;
    justify-content: space-between;
    background: #fff;
    box-shadow: var(--df-box-shadow);
    bottom: 0;
    width: 100%;
    z-index: 1;
    li {
      font-size: 0.6em;
      font-weight: 500;
      margin: 0;
      padding: 10px 0;
      text-align: center;
      a{
        padding: 0;
      }
      i {
        font-size: 1em;
        width: 100%;
      }
    }
  }
}
</style>