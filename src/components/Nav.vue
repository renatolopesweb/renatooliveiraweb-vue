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
  background: transparent;
  box-shadow: 1px 1px 3px #fff;
  opacity: 0.7;
    &:hover{
      box-shadow: 1px 1px 3px #fff;
    cursor: auto;
  }
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 20px;
  height: 100px;
  align-items: center;
  background: #fff;
  box-shadow: -1px -1px 3px #b2b2b2;
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
      background: #f7f7f7;
      border-radius: 5px;
      box-shadow: 1px 1px 3px #999; 
      color: rgba(0, 0, 0, 0.9);
      cursor: pointer;
      display: block;
      font-size: 0.7em;
      outline: none;
      padding: 7px 14px;
      text-transform: uppercase;
      transition: $t-def;
      &:hover{
        box-shadow: 1px 1px 1px #ccc;
      }
      &:active{
        box-shadow: 0px 0px 0px #fff;
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
    grid-gap: 9px;
    background: #000;
    box-shadow: 0px -0px 0px #000;
    padding-left: 0px;
      li {
        i{
          color: rgba(255, 255, 255, 0.8);
        }
        a{
          background: transparent;
          box-shadow: 0px 0px 0px #000;
          color: rgba(255, 255, 255, 0.8);
          &:hover{
            background: transparent;
            box-shadow: 0px 0px 0px #000;
            opacity: 0.3;
          }
        }
    }
  }
  .link_active {
    box-shadow: 1px 1px 3px #111!important;
    background: transparent!important;
    opacity: 0.3!important;
}
}

</style>