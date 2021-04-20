<template>
  <nav>
    <div class="nav-desk show-desk">
      <ul @click="toTop()">
        <li>
          <router-link to="/"
            ><i class="fa fa-home" aria-hidden="true" title="Home"></i
          ></router-link>
        </li>
        <li>
          <router-link to="/sobre"
            ><i class="fa fa-user" aria-hidden="true" title="Sobre"></i
          ></router-link>
        </li>
      </ul>
    </div>
    <div class="nav-mobile show-mobile" @click="toTop()">
      <div class="nav-link">
        <router-link to="/"
          ><i class="fa fa-home" aria-hidden="true"></i>home</router-link
        >
      </div>
      <div class="nav-link">
        <router-link to="/sobre"
          ><i class="fa fa-user" aria-hidden="true"></i>sobre</router-link
        >
      </div>
      <div class="nav-link">
        <a @click="(modalShow = true, modalFrame())" 
          ><i class="fa fa-paper-plane" aria-hidden="true"></i>mensagem</a
        >
      </div>
    </div>
    <div class="form-overlay" v-show="modalShow" @click="(modalShow = false)">
      <iframe frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
    </div>
  </nav>
</template>
<script>
export default {

  data(){
        return{
            modalShow: false,
        }
    },

  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    modalFrame(){
      document.querySelector('iframe').src = "https://forms.gle/mdYVxaBnc1mziQ8KA";
    }
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
      border: 1px solid #f0f0f0;
      box-shadow: 1px 2px 3px #999;
      margin-top: 15px;
      margin-right: 30px;
      padding: 12px;
      text-align: center;
      a {
        background: transparent;
        border: 1px solid #eee;
        border-radius: 500px;
        color: $color-primary;
        transition: 0.3s;
        &:hover {
          opacity: 0.2;
        }
      }
      i {
        font-size: 1.6em;
        vertical-align: middle;
        text-align: center;
      }
    }
  }
}
.link_active {
  opacity: 0.2!important;
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
    a {
      border-radius: 5px;
      color: rgba(255, 255, 255, 0.9);
      cursor: pointer;
      display: block;
      font-size: 0.7em;
      outline: none;
      padding: 7px 14px;
      text-transform: uppercase;
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

.form-overlay{
    display: grid;
    background: rgba($color: $color-primary, $alpha: 0.9);
    height: 100%;
    height: 100vh;
    position: absolute;
    left: 0px;
    top: 0px;
    position: fixed;
    width: 100%;
    z-index: 3;
}
.fade-view-enter , .fade-view-leave-to{
    opacity: 0;
}
.fade-view-enter-active , .fade-view-leave-active{
    transition: opacity 0.3s ease-in-out ;
}

iframe{
    background: #fff;
    width: 600px;
    max-width: 75%;
    height: 100vh;
    margin: auto;
}

/* MEDIA QUERIES START */
@media (max-width: 800px) {
  .link_active {
    background: rgba(255, 255, 255, 0.4) !important;
    color: #fff !important;
  }
  .nav-mobile {
    display: grid;
  }
}
/* MEDIA QUERIES END */
</style>