<template>
  <section>
    <article>
      <figure class="show-m">
        <img
          src="../assets/images/renato7oliveira-about.jpg"
          alt="renato7oliveira"
          title="renato7oliveira"
        />
      </figure>
      <h1>RENATO7OLIVEIRA</h1>
      <h2>WEBDESIGNER</h2>
    </article>

    <section class="home-grid-nav">
      <div>
        <span>
          <router-link to="/sobre"
            ><i class="fas fa-running" @click="toTop()"></i
          ></router-link>
          <p>Veja a minha experiência</p>
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

article {
  display: grid;
  align-items: center;
  align-content: center;
  height: calc(100vh - 175px);
  text-align: center;
  img {
    background: $color-primary;
    border-radius: 100%;
    margin: 0 auto 10px auto;
    max-width: 150px;
    filter: saturate(7%);
  }
}
h1,
h2 {
  font-weight: 900;
  letter-spacing: 1.5px;
  font-family: "Bowlby One", cursive;
  font-size: 5vw;
}
h1 {
  color: $color-primary;
}
h2 {
  color: rgba($color: $color-primary, $alpha: 0.5);
}

// GRID

.home-grid-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  height: calc(90.5vh - 75px);
  div {
    display: grid;
    align-content: center;
    align-items: center;
    border: 1px solid rgba($color: $color-primary, $alpha: 0.3);
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
      background: rgba($color: $color-primary, $alpha: 0.1);
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
  article {
    height: calc(100vh - 80px);
  }
  .home-grid-nav {
    grid-template-columns: 1fr;
    height: calc(100vh + 80px);
    margin: 25px;
    div {
      padding: 10px;
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