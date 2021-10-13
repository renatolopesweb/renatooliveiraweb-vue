<template>
  <section>
    <article>
      <figure class="show-m">
        <img
          src="../assets/images/renato7oliveira-about.gif"
          alt="renato7oliveira"
          title="renato7oliveira"
        />
      </figure>
      <h1>RENATO7OLIVEIRA</h1>
      <h2>WEBDESIGNER</h2>
    </article>

    <section class="home-grid-nav">
      <div>
        <router-link to="/sobre"
          ><i class="fas fa-running" @click="toTop()"></i
        ></router-link>
        <p>Veja a minha experiência</p>
      </div>
      <div>
        <router-link to="/projetos"
          ><i class="fas fa-gamepad" @click="toTop()"></i
        ></router-link>
        <p>Confira alguns projetos pessoais</p>
      </div>
      <div>
        <router-link to="/contato"
          ><i class="fas fa-share-alt" @click="toTop()"></i
        ></router-link>
        <i class=""></i>
        <p>Entre em contato pelas Redes</p>
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
$color-primary: #141e55;

article {
  display: grid;
  align-items: center;
  align-content: center;
  height: calc(100vh - 180px);
  img {
    background: $color-primary;
    border-radius: 100%;
    margin: auto;
  }
}
h1,
h2 {
  font-weight: 900;
  letter-spacing: 1.5px;
  font-family: "Bowlby One", cursive;
}
h1 {
  color: $color-primary;
  font-size: 4.5vw;
}
h2 {
  color: #999;
  font-size: 4vw;
}

// GRID

.home-grid-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: calc(100vh - 80px);
  div {
    display: flex;
    align-items: center;
    color: $color-primary;
    padding: 25px;
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
    text-align: center;
    h1 {
      margin: 0;
    }
  }
  .home-grid-nav {
    grid-template-columns: 1fr;
    height: calc(100vh + 80px);
  }
}
</style>