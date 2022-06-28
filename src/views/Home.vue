<template>
  <section>
    <header>
      <h1>RENATO OLIVEIRA</h1>
      <h2>front-end · web-designer</h2>
    </header>
    <div class="header-bg"></div>
    <article>
      <figure>
        <img
          src="../assets/images/renato-oliveira-web-about.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>
      <div>
        <h2>Olá, meu nome é Renato Oliveira, profissional de front-end e design</h2>
        <p>Onipresente desde 2009 em áreas de TI, Comunicação e Marketing. Desenvolvendo ou planejando, minha missão é tornar aspirações em algo tátil e simples.</p>
        <p>Ficou com vontade de me conhecer melhor? Quer falar sobre web? Quer ver meus códigos? Então toque em alguma rede abaixo e envie uma mensagem, pode ser?</p>
        <!-- <p>Formado em Comunicação para Web pela Universidade Paulista (UNIP), pseudo-músico, pseudo-ciclista, pai da Ana Luiza e da “Cyndi”.</p>
        <p>Navegue nos links e me conheça melhor...</p>-->
        <ul class="social">
          <li v-for="item in social" :key="item.id">
            <a :href="item.url" target="_blank" :title="item.title">
              <i :class="item.img" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          title: "Linkedin",
          img: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/renatooliveiraweb"
        },
        {
          title: "Github",
          img: "fab fa-github-alt",
          url: "https://github.com/renato7oliveira"
        },
        {
          title: "Instagram",
          img: "fab fa-instagram",
          url: "https://www.instagram.com/renatooliveiraweb"
        },
        {
          title: "E-mail",
          img: "far fa-envelope",
          url: "mailto:renato.ldeoliveira@gmail.com"
        }
      ]
    };
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
.header-bg {
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
  grid-template-columns: 250px auto;
  grid-gap: 75px;
  // align-content: center;
  min-height: 100vh;
  margin-top: 100vh;
  text-align: left;
  h2 {
    font-size: 1.4em;
    font-weight: 500;
  }
  p {
    font-size: 1.1em;
    font-weight: 500;
    margin-top: 25px;
  }
  span {
    color: var(--color-secondary);
  }
}
figure,
div {
  display: grid;
  height: calc(100vh - 100px);
  align-content: center;
}
figure {
  img {
    border-radius: 100%;
    width: 200px;
  }
}
.social {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  a {
    font-size: 1.6em;
    :hover {
      transform: scale(1.3);
    }
    :active {
      transform: scale(1);
    }
  }
}
@media (max-width: 1000px) {
  article {
    grid-template-columns: 1fr;
    grid-gap: 0;
    min-height: auto;
    padding-bottom: 75px;
    text-align: center;
  }
  figure {
    display: grid;
    justify-content: center;
    height: auto;
    img {
      margin: 125px 0 25px 0;
    }
  }
  div {
    height: auto;
  }
  .social{
    justify-content: center;
  }
}
@media (max-width: 500px) {
  header {
    background: rgba($color: #fff, $alpha: 0.7);
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