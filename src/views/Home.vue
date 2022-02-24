<template>
  <section>
    <section class="section-hello">
      <article>
        <h2>
          Olá,<br />
          Sou o <span>Renato</span><br />
          Web Designer
        </h2>
        <!-- <p>
          <a href="" class="btn btn-primary"
            ><i class="fas fa-gamepad"></i> Projetos</a
          >
        </p> -->
      </article>
      <figure>
        <img
          src="../assets/images/renato-oliveira-web.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>
    </section>
    <section class="section-about">
      <article>
        <p>
          Meu nome é Renato Oliveira, sou de São Paulo/SP, casado com a Delma,
          pai da Ana Luiza e da "Cyndi". Adepto ao café, água e
           <a href="https://www.flickr.com/people/195006687@N08/" target="_blank">fotos</a>.
        </p>
        <p>
          +10 anos que trabalho na web com desenvolvimento frontend e
          gerenciamento de projetos digitais. Já fiz parte de equipes de TI,
          Comunicação & Marketing. Minha formação é Comunicação Web pela UNIP.
        </p>
        <h2>Contato</h2>
        <p>
          Me encontre nessas redes:
          <span v-for="item in social" :key="item.id">
            <a :href="item.url" target="_blank" :title="item.title"
              ><i :class="item.img" aria-hidden="true"></i
            ></a>
          </span>
        </p>
      </article>
    </section>
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
          url: "https://www.linkedin.com/in/renato7oliveira",
        },
        {
          title: "Github",
          img: "fab fa-github",
          url: "https://github.com/renato7oliveira",
        },
        {
          title: "Instagram",
          img: "fab fa-instagram",
          url: "https://www.instagram.com/renato7oliveira",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-hello {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "description figure";
  // grid-gap: 50px;
  height: calc(100vh - 125px);
  align-items: center;
  article {
    grid-area: description;
    h2 {
      font-size: 3em;
      font-weight: 900;
      // line-height: 12vh;
      span {
        color: var(--color-primary);
      }
    }
  }
  figure {
    grid-area: figure;
    img {
      filter: grayscale(1);
      border: 50px double #f0f0f0;
      border-radius: 100%;
      transition: var(--default-transition);
      width: 100%;
      &:hover {
        cursor: none;
        filter: grayscale(0);
      }
    }
  }
}
.section-about {
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  align-items: center;
  background: var(--color-primary);
  color: #fff;
  font-size: 1.2em;
  height: calc(100vh - 50px);
  left: 0;
  position: absolute;
  article {
    grid-column: 2 / 2;
  }
  p {
    margin-bottom: 40px;
  }
  a {
    color: #fff;
    text-decoration: underline;
  }
  i {
    font-size: 1.4em;
    margin: 0 5px;
    &:hover{
      opacity: 0.5;
    }
  }
}
@media (max-width: 1100px) {
  .section-hello {
    padding: 0 25px;
  }
  .section-about {
    padding: 50px;
  }
}

@media (max-width: 700px) {
  .section-hello {
    grid-template-columns: 1fr;
    grid-template-areas:
      "figure"
      "description";
    // grid-gap: 50px;
    align-content: center;
    // height: calc(100vh - 150px);
    height: 100vh;
    text-align: center;
    article {
      h2 {
        font-size: 2em;
        // line-height: 6vh;
      margin-bottom: 50px;
      }
    }
    figure {
      img {
        border: 25px double #f0f0f0;
        width: 75%;
      }
    }
  }
  .section-about {
    grid-template-columns: 1fr;
    height: auto;
    padding: 25px;
  }
}
</style>