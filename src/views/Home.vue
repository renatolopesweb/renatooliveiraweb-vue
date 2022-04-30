<template>
  <section>
    <header>
      <h1>RENATO OLIVEIRA</h1>
      <h2>FRONT-END DEV.</h2>
    </header>
    <article>
      <div class="description">
        <h2>Sobre</h2>
        <p>
          Olá, sou o <strong>RENATO OLIVEIRA</strong>, formado em Comunicação
          Web pela UNIP. +10 anos trabalhando com front-end e design (UI).
          Onipresente em áreas de Comunicação, Marketing e TI.
        </p>

        <p>
          A missão de um taurino é transformar as sementes em substância, talvez seja
          por isso que me identifico com web.
        </p>

        <p>
          <strong>Amo</strong>: São Paulo (onde vivo), Profissão, MPB,
          Transporte público, Pedalar, TV, Cinema, Ser pai da AnaLu e da
          “Cyndi”.
        </p>

        <!-- <p>
          <strong>Para RH ver</strong>: Ser humano que codifica websites,
          landpages, dashboards, e-mail marketing; Utiliza ferramentas CMS como
          wordpress; Prototipação de interfaces, Tratamento de imagens.
        </p> -->

        <div class="btn-content" @click="toTop()">
          <router-link to="/skills" class="btn"
            ><i class="fas fa-chess-knight"></i>Skills</router-link
          >
        </div>
      </div>
      <figure>
        <img
          src="../assets/images/renato-oliveira-web.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>
    </article>
  </section>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  data() {
    return {
      social: [
        {
          title: "Linkedin",
          img: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/renatooliveiraweb",
        },
        {
          title: "Instagram",
          img: "fab fa-instagram",
          url: "https://www.instagram.com/renatooliveiraweb",
        },
        {
          title: "Github",
          img: "fab fa-github-alt",
          url: "https://github.com/renato7oliveira",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 0;
}
header {
  display: grid;
  align-content: center;
  height: 100vh;
  padding: var(--df-padding);
  h1 {
    // font-size: 4.6em;
    font-size: 5vw;
    margin: 0;
    // animation: hello 0.5s ease-in-out;
  }
  h2 {
    color: var(--color-black);
    // font-size: 3em;
    font-size: 4vw;
    font-weight: 900;
    margin: 0;
  }
}
@media (max-width: 1000px) {
  header {
    padding: 25px;
    h1 {
      font-size: 8vw;
    }
    h2 {
      font-size: 7vw;
    }
  }
}
article {
  display: grid;
  grid-template-columns: auto 300px;
  grid-gap: 75px;
  grid-template-areas: "desc photo";
  align-content: center;
  background: var(--color-primary);
  color: #fff;
  min-height: 100vh;
  padding: var(--df-padding);
  .description {
    grid-area: desc;
  }
  h2 {
    color: #fff;
    font-size: 4.2em;
    font-weight: 900;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 1.8em;
    font-weight: 900;
  }
  p {
    font-size: 1.1em;
    font-weight: 300;
    line-height: 30px;
    margin-bottom: 30px;
  }
  figure {
    display: grid;
    align-content: center;
    grid-area: photo;
    img {
      width: 100%;
    }
  }
}
.btn-content {
  display: flex;
  gap: 25px;
  padding-bottom: 50px;
}
.btn {
  background-color: rgba($color: #000, $alpha: 0.4);
  border: 0;
  border-radius: var(--df-border-radius);
  box-shadow: var(--box-shadow);
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
  color: #fff;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: 500;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    background: none;
  }
  i {
    margin-right: 5px;
  }
}
@media (max-width: 1100px) {
  .btn-content {
    flex-direction: column;
    margin-bottom: 50px;
  }
}
@media (max-width: 800px) {
  article {
    grid-template-columns: 1fr;
    grid-gap: 0;
    grid-template-areas:
      "photo"
      "desc";
    height: auto;
    padding: 25px;
    h2 {
      font-size: 2em;
      margin-top: 25px;
    }
    h3 {
      font-size: 1.5em;
    }
  }
  .btn-content {
    margin-bottom: 25px;
  }
}
</style>