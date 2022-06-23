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
      <p>
        Olá, sou o Renato, profissional de web dedicado ao front-end e design. 
        Formado em Comunicação para Web pela UNIP, tive oportunidade de trabalhar em áreas de TI, 
        Comunicação e Marketing. Veja meu
        <span @click="toTop()">
          <router-link to="/curriculo">currículo</router-link>
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

$color-primary: #3e2723 ;

header {
  display: grid;
  align-content: center;
  background: rgba($color: #fff, $alpha: 0.8);
  padding-left: 25px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  text-align: left;
  z-index: 3;
  h1,
  h2 {
    color: rgba($color: $color-primary, $alpha: 0.9);
    font-family: "Poiret One", cursive;
    font-weight: lighter;
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
  height: calc(100vh - 275px);
  margin-top: 100vh;
  img {
    border-radius: 100%;
    margin: 75px auto 0 auto;
    width: 150px;
  }
  p {
    color: var(--color-primary);
    margin-top: 25px;
  }
}
@media (max-width: 1100px) {
  header {
    background: rgba($color: $color-primary, $alpha: 0.9);
    h1, h2{
      color: rgba($color: #fff, $alpha: 0.9);
    }
    h1 {
      font-size: 10vw;
    }
    h2 {
      font-size: 6vw;
    }
  }
  article {
    height: auto;
    padding-bottom: 100px;
  }
}
</style>