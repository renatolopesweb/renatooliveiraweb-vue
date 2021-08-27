<template>
  <section>
    <header>
      <figure>
        <img
          src="../assets/images/renato7oliveira-about.gif"
          alt="renato7oliveira"
          title="renato7oliveira"
        />
      </figure>
      <div>
        <h1>RENATO7OLIVEIRA</h1>
        <h2>WEBDESIGNER</h2>
      </div>
    </header>
    <article>
      <h2>
        10+ anos que trabalho para empresas nas divisões de web, dedicado
        principalmente no front-end e UX/UI.
      </h2>
      <p>
        Iniciei carreira em pequenas agências com clientes de todos os portes, também já ocupei
        cargos voltado para gestão de projetos digitais como Portais Web,
        Intranets, Redes Sociais e afins.
      </p>
      <p>
        Moro em São Paulo, sou casado com a Delma, pai da Ana Luiza e da
        "Cyndi".
      </p>
      <h2>Contato</h2>
      <ul>
        <li v-for="item in social" :key="item.id">
          <a :href="item.url" target="_blank" title="Abrirá em nova aba"
            ><i :class="item.img" aria-hidden="true"></i>{{ item.title }}</a
          >
        </li>
      </ul>
      <!-- <h2>Experimentos</h2>
      <Experiments /> -->
    </article>
  </section>
</template>

<script>
import fontBowlby from "@fontsource/bowlby-one";
// import Experiments from "../components/NavExperiments.vue";  

fontBowlby;

export default {
  components: {
    // Experiments,
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
      });
    },
  },

  data() {
    return {
      social: [
        {
          title: "linkedin.com/in/renato7oliveira",
          img: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/renato7oliveira",
        },
        {
          title: "github.com/renato7oliveira",
          img: "fab fa-github",
          url: "https://github.com/renato7oliveira",
        },
        {
          title: "instagram.com/renato7oliveira",
          img: "fab fa-instagram",
          url: "https://www.instagram.com/renato7oliveira",
        },
        {
          title: "facebook.com/renato7oliveira",
          img: "fab fa-facebook",
          url: "https://facebook.com/renato7oliveira",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$font: "Bowlby One", cursive;
$bg-light: rgba(
  $color: #f0f0f0,
  $alpha: 0.5,
);
$color-primary: #4A148C;
$t-def: 0.3s;

header {
  display: grid;
  grid-template-columns: 215px auto;
  background: $color-primary;
  // background-image: url('../assets/images/home-bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // background-position: center;
  // background-image: linear-gradient(to bottom left, #4a2a97, #512DA8);
  align-items: center;
  height: 50vh;
  img {
    background: #fafafa;
    border-radius: 100%;
    margin: 0 50px;
  }
  h1,
  h2 {
    color: #fff;
    // font-family: $font;
    line-height: 50px;
  }
  h1 {
    font-size: 3em;
    // font-weight: normal;
  }
  h2 {
    font-weight: lighter;
    font-size: 2.4em;
  }
}

article {
  margin: 50px;
  p {
    color: #666;
    line-height: 25px;
    margin: 22px 0;
  }
  ul {
    margin-bottom: 25px;
  }
  li {
    // font-size: 1.1em;
    margin-bottom: 10px;
    a {
      color: $color-primary;
    }
    a:hover {
      text-decoration: underline;
    }
    i {
      font-size: 1.1em;
      margin-right: 10px;
    }
  }
}

.grid-lab {
  margin: 0px;
}

@media (max-width: 1024px) {
  header {
    grid-template-columns: 1fr;
    background-position: right;
    text-align: center;
    height: 100vh;
    align-content: center;
  }
  article {
    margin: 0px;
    padding: 25px;
  }
}

@media (max-width: 450px) {
  header {
    h1,
    h2 {
      font-size: 1.8em;
      line-height: 35px;
    }
  }
}
</style>