<template>
  <nav>
    <ul>
      <li @click="toTop()">
        <router-link to="/">Home</router-link>
      </li>
      <li @click="toTop()">
        <router-link to="/links">Links</router-link>
      </li>
      <li @click="toTop()">
        <router-link to="/curriculo">Currículo</router-link>
      </li>
      <li @click="toTop()">
        <router-link to="/contato">Contato</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.querySelector("input").checked = false;
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  background: var(--color-bg);
  bottom: 100px;
  padding: 15px 0;
  position: fixed;
  text-align: center;
  width: 100%;
  li{
      display: inline;
      margin: 0 10px;
      a{
          font-size: 0.9em;
      }
  }
}
@media(max-width: 1000px){
    nav{
        display: none;
    }
}
</style>