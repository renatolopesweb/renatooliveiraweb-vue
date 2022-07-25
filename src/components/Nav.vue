<template>
  <nav>
    <ul>
      <li @click="toTop()">
        <router-link to="/">Home</router-link>
      </li>
      <li @click="toTop()">
        <router-link to="/sobre">Sobre</router-link>
      </li>
      <li @click="toTop()">
        <router-link to="/links">Links</router-link>
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
.link_active::after {
  background: var(--color-secondary);
  content: "";
  height: 7px;
  left: 0;
  position: absolute;
  top: 0;
  transition: 3s;
  width: 100%;
}

nav {
  position: fixed;
  bottom: 0;
  background: #111;
  width: 100%;
  ul {
    display: flex;
    align-items: center;
    gap: 25px;
    height: 100px;
    padding-left: var(--mar-pad-dft);
    i {
      width: 100%;
    }
    li {
      display: grid;
      align-content: center;
      height: 100%;
      position: relative;
      text-align: center;
      a {
        color: rgba($color: #fff, $alpha: 0.9);
        font-size: 1.1em;
        font-weight: 900;
        padding: var(--mar-pad-dft);
        text-decoration: none;
        text-transform: uppercase;
      }
      &:hover {
        ::after {
          content: "";
          height: 7px;
          position: absolute;
          left: 0;
          top: 0;
          background: var(--color-secondary);
          animation-name: navUnderline;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
        }
      }
    }
  }
}
@keyframes navUnderline {
  0% {
    opacity: 0;
    width: 0%;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
}

@media (max-width: 600px) {
  nav {
    ul {
      height: 50px;
      justify-content: space-around;
      padding-left: 0;
      li{
        width: 100%;
        a{
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0;
        }
      }
    }
  }
}
</style>