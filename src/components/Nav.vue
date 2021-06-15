<template>
  <div>
    <aside class="show-d">
      <div class="nav-ico" @click="nav()">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <nav>
        <ul>
          <li @click="toTop(), overlay()">
            <router-link to="/"
              ><i class="fa fa-home" aria-hidden="true"></i>Home</router-link
            >
          </li>
          <li @click="toTop(), overlay()">
            <router-link to="/about"
              ><i class="fa fa-user" aria-hidden="true"></i>Sobre</router-link
            >
          </li>
          <li @click="toTop(), overlay()">
            <router-link to="/lab"
              ><i class="fa fa-fighter-jet" aria-hidden="true"></i
              >Trabalhos</router-link
            >
          </li>
        </ul>
      </nav>
    </aside>
    <div class="overlay" @click="overlay()"></div>
    <div class="nav-mobile show-m">
      <div class="nav-link" @click="toTop()">
        <router-link to="/"
          ><i class="fa fa-home" aria-hidden="true"></i>home</router-link
        >
      </div>
      <div class="nav-link" @click="toTop()">
        <router-link to="/about"
          ><i class="fa fa-user" aria-hidden="true"></i>sobre</router-link
        >
      </div>
      <div class="nav-link" @click="toTop()">
        <router-link to="/lab"
          ><i class="fa fa-fighter-jet" aria-hidden="true"></i
          >Trabalhos</router-link
        >
      </div>
    </div>
  </div>
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
    nav() {
      document.querySelector('aside').classList.toggle('nav-active');
      document.querySelector('.overlay').classList.toggle('nav-block');
      document.querySelector('body').style.overflow = 'hidden';
    },
    overlay() {
      document.querySelector('aside').classList.remove('nav-active');
      document.querySelector('.overlay').classList.remove('nav-block');
      document.querySelector('body').style.overflow = 'visible';
    },
  },
};
</script>

<style lang="scss" scoped>
$color-primary: #8c52ff;
$t-def: 0.3s;

.link_active {
  &:hover {
    cursor: auto;
  }
}
@media (max-width: 800px) {
  .link_active {
    background: rgba($color: #000000, $alpha: 0.2);
    opacity: 0.7;
  }
}
.nav-ico {
  cursor: pointer;
  position: fixed;
  left: 20px;
  top: 17px;
}
.overlay {
  width: 100%;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.5);
  position: fixed;
  z-index: 1;
  display: none;
  transition: $t-def;
}
aside {
  display: grid;
  grid-template-rows: 180px auto;
  background: #fff;
  // box-shadow: 1px 9px 19px rgba($color: #000000, $alpha: 0.2);
  // box-shadow:  20px 20px 60px #E9E9E9,
  //            -20px -20px 60px #ffffff;
  position: fixed;
  height: 100vh;
  width: 270px;
  margin-left: -270px;
  transition: $t-def;
  z-index: 2;
}
.nav-active{
  margin-left: 0px;
}
.nav-block{
  display: block;
}
nav {
  ul {
    margin-top: 50px;
  }
  li {
    // border-bottom: 1px solid rgba($color: #333, $alpha: 0.1);
    // margin-bottom: 1px;
    i {
      font-size: 1.4em;
      width: 50px;
      text-align: center;
    }
    a {
      display: block;
      color: rgba($color: #000000, $alpha: 0.9);
      font-size: 0.8em;
      font-weight: bolder;
      padding: 20px 5px;
      transition: $t-def;
      &:hover {
        background: #f0f0f0;
        // color: rgba($color: #000000, $alpha: 0.5);
      }
    }
  }
}

.nav-mobile {
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
    a {
      border-radius: 5px;
      color: rgba(255, 255, 255, 0.9);
      cursor: pointer;
      display: block;
      font-size: 0.7em;
      outline: none;
      padding: 7px 14px;
      text-transform: uppercase;
      transition: 0.3s;
      &:focus {
        outline: none !important;
      }
    }
    i {
      color: rgba(255, 255, 255, 0.9);
      font-size: 2em;
      margin-bottom: 5px;
      width: 100%;
    }
  }
}
</style>