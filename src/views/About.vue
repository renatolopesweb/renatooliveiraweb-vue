<template>
  <article>
    <h1>Sobre</h1>
    <div class="about">
      <article class="description">
        <p>
          Olá, sou o <span>RENATO OLIVEIRA</span>, pai da Ana Luiza e da
          "Cyndi".
        </p>
        <p>
          +10 anos trabalhando na web, presente em áreas de Comunicação,
          Marketing e TI, atuando no desenvolvimento front-end e design (UI).
          Também tive oportunidade de atuar com gestão de projetos web, ou seja
          fiquei no time do cliente.
        </p>
        <p>
          <span>Para RH ver</span>: Qualificado para codificar websites,
          landpages, dashboards, e-mail marketing; Utilizar API's; Utilizar
          ferramentas CMS como wordpress; Prototipação de interfaces; Conduzir
          projetos web.
        </p>
        <p>
          <a @click="skillsContent = true" href="#skills" class="btn"
            ><i class="fas fa-eye"></i> Ver Habilidades</a
          >
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
    <section class="skills-content" id="skills" v-show="skillsContent">
      <h2>Habilidades</h2>
      <article
        class="skills-grid"
        v-for="(item, article) in skills"
        :key="article"
      >
        <div class="intro_category">
          <h3>{{ item.categ.title }}</h3>
        </div>
        <article
          class="card"
          v-for="item in item.lists"
          :key="item.list"
          :title="item.title"
        >
          <figure :style="item.bg">
            <i :class="item.logo" aria-hidden="true"></i>
          </figure>
          <div>
            <h2>{{ item.title }}</h2>
          </div>
        </article>
      </article>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      skillsContent: false,

      skills: [
        {
          categ: { title: "Code" },
          lists: [
            // {
            //   logo: "fab fa-angular",
            //   bg: "background-color: #D82D2F",
            //   title: "Angular",
            // },
            {
              logo: "fab fa-js",
              bg: "background-color: #D99A26",
              title: "Javascript",
            },
            {
              logo: "fab fa-html5",
              bg: "background-color: #DD4B25",
              title: "HTML5",
            },
            {
              logo: "fab fa-css3-alt",
              bg: "background-color: #254BDD",
              title: "CSS3",
            },
            {
              logo: "fab fa-sass",
              bg: "background-color: #C76494",
              title: "Sass",
            },
            {
              logo: "fab fa-npm",
              bg: "background-color: #CB3837",
              title: "NPM",
            },
            {
              logo: "fab fa-github",
              bg: "background-color: #1B1F23",
              title: "Github",
            },
          ],
        },
        {
          categ: { title: "Visual" },
          lists: [
            {
              logo: "fab fa-sketch",
              bg: "background-color: #450135",
              title: "XD",
            },
            {
              logo: "fas fa-image",
              bg: "background-color: #001631",
              title: "Photoshop",
            },
            {
              logo: "fab fa-bootstrap",
              bg: "background-color: #512198",
              title: "Bootstrap",
            },
          ],
        },
        {
          categ: { title: "Marketing" },
          lists: [
            {
              logo: "fab fa-wordpress",
              bg: "background-color: #1F6F93",
              title: "Wordpress",
            },
            {
              logo: "fas fa-bullhorn",
              bg: "background-color: #5E4C9A",
              title: "E-mail mkt",
            },
          ],
        },
      ],

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
p {
  font-size: 1.2em;
  font-weight: 400;
  line-height: 35px;
}
.about {
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  grid-template-areas: "desc card-info";
  grid-gap: 0 75px;
  .description {
    grid-area: desc;
    p {
      margin-bottom: 25px;
    }
    .btn {
      background-image: linear-gradient(#fff, #f0f0f0);
      border: 0;
      border-radius: var(--default-border-radius);
      box-shadow: var(--box-shadow);
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);
      cursor: pointer;
      font-size: 0.8em;
      font-weight: 700;
      padding: 20px 40px;
      text-align: center;
      text-transform: uppercase;
      &:hover {
        background-image: linear-gradient(#f0f0f0, #fff);
      }
    }
    a {
      color: var(--color-black);
    }
  }
  .card-info {
    grid-area: card-info;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 800px) {
  .about {
    grid-template-columns: 1fr;
    grid-template-areas:
      "card-info"
      "desc";
    padding-bottom: 75px;
    .description {
      p {
        margin-top: 25px;
      }
      .btn {
        display: block;
        padding: 10px 0;
      }
    }
  }
}
.card {
  background: #fff;
  border-radius: var(--default-border-radius);
  img {
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
.intro_category {
  grid-row: 1;
  grid-column: 1 / -1;
}
#skills {
  margin-top: 75px;
  padding-top: 25px;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-auto-flow: row;
  // flex-wrap: wrap;
  grid-gap: 25px;
  // margin-bottom: 75px;
  margin-top: 25px;
  h3 {
    font-weight: 900;
    margin-top: 25px;
  }
  article {
    max-width: 100px;
    transition: 0.3s;
    &:hover {
      transform: translateY(-10px);
    }
    figure {
      display: grid;
      align-content: center;
      height: 120px;
      text-align: center;
      i {
        color: rgba($color: #fff, $alpha: 0.9);
        font-size: 3em;
      }
    }
    div {
      padding: 10px;
      text-align: center;
      h2 {
        color: var(--color-black);
        font-size: 0.8em;
        margin: 0;
        text-transform: none;
      }
    }
  }
}
@media (max-width: 1000px) {
  #skills {
    margin-top: 0px;
    padding-top: 25px;
    padding-bottom: 100px;
  }
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    article {
      min-width: 100%;
    }
  }
}
</style>