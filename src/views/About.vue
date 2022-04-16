<template>
  <article>
    <h1>Sobre</h1>
    <div class="about">
      <article class="description">
        <p>
          Olá, sou o <span>RENATO OLIVEIRA</span>, pai da Ana Luiza e da "Cyndi".
        </p>
        <p>
          +10 anos trabalhando na web, presente em áreas de Comunicação, Marketing e TI,
          atuando no desenvolvimento front-end e design de
          interfaces (UI). Também tive oportunidade de atuar com gestão de
          projetos web, ou seja fiquei no time do cliente.
        </p>
        <p>
          <span>Para RH ver</span>: Qualificado para codificar websites,
          landpages, dashboards, e-mail marketing; Consumir API's e apresentar nas aplicações;  Utilizar ferramentas CMS como
          wordpress; Prototipação de interfaces; Conduzir projetos web.
        </p>
      </article>
      <article class="card card-info">
        <figure>
          <img
            src="../assets/images/renato-oliveira-web22.jpg"
            alt="Renato Oliveira Web"
            title="Renato Oliveira Web"
          />
        </figure>
        <div>
          <ul>
            <li v-for="item in social" :key="item.id">
              <a :href="item.url" target="_blank" :title="item.title"
                ><i :class="item.img" aria-hidden="true"></i>
                {{ item.title }}</a
              >
            </li>
          </ul>
        </div>
      </article>
    </div>
    <h2>+ Habilidades</h2>
    <section class="skills">
      <article
        v-for="(item, article) in skills"
        :key="article"
        :title="item.categ.content"
      >
        <figure :class="item.bg.content">
          <i :class="item.icon.content"></i>
        </figure>
        <div>
          <h3>{{ item.categ.content }}</h3>
          <p>{{ item.list.content }}</p>
        </div>
      </article>
    </section>
  </article>
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
      skills: [
        {
          categ: { content: "Code" },
          icon: { content: "fas fa-code" },
          bg: { content: "skills-bg-code" },
          list: {
            content:
              "Angular · Vue · TS · JS · Sass + CSS · HTML5 · NPM · Github",
          },
        },
        {
          categ: { content: "Design" },
          icon: { content: "fab fa-sketch" },
          bg: { content: "skills-bg-design" },
          list: { content: "XD · Photoshop · Bootstrap · Material UI" },
        },
        {
          categ: { content: "Marketing" },
          icon: { content: "fas fa-bullhorn" },
          bg: { content: "skills-bg-mkt" },
          list: { content: "Wordpress · E-mail mkt" },
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
p {
  font-size: 1.2em;
  font-weight: 400;
  line-height: 35px;
}
.about {
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  grid-template-areas: "desc card-info";
  grid-gap: 75px;
  .description {
    grid-area: desc;
    p {
      margin-bottom: 25px;
    }
  }
  .card-info {
    grid-area: card-info;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 500px) {
  .about {
    grid-template-columns: 1fr;
    grid-template-areas:
      "card-info"
      "desc";
  }
}
.card {
  border-radius: var(--default-border-radius);
  img{
    border-radius: var(--default-border-radius);
  }
  li {
    font-size: 1em;
    margin-bottom: 10px;
    a {
      color: var(--color-black);
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  margin-top: 25px;
  figure {
    display: grid;
    align-content: center;
    height: 180px;
    text-align: center;
    i {
      color: rgba($color: #fff, $alpha: 0.9);
      font-size: 5em;
    }
  }
  article {
    border-radius: var(--default-border-radius);
    box-shadow: var(--box-shadow);
    transition: 0.3s;
    &:hover {
      transform: translateY(-10px);
    }
  }
  div {
    padding: 25px;
  }
}
.skills-bg-code {
  background: var(--color-primary);
}
.skills-bg-design {
  background: #0a4791;
}
.skills-bg-mkt {
  background: #073772;
}
@media (max-width: 900px) {
  .skills {
    grid-template-columns: 1fr;
    margin-bottom: 25px;
  }
}
</style>