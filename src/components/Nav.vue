<template>
<div>
  <aside class="show-d">
    <div class="brand">
      <h1>RENATO7OLIVEIRA <br><span>frontend web</span></h1>   
    </div>
    <nav>
      <ul>
        <li @click="toTop()">
          <router-link to="/"
            ><i class="fa fa-home" aria-hidden="true"></i>Home</router-link
          >
        </li>
        <li @click="toTop()">
          <router-link to="/about"
            ><i class="fa fa-user" aria-hidden="true"></i>Sobre</router-link
          >
        </li>
        <li @click="toTop()">
          <router-link to="/lab"
            ><i class="fa fa-coffee" aria-hidden="true"></i>Trabalhos</router-link
          >
        </li>
      </ul>
    </nav>
  </aside>
  <div class="nav-mobile show-m">
      <div class="nav-link"  @click="toTop()">
        <router-link to="/"
          ><i class="fa fa-home" aria-hidden="true"></i>home</router-link
        >
      </div>
      <div class="nav-link"  @click="toTop()">
        <router-link to="/about"
          ><i class="fa fa-user" aria-hidden="true"></i>sobre</router-link
        >
      </div>
      <div class="nav-link"  @click="toTop()">
        <router-link to="/lab"
          ><i class="fa fa-coffee" aria-hidden="true"></i>Trabalhos</router-link
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
  }
};
</script>

<style lang="scss" scoped>
$color-primary: #8c52ff;
$t-def: 0.3s;

.link_active {
  color: rgba($color: #000000, $alpha: 0.5);
  &:hover {
    cursor: auto;
  }
}
@media(max-width: 800px){
  .link_active {
    background: rgba($color: #000000, $alpha: 0.2);
    opacity: 0.7;
  }
}

aside {
  display: grid;
  grid-template-rows: 150px auto;
  box-shadow: 1px 9px 19px rgba($color: $color-primary, $alpha: 0.5);
  // box-shadow:  20px 20px 60px #E9E9E9,
  //            -20px -20px 60px #ffffff;
  position: fixed;
  height: 100vh;
  width: 300px;
}
nav{
  li{
    border-bottom: 2px solid #f0f0f0;
    i{
      font-size: 1.4em;
      width: 50px;
      text-align: center;
    }
    a{
      display: block;
      color: rgba($color: #000000, $alpha: 1);
      font-size: 0.8em;
      font-weight: bolder;
      padding: 20px 5px;
      transition: $t-def;
      &:hover{
        color: rgba($color: #000000, $alpha: 0.5);
      }
    }
  }
}
.brand{
  display: grid;
  align-items: center;
  background: $color-primary;
  color: #fff;
  padding: 20px;
  text-align: right;
  h1{
    font-size: 1.1em;
  }
  span{
    font-weight: lighter!important;
    font-size: 0.9em;
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