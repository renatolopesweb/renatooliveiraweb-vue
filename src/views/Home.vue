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
        10+ anos trabalhando em divisões web, normalmente dedicado ao front-end
        e UX/UI.
      </h2>
      <p>
        Iniciei em agências com clientes de todos os portes, também já ocupei
        cargos voltado para gestão de projetos web.
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
      <h2>Feedback para este site</h2>
      <div class="grid-default">
        <article v-for="(item, article) in feedback" :key="article">
          <a :href="item.url" target="_blank" :title="item.alt">
            <div class="icon">
              <i :class="item.img" aria-hidden="true"></i>
            </div>
            <div>
              <h2>{{ item.title }}</h2>
            </div>
          </a>
        </article>
      </div>
    </article>
  </section>
</template>

<script>
// import Experiments from "../components/NavExperiments.vue";

export default {
  components: {
    // Experiments,
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
      feedback: [
        {
          title: "Mobile Friendly Test",
          img: "fas fa-gamepad",
          url: "https://bit.ly/3nbj8x7",
          alt: "Este site é otimizado para mobile?",
        },
        {
          title: "Google Speed Test",
          img: "fas fa-tachometer-alt",
          url: "https://bit.ly/2YBTLKT",
          alt: "Velocidade deste site!",
        },
        {
          title: "Enviar Mensagem",
          img: "far fa-paper-plane",
          url: "https://bit.ly/3BRW6iY",
          alt: "Me envie uma mensagem!",
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
$color-primary: #4a148c;
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
    font-size: 2.3em;
  }
}

article {
  margin: 50px;
  p {
    color: #666;
    line-height: 25px;
    margin: 22px 0;
  }
  h2 {
    margin-bottom: 10px;
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

.grid-default {
  grid-template-columns: repeat(3, 12rem);
  margin: 0px;
  article {
    align-items: center;
    margin: 0px;
    grid-gap: 0px;
    .icon {
      display: grid;
      background: #f2f2f2;
      align-items: center;
      height: 11rem;
      text-align: center;
      width: 100%;
      &:hover {
        background: #eee;
        color: #333;
      }
      i {
        color: $color-primary;
        font-size: 3.6em;
      }
    }
    h2 {
      color: $color-primary;
      font-weight: bold;
      margin: 0px;
    }
  }
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
  .grid-default {
    grid-template-columns: 1fr;
    article {
      border: 1px solid rgba($color: #ccc, $alpha: 0.5);
      div{
        height: 0;
        padding: 15px 0 10px 0;
      }
      .icon{
        height: 12rem;
      }
      
    }
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