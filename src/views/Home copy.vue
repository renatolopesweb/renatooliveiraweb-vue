<template>
  <section>
    <div class="header-hero"></div>
    <header>
      <h1>RENATO OLIVEIRA</h1>
      <h2>front-end · web-designer</h2>
    </header>
    <article>
      <figure>
        <img
          src="../assets/images/renato-oliveira-web-about.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>

      <p>Pseudo-músico, apaixonado por front-end e design.</p>
      <p>
        Formado em Comunicação para Web pela Universidade Paulista (UNIP), já trabalhei em áreas de TI,
        Comunicação e Marketing.
        <span
          @click="toTop()"
        >
          <router-link to="/curriculo">Ver Currículo</router-link>
        </span>
      </p>
      <p>Casado com a Delma, pai da Ana Luiza e da "Cyndi".</p>
    </article>
  </section>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$color-primary: #3e2723;

header {
  display: grid;
  align-content: center;
  padding-left: 19px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  text-align: left;
  z-index: 3;
  h1,
  h2 {
    color: $color-primary;
    font-family: "Poiret One", cursive;
    font-weight: 300;
    margin: 0;
  }
  h1 {
    font-size: 5vw;
  }
  h2 {
    font-size: 3vw;
    text-transform: none;
  }
}
.header-hero {
  background-image: url("../assets/images/header-bg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
}
article {
  display: grid;
  min-height: 100vh;
  align-content: center;
  margin-top: 100vh;
  img {
    border-radius: 100%;
    margin-top: -100px;
    width: 150px;
  }
  p {
    margin-top: 25px;
  }
}
@media (max-width: 1000px) {
  article {
    height: auto;
    padding: 50px 0;
    img {
      margin-top: 0;
    }
  }
}
@media (max-width: 500px) {
  header {
    background: rgba($color: #fff, $alpha: 0.5);
    h1,
    h2 {
      font-weight: bold;
    }
    h1 {
      font-size: 9vw;
    }
    h2 {
      font-size: 5vw;
      font-weight: bold;
    }
  }
}
</style>