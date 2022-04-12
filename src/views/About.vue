<template>
  <article>
    <h1>Sobre</h1>
    <div class="about">
      <div class="description">
        <p>
          Olá, sou o <span><strong>Renato Oliveira</strong></span
          >, +10 anos que trabalho na web com Frontend e Design (UI).
          Normalmente estou em divisões de Marketing, TI & Comunicação. Moro em
          São Paulo, casado com a Delma, pai da Ana Luiza e da "Cyndi". Veja abaixo minhas <strong>habilidades</strong>.
        </p>
        <!-- <p>
          Olá, sou o <span><strong>Renato Oliveira</strong></span
          >, +10 anos que trabalho na web com Frontend e Design (UI).
          Normalmente estou em divisões de Marketing, TI & Comunicação. Moro em
          São Paulo, casado com a Delma, pai da Ana Luiza e da "Cyndi".
        </p> -->
      </div>
      <figure>
        <img
          src="../assets/images/renato-oliveira-web22.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>
    </div>
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
      skills: [
        {
          categ: { content: "Code" },
          icon: { content: "fas fa-code-branch" },
          bg: { content: "skills-bg-code" },
          list: {
            content: "Angular · Vue · TS · JS · Sass + CSS · HTML5 · NPM · Github",
          },
        },
        {
          categ: { content: "Visual" },
          icon: { content: "fab fa-sketch" },
          bg: { content: "skills-bg-design" },
          list: { content: "XD · Photoshop" },
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
  grid-template-columns: auto 175px;
  grid-template-areas: "desc photo";
  grid-gap: 75px;
  .description {
    grid-area: desc;
  }
  img {
    grid-area: photo;
    border-radius: 100%;
    cursor: none;
    // filter: grayscale(1);
    width: 100%;
    &:hover {
      filter: grayscale(0);
    }
  }
}
@media (max-width: 500px) {
  .about {
    grid-template-columns: 1fr;
    grid-template-areas:
      "photo"
      "desc";
    figure {
      text-align: center;
      img {
        margin-top: 25px;
        width: 75%;
      }
    }
  }
}
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  margin-top: 25px;
  figure {
    display: grid;
    align-content: center;
    // background-color: rgba($color: #ccc, $alpha: 0.5);
    height: 180px;
    text-align: center;
    i {
      color: rgba($color: #fff, $alpha: 0.9);
      font-size: 6em;
    }
  }
  article {
    box-shadow: var(--box-shadow);
    transition: 0.3s;
    &:hover {
      transform: translateY(-10px);
    }
  }
  div {
    padding: 25px;
    // text-transform: uppercase;
  }
}
.skills-bg-code {
  background: var(--color-primary);
}
.skills-bg-design {
  background: #0A4791;
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