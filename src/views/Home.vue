<template>
  <section>
    <div class="header-hero"></div>
    <header>
      <h1>RENATO OLIVEIRA</h1>
      <h2>front-end / web-designer</h2>
    </header>
    <article>
      <figure>
        <img
          src="../assets/images/renato-oliveira-web-2.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>
      <!-- <div class="social">
        <ul>
          <li v-for="item in social" :key="item.id">
            <a :href="item.url" target="_blank" :title="item.title">
              <i :class="item.img" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>-->
      <p>Olá, sou o Renato, profissional de web, me dedico ao front-end e design (UI). Formado em Comunicação para Web pela UNIP, tive oportunidade de trabalhar em áreas de TI, Comunicação e Marketing. Me esforço diariamente para entregar o melhor. Veja meu <span
          @click="toTop()"
        >
          <router-link to="/curriculo">currículo</router-link>
        </span></p>
      <p>
        Casado com a Delma, pai da Ana Luiza e da "Cyndi".
      </p>
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
  },
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
  background: linear-gradient(
    45deg,
    rgba(6, 23, 79, 1) 0%,
    rgba(30, 8, 56, 0.9) 80%
  );
  padding-left: 25px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  // opacity: 0.9;
  text-align: left;
  z-index: 3;
  h1,
  h2 {
    color: rgba($color: #fff, $alpha: 0.9);
    font-family: "Poiret One", cursive;
    font-weight: lighter;
    margin: 0;
  }
  h1 {
    font-size: 6vw;
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
  filter: grayscale(1);
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
    margin: 50px auto 5px auto;

    width: 150px;
  }
  p {
    margin-bottom: 25px;
  }
}
.social {
  text-align: center;
  margin: auto;
  width: 150px;
  ul {
    display: flex;
    justify-content: space-around;
  }
  li:hover {
    transform: scale(1.2);
  }
  a {
    color: var(--color-primary);
    font-size: 1.4em;
    &:hover {
      color: #092e5c;
    }
  }
}
@media (max-width: 1100px) {
  header {
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