<template>
  <section>
    <header>
      <figure>
        <img
          src="../assets/images/renato7oliveira-about.gif"
          alt="renato7oliveira"
          title="renato7oliveira"
          class="show-m"
        />
      </figure>
      <h1>RENATO<span>7</span>OLIVEIRA</h1>
      <h2>
        10+ anos de experiência com desenvolvimento web, ênfase nas camadas de
         front-end e UX/UI.
      </h2>
    </header>
    <article>
      <p>
        Iniciei minha carreira profissional em startups de Marketing e
        Tecnologia, atendendo desde clientes pequenos a multinacionais, também
        já tive oportunidade de ocupar cargo voltado para gestão de projetos
        web.
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

export default {
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
          title: "É amigável?",
          img: "fas fa-gamepad",
          url: "https://bit.ly/3oqz2UY",
          alt: "Google Mobile Friendly",
        },
        {
          title: "É rápido?",
          img: "fas fa-tachometer-alt",
          url: "https://bit.ly/2YBTLKT",
          alt: "Google Speed Test",
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
$bg-light: rgba(
  $color: #f0f0f0,
  $alpha: 0.5,
);
$color-primary: #003385;
$t-def: 0.3s;

section {
  margin: 75px;
  h1,
  h2 {
    font-weight: 900;
  }
  h1 {
    font-size: 5em;
  }
  h2 {
    font-size: 1.8em;
    margin-bottom: 30px;
  }
  span {
    font-size: 1.1em;
  }

  article {
    margin: 0px;
    font-size: 1.2em;
    p {
      line-height: 25px;
      margin: 15px 0;
    }
    h2 {
      font-size: 1.2em;
      font-weight: 900;
      margin: 20px 0 15px 0;
    }
    ul {
      margin-bottom: 25px;
    }
    li {
      // font-size: 1.2em;
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
      height: 8rem;
      text-align: center;
      width: 100%;
      &:hover {
        background: #eee;
        color: #333;
      }
      i {
        color: rgba(0, 0, 0, 0.95);
        font-size: 3.8em;
      }
    }
    h2 {
      color: rgba(0, 0, 0, 0.95);
      font-size: 0.8em;
      font-weight: normal;
      margin: 10px 0px;
    }
  }
}

@media (max-width: 1024px) {
  section {
    margin: 0px;
    header {
      text-align: center;
      padding: 0 25px;
      img {
        background: $color-primary;
        border-radius: 100%;
        margin: 25px auto;
      }
    }
    article {
      font-size: 1em;
      padding: 0 25px;
    }
  }
  .grid-default {
    grid-template-columns: 1fr;
    article {
      margin: 0;
      padding: 0;
      border: 1px solid rgba($color: #ccc, $alpha: 0.5);
      div{
        height: 0;
        padding: 0px 0 30px 0;
      }
      .icon {
        font-size: 1.6em;
        padding-top: 10px;
      }
      h2{
        font-size: 1.1em;
        padding-left: 10px;
      }
    }
  }
}



@media (max-width: 450px) {
  header {
    h1 {
      font-size: 1.8em;
    }
    h2 {
      font-size: 1.3em;
      line-height: 30px;
    }
  }
}
@media (min-width: 451px) and (max-width: 800px) {
  header {
    h1 {
      font-size: 3em;
    }
    h2 {
      font-size: 1.7em;
    }
  }
}

@media (max-width: 300px) {
  header {
    h1 {
      font-size: 1em;
    }
    h2 {
      font-size: 1em;
      line-height: 25px;
    }
    img{
      max-width: 100px;
    }
  }
}
</style>