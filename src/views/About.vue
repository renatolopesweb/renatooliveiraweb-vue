<template>
  <article>
    <h1>Sobre</h1>
    <div class="about">
      <div class="description">
        <p>
          Olá, sou o <span><strong>Renato Oliveira</strong></span
          >, +10 anos que trabalho na web com Frontend e Design (UI).
          Normalmente estou em divisões de Marketing, TI & Comunicação. Moro em
          São Paulo, casado com a Delma, pai da Ana Luiza e da "Cyndi".
        </p>
      </div>
      <figure>
        <img
          src="../assets/images/renato-oliveira-web.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>
    </div>
    <h2>Habilidades</h2>
    <section class="skills">
      <article v-for="(item, article) in skills" :key="article">
        <figure>
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
          icon: { content: "fas fa-code" },
          list: {
            content:
              "ANGULAR · Ionic · TS · JS · Sass + CSS · HTML5 · NPM · Github",
          },
        },
        {
          categ: { content: "Design" },
          icon: { content: "fab fa-sketch" },
          list: { content: "XD · Photoshop" },
        },
        {
          categ: { content: "Marketing" },
          icon: { content: "fas fa-bullhorn" },
          list: { content: "Wordpress · E-mail mkt" },
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: auto 175px;
  grid-template-areas: "desc photo";
  grid-gap: 25px;
  .description {
    grid-area: desc;
  }
  p {
    font-size: 1.2em;
    line-height: 30px;
    margin-bottom: 22px;
  }
  img {
    grid-area: photo;
    border-radius: 100%;
    cursor: none;
    filter: grayscale(1);
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
  margin-top: 30px;
  figure {
    display: grid;
    align-content: center;
    background-color: rgba($color: #ccc, $alpha: 0.5);
    height: 160px;
    text-align: center;
    i {
      color: rgba($color: #000, $alpha: 0.8);
      font-size: 4em;
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
    text-transform: uppercase;
    p {
      line-height: 30px;
    }
  }
}
@media (max-width: 900px) {
  .skills {
    grid-template-columns: 1fr;
    margin-bottom: 25px;
  }
}
</style>