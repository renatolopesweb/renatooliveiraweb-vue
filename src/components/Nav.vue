<template>
  <div>
      <div class="nav-ico show-d" @click="nav()">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
    <aside class="show-d">
      <nav>
        <ul>
          <li @click="toTop(), overlayOff()">
            <router-link to="/"
              ><i class="fa fa-home" aria-hidden="true"></i>Home</router-link
            >
          </li>
          <li @click="toTop(), overlayOff()">
            <router-link to="/about"
              ><i class="fa fa-user" aria-hidden="true"></i>Sobre</router-link
            >
          </li>
        </ul>
      </nav>
    </aside>
    <div class="nav-mobile show-m">
      <div class="nav-link" @click="toTop()">
        <router-link to="/"
          ><i class="fa fa-home" aria-hidden="true"></i>Home</router-link
        >
      </div>
      <div class="nav-link" @click="toTop()">
        <router-link to="/about"
          ><i class="fa fa-user" aria-hidden="true"></i>Sobre</router-link
        >
      </div>
      <div class="nav-link" @click="toTop()">
        <router-link to="/lab"
          ><i class="fa fa-flask" aria-hidden="true"></i
          >Experimentos</router-link
        >
      </div>
    </div>
    <div class="overlay" @click="overlayOff()"></div>
  </div>
</template>
<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
      });
    },
    nav() {
      document.querySelector("aside").classList.add("nav-active");
      document.querySelector(".overlay").classList.add("nav-block");
    },
    overlayOff() {
      document.querySelector("aside").classList.remove("nav-active");
      document.querySelector(".overlay").classList.remove("nav-block");
    },
  },
};

</script>

<style lang="scss" scoped>
$color-primary: #8c52ff;
$t-def: 0.3s;

.link_active {
  color: $color-primary;
  font-weight: bold;
  &:hover {
    cursor: auto;
  }
}

@media (max-width: 1024px) {
  .link_active {
    font-weight: normal;
    opacity: 0.5;
  }
}
.nav-ico {
  background: #fff;
  border-radius: 100%;
  cursor: pointer;
  padding: 10px 12px;
  position: fixed;
  left: 13px;
  top: 13px;
  transition: $t-def;
  z-index: 1;
  i{
    border-radius: 700px;
  }
  &:active{
    animation-name: button_pulse;
    animation-duration: 0.5s;
  }
}
@keyframes button_pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }
}
.overlay {
  width: 100%;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.5);
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;
  display: none;
  transition: $t-def;
}
aside {
  display: grid;
  grid-template-rows: 180px auto;
  background: #fff;
  position: fixed;
  height: 100vh;
  width: 270px;
  margin-left: -270px;
  top: 0px;
  transition: $t-def;
  z-index: 2;
}
.nav-active {
  margin-left: 0px;
}
.nav-block {
  display: block;
}
nav {
  li {
    i {
      font-size: 1.4em;
      width: 50px;
      text-align: center;
    }
    a {
      display: block;
      color: rgba($color: #000000, $alpha: 0.9);
      font-size: 0.8em;
      padding: 20px 5px;
      text-transform: uppercase;
      transition: $t-def;
      &:hover {
        background: #f0f0f0;
        text-decoration: none;
      }
    }
  }
}
.add-overflow{
  overflow: hidden;
}

.nav-mobile {
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-items: center;
  background: #fff;
  bottom: 0px;
  border-top: 1px solid rgba($color: #ccc, $alpha: 0.5);
  padding: 0 20px;
  position: absolute;
  position: fixed;
  left: 0px;
  text-align: center;
  width: 100%;
  z-index: 1;
  .nav-link {
    a {
      border-radius: 5px;
      color: #222;
      cursor: pointer;
      display: block;
      font-size: 0.6em;
      outline: none;
      padding: 7px 14px;
      text-transform: uppercase;
      transition: $t-def;
      &:hover {
        text-decoration: none;
      }
      &:focus {
        outline: none !important;
      }
    }
    i {
      color: #222;
      font-size: 2em;
      margin-bottom: 5px;
      width: 100%;
    }
  }
}
</style>