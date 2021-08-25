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
        Iniciei minha carreira polipolar em pequenas agências e também já ocupei
        cargos voltados para gestão de projetos digitais como Portais Web,
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
    </article>
  </section>
</template>

<script>
import Bungee from "@fontsource/bungee-shade";
Bungee;

export default {
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
$font: "Bungee Shade", cursive;
$bg-light: rgba(
  $color: #f0f0f0,
  $alpha: 0.5,
);
$color-primary: #8c52ff;
$t-def: 0.3s;

header {
  display: grid;
  grid-template-columns: 200px auto;
  // background: #f0f0f0;
  background-image: linear-gradient(to bottom left, #fff, #f0f0f0);
  align-items: center;
  height: 50vh;
  img {
    background: $color-primary;
    border-radius: 100%;
    margin: 0 25px;
  }
  h1,
  h2 {
    font-size: 4.2em;
    font-family: $font;
    font-weight: bold;
    line-height: 65px;
  }
  h1 {
    color: #220d3b;
  }
  h2 {
    color: $color-primary;
  }
}

article {
  p {
    margin-bottom: 20px;
  }
  ul {
    margin-bottom: 25px;
  }
  li {
    font-size: 1.1em;
    margin-bottom: 10px;
    a {
      color: $color-primary;
    }
    a:hover {
      text-decoration: underline;
    }
    @media (max-width: 350px) {
      li,
      a {
        font-size: 0.9em;
      }
    }
    i {
      font-size: 1.2em;
      margin-right: 5px;
      text-align: center;
      width: 25px;
    }
  }
}

@media (max-width: 1024px) {
  header {
    grid-template-columns: 1fr;
    text-align: center;
    height: 100vh;
    align-content: center;
  }
  article {
    padding: 25px;
  }
}
@media (max-width: 1220px) {
  header {
    h1,
    h2 {
      font-size: 3em;
      line-height: 50px;
    }
  }
}
@media (max-width: 820px) {
  header {
    h1,
    h2 {
      font-size: 3.6em;
      line-height: 55px;
    }
  }
}
@media (max-width: 700px) {
  header {
    h1,
    h2 {
      font-size: 3em;
      line-height: 50px;
    }
  }
}
@media (max-width: 600px) {
  header {
    h1,
    h2 {
      font-size: 1.5em;
      line-height: 35px;
    }
  }
}
</style>