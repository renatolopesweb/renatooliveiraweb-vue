<template>
  <section>
    <h1>Skills</h1>
    <article class="skills-content">
      <article
        class="skills-grid"
        v-for="(item, article) in skills"
        :key="article"
      >
        <div class="intro_category">
          <h2>{{ item.categ.title }}</h2>
        </div>
        <article
          class="card"
          v-for="item in item.lists"
          :key="item.list"
          :title="item.title"
        >
          <figure>
            <i :class="item.logo" :style="item.bg" aria-hidden="true"></i>
          </figure>
          <div>
            <h3>{{ item.title }}</h3>
          </div>
        </article>
      </article>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          categ: { title: "Code" },
          lists: [
            // {
            //   logo: "fab fa-angular",
            //   bg: "color: #D82D2F",
            //   title: "Angular",
            // },
            {
              logo: "fab fa-js",
              bg: "color: #D99A26",
              title: "Javascript",
            },
            {
              logo: "fab fa-html5",
              bg: "color: #DD4B25",
              title: "HTML5",
            },
            {
              logo: "fab fa-css3-alt",
              bg: "color: #254BDD",
              title: "CSS3",
            },
            {
              logo: "fab fa-sass",
              bg: "color: #C76494",
              title: "Sass",
            },
            {
              logo: "fab fa-npm",
              bg: "color: #CB3837",
              title: "NPM",
            },
            {
              logo: "fab fa-github",
              bg: "color: #1B1F23",
              title: "Github",
            },
          ],
        },
        {
          categ: { title: "Visual" },
          lists: [
            {
              logo: "fab fa-sketch",
              bg: "color: #450135",
              title: "XD",
            },
            {
              logo: "fas fa-image",
              bg: "color: #001631",
              title: "Photoshop",
            },
            {
              logo: "fab fa-bootstrap",
              bg: "color: #512198",
              title: "Bootstrap",
            },
          ],
        },
        {
          categ: { title: "Marketing" },
          lists: [
            {
              logo: "fab fa-wordpress",
              bg: "color: #1F6F93",
              title: "Wordpress",
            },
            {
              logo: "fas fa-bullhorn",
              bg: "color: #5E4C9A",
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
.card {
  background: #fff;
  border-radius: var(--df-border-radius);
  img {
    border-radius: var(--df-border-radius);
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
.skills-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-flow: row;
  // flex-wrap: wrap;
  grid-gap: 25px;
  // margin-bottom: 75px;
  margin-bottom: 50px;
  h2 {
    font-size: 1.2em;
    font-weight: 900;
    color: var(--color-black);
  }
  article {
    transition: 0.3s;
    &:hover {
      transform: translateY(-10px);
    }
    figure {
      display: grid;
      align-content: center;
      background: rgba($color: #ccc, $alpha: 0.3);
      height: 120px;
      text-align: center;
      i {
        color: rgba($color: #fff, $alpha: 0.9);
        font-size: 4em;
      }
    }
    div {
      padding: 10px;
      text-align: center;
      h3 {
        color: var(--color-black);
        font-size: 0.8em;
        font-weight: 700;
        text-transform: none;
      }
    }
  }
}
@media (max-width: 1000px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 25px;
  }
}
@media (max-width: 280px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>