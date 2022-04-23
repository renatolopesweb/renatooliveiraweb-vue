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
          Olá, sou o <strong>RENATO OLIVEIRA</strong>, moro em São Paulo/SP,
          formado em Comunicação Web pela UNIP. +10 anos trabalhando com
          front-end e design (UI). Onipresente em áreas de Comunicação,
          Marketing e TI.
        </p>

        <p>Pai da Ana Luiza e da “Cyndi”.</p>

        <h3>Redes Sociais</h3>

        <ul>
          <li v-for="item in social" :key="item.id">
            <a :href="item.url" target="_blank" :title="item.title"
              ><i :class="item.img" aria-hidden="true"></i> {{ item.title }}</a
            >
          </li>
        </ul>
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
article {
  display: grid;
  grid-template-columns: auto 350px;
  grid-gap: 75px;
  grid-template-areas: "desc photo";
  align-content: center;
  background: var(--color-primary);
  color: #fff;
  height: 100vh;
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
  li {
    font-size: 1.1em;
    margin-top: 15px;
    i {
      margin-left: -3px;
      text-align: center;
      width: 20px;
    }
    a {
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }
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
    ul{
      padding-bottom: 75px;
    }
  }
}
</style>