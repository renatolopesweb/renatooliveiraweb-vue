<template>
  <main>
    <nav>
      <ul>
        <li @click="toTop()">
          <router-link to="/"
            ><i class="fas fa-house-user"></i>Sobre</router-link
          >
        </li>
        <li @click="toTop()">
          <router-link to="/frontend"
            ><i class="fas fa-code"></i>Frontend</router-link
          >
        </li>
        <li @click="toTop()">
          <router-link to="/design"
            ><i class="fas fa-palette"></i>Design</router-link
          >
        </li>
      </ul>
    </nav>
  </main>
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
</script>

<style lang="scss" scoped>
$bg-light: rgba($color: #f0f0f0, $alpha: 0.5,);
$border-def: rgba($color: #ccc, $alpha: 0.5);
$t-def: 0.2s;

.link_active {
  background: $bg-light;
  // border-left: 5px solid #000;
}

@media (max-width: 1024px) {
  .link_active {
    background: transparent;
    font-weight: normal;
    opacity: 0.4;
    // border-left: 0px !important;
  }
}

li {
  text-transform: uppercase;
}

nav {
  background: #fff;
  border: 1px solid $border-def;
  height: 100vh;
  min-height: 100%;
  // box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);
  position: fixed;
  width: 100%;
  li {
    i {
      width: 50px;
      text-align: center;
    }
    a {
      display: block;
      border-left: 5px solid transparent;
      color: rgba(0,0,0,0.87);
      font-size: 0.9em;
      padding: 20px 5px;
      transition: $t-def;
      &:hover {
        background: $bg-light;
        // border-left: 5px solid #000;
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 1024px) {
  nav {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      background: #fff;
      bottom: 0px;
      border-top: 1px solid $border-def;
      position: absolute;
      position: fixed;
      left: 0px;
      text-align: center;
      width: 100%;
      z-index: 1;

      i {
        font-size: 1.5em;
        margin-bottom: 3px;
        width: 100%;
      }

      a {
        border-left: 0px;
        cursor: pointer;
        display: block;
        font-size: 0.6em;
        font-weight: bolder;
        outline: none;
        padding: 14px;
        text-transform: uppercase;
        transition: $t-def;
        &:hover {
        background: #fff;
        text-decoration: none;
        }
      }
    }
  }
}

</style>