<template>
  <section>
    <article>
      <div>
        <h1>RENATO7OLIVEIRA</h1>
      <p>A Front-End Web Developer passionate about creating interactive applications  and experiences on the web.</p>
      </div>
    </article>

    <section class="home-grid-nav">
      <div>
        <span>
          <router-link to="/sobre"
            ><i class="fas fa-running" @click="toTop()"></i
          ></router-link>
          <p>Veja a minha história</p>
        </span>
      </div>
      <div>
        <span>
          <router-link to="/projetos"
            ><i class="fas fa-gamepad" @click="toTop()"></i
          ></router-link>
          <p>Confira alguns projetos</p>
        </span>
      </div>
    </section>
  </section>
</template>

<script>
import fontBowlby from '../../node_modules/@fontsource/bowlby-one';
fontBowlby
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
@import "../assets/css/_variables.scss";

// section{
//   display: grid;
  
// }

article {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  // height: 100vh;
  align-items: center;
  align-content: center;
  height: calc(100vh - 175px);
  text-align: center;
  img {
    background: $color-primary;
    border-radius: 100%;
    margin: 0 auto 10px auto;
    max-width: 125px;
    filter: saturate(7%);
  }
  div{
    grid-column: 3 / 4;
  }
}
h1,
h2 {
  font-weight: 900;
  letter-spacing: -3px;
  // font-family: "Bowlby One", cursive;
  font-size: 5vw;
}
h1 {
  color: $color-primary;
}
h2 {
  color: rgba($color: $color-primary, $alpha: 0.5);
}
p{
  color: $color-default;
  font-size: 1.5vw;
}

// GRID

.home-grid-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  height: calc(92.5vh - 75px);
  margin-top: 25px;
  div {
    display: grid;
    align-content: center;
    align-items: center;
    border: $border-gray;
    color: $color-primary;
    padding: 25px;
    text-align: center;
    i {
      color: $color-primary;
      font-size: 6em;
    }
    p {
      color: $color-primary;
      font-size: 1.3em;
      margin: 0 25px;
    }
    &:hover {
      background: #fff;
      i {
        transform: scale(1.2);
        &:hover{
          transform: scale(1.4);
        }
        &:active {
          transform: scale(1);
        }
      }
    }
  }
}

@media (max-width: 700px) {
  h1{
  font-size: 11vw;
}
p{
  font-size: 1.2em;
  font-weight: 700;
}
  article {
    height: calc(100vh - 70px);
  }
  .home-grid-nav {
    grid-template-columns: 1fr;
    grid-gap: 15px;
    height: calc(100vh + 80px);
    margin: 0px;
    // margin: 15px 0px 0px 15px;
    div {
      i {
        font-size: 4em;
      }
      p {
        margin: 0 15px;
      }
    }
  }
}
</style>