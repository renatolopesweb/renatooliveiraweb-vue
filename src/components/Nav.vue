<template>
  <nav>
    <ul>
      <li @click="toTop()">
        <router-link to="/"
          ><i class="fa fa-home" aria-hidden="true"></i>home</router-link
        >
      </li>
      <li @click="(toTop(), navOverflow())">
        <router-link to="/trabalhos"
          ><i class="fa fa-coffee" aria-hidden="true"></i>trabalhos</router-link
        >
      </li>
      <li class="show-m">
        <a href="https://forms.gle/mdYVxaBnc1mziQ8KA" target="_blank" 
          ><i class="fa fa-paper-plane" aria-hidden="true"></i>mensagem</a
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
    navOverflow() {
      document.querySelector('html').style.overflowY = "auto";
    }
  },
};
</script>

<style lang="scss" scoped>
$color-primary: #151515;
$t-def: 0.3s;


.link_active {
  box-shadow: 1px 1px 3px #999;
  background: #fff;
  opacity: 0.5;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: 12vh;
  grid-gap: 20px;
  align-items: center;
  background: #eee;
  box-shadow: -1px -1px 3px #999;
  bottom: 0px;
  padding-left: 20px;
  position: absolute;
  position: fixed;
  left: 0px;
  text-align: center;
  width: 100%;
  z-index: 1;
  li {
    a {
      border-radius: 5px;      
      color: rgba(0, 0, 0, 0.9);
      cursor: pointer;
      display: block;
      font-size: 0.7em;
      outline: none;
      padding: 7px 14px;
      text-transform: uppercase;
      transition: $t-def;
      &:hover{
        box-shadow: 1px 1px 3px #999;
        background: #fff;
      }
      &:focus {
        outline: none !important;
      }
    }
    i {
      color: rgba(0, 0, 0, 0.9);
      font-size: 2em;
      margin-bottom: 5px;
      width: 100%;
    }
  }
}
@media(max-width: 800px){
  ul{
    grid-template-rows: 15vh;
    grid-gap: 10px;
    background: #000;
      li {
        a, i {
          color: rgba(255, 255, 255, 0.8);
        }
    }
  }
  .link_active {
    box-shadow: 1px 1px 3px #111!important;
    background: #222!important;
}
}

</style>