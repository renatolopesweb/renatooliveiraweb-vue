<template>
  <section>
    <header>
      <h1>RENATO OLIVEIRA</h1>
      <h2>front-end · web-design</h2>
    </header>
    <div class="header-bg"></div>
    <article>
      <figure>
        <img
          src="../assets/images/renato-oliveira-web-parati.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>
      <p>
        Olá, meu nome é
        <strong>Renato Oliveira</strong>, profissional destinado ao front-end e web-design.
        Desde 2009 batendo cabeça com web, me desafiando diariamente para ver ideias tomarem forma. Passei por belas empresas, veja em detalhes no meu
        <router-link to="/curriculo">currículo</router-link>.
      </p>
      <p>Contato pelas redes abaixo ok?</p>
      <ul class="social">
        <li v-for="item in social" :key="item.id">
          <a :href="item.url" target="_blank" :title="item.title">
            <i :class="item.img" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
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
header {
  display: grid;
  align-content: center;
  height: 100vh;
  left: 0;
  padding-left: 19px;
  position: absolute;
  text-align: left;
  top: 0;
  width: 100%;
  z-index: 3;
  h1,
  h2 {
    color: var(--color-primary);
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
  align-content: center;
  min-height: 100vh;
  margin-top: 100vh;
  img {
    border: 15px solid var(--color-primary);
    border-radius: 3px;
    // border-radius: 100%;
    // margin-top: -75px;
    width: 150px;
  }
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
    color: #1b3ba4;
  }
}
.social {
  display: flex;
  gap: 20px;
  margin: 20px 0;
  justify-content: center;
  a {
    font-size: 1.6em;
    :hover {
      transform: scale(1.2);
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
    padding-bottom: 100px;
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
  .social {
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