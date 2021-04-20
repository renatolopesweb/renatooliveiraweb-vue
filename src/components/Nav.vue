<template>
  <nav>
    <div class="nav-desk show-desk">
      <ul @click="toTop()">
        <li>
          <router-link to="/"
            ><i class="material-icons md-home"></i
          ></router-link>
        </li>
        <li>
          <router-link to="/sobre"
            ><i class="material-icons md-person"></i
          ></router-link>
        </li>
      </ul>
    </div>
    <div class="nav-mobile show-mobile" @click="toTop()">
      <div class="nav-link">
        <router-link to="/"
          ><i class="material-icons md-home"></i> home</router-link
        >
      </div>
      <div class="nav-link">
        <router-link to="/sobre"
          ><i class="material-icons md-person"></i> sobre</router-link
        >
      </div>
      <div class="nav-link">
        <a href="https://forms.gle/mdYVxaBnc1mziQ8KA" target="_blank"
          ><i class="material-icons md-layers"></i> contato</a
        >
      </div>
    </div>
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
$color-primary: #630094;
$color-secondary: #37266b;

nav {
    display: grid;
    align-items: center;
    right: 0px;
    position: absolute;
    position: fixed;
    height: 100vh;
}
.nav-desk {
  display: grid;
  align-items: center;
  ul {
    li {
      border-radius: 500px;
      box-shadow: 1px 1px 10px #666;
      margin-top: 35px;
      margin-right: 30px;
      cursor: pointer;
      a {
        background: #f0f0f0;
        border: 1px solid #eee;
        border-radius: 500px;
        color: #ccc;
        padding: 18px 10px;
        transition: 0.3s;
        &:hover {
          background: #f7f7f7;
          color: $color-primary;
        }
      }
      i {
        font-size: 2em;
        vertical-align: middle;
        text-align: center;
      }
    }
  }
}
.link_active {
  color: $color-primary!important;
  background: #f7f7f7!important;
}

.nav-mobile {
  display: none;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 90px;
  grid-gap: 20px;
  align-items: center;
  background: $color-primary;
  bottom: 0px;
  padding: 0 20px;
  position: absolute;
  position: fixed;
  left: 0px;
  text-align: center;
  width: 100%;
  z-index: 1;
  .nav-link {
    i {
      color: #fff;
      width: 100%;
    }
    a {
      border-radius: 5px;
      color: #fff;
      display: block;
      font-size: 0.7em;
      outline: none;
      padding: 7px 14px;
      text-transform: uppercase;
      &:focus {
        outline: none !important;
      }
    }
  }
}

/* MEDIA QUERIES START */
@media (max-width: 800px) {
  .link_active {
    opacity: 0.4;
    background: rgba(255, 255, 255, 0.2)!important;
    color: #fff!important;
  }
  .nav-mobile {
    display: grid;
  }
}
/* MEDIA QUERIES END */
</style>