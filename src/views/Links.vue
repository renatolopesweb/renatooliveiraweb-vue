<template>
  <section>
    <article v-for="(item, article) in projects.front" :key="article">
      <figure>
        <img :src="item.screen" :alt="item.screen" />
      </figure>
      <div>
        <h2>{{ item.intro }}</h2>
        <h3>{{ item.title }}</h3>
        <p>
          {{ item.description }}
        </p>
        <p>
          <a class="hover" target="_blank" :href="item.url"
            ><i class="fas fa-external-link-alt" aria-hidden="true"></i>Link do
            projeto</a
          >
        </p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: {
        front: [
          {
            intro: "Website",
            title: "Clone Starbucks",
            description: "Crédito de design para Nicepage",
            url: "https://renato7oliveira.github.io/experimentos/Starbucks/src/",
            screen: require("../assets/images/thumb-links-starbucks.jpg"),
          },
          {
            intro: "Landpage",
            title: "Desafio CSS-Grid",
            description:
              "Recebi este design em Photoshop e estruturei com Sass + CSS-Grid + fontAwesome",
            url: "https://renato7oliveira.github.io/experimentos/Grid_CSS_Template_Canyon/src/",
            screen: require("../assets/images/thumb-links-canyon.jpg"),
          },
          {
            intro: "Website",
            title: "Clone Tesla (Header)",
            description: "Usando Flex-box e CSS3 animate",
            url: "https://renato7oliveira.github.io/experimentos/Tesla/src/",
            screen: require("../assets/images/thumb-links-tesla.jpg"),
          },
          {
            intro: "Hotsite",
            title: "Street Fighter Tribute (oldSchool)",
            description: "Projeto interativo feito com Adobe Edge, demora um pouco para carregar",
            url: "https://renato7oliveira.github.io/street-fighter-audio-project/",
            screen: require("../assets/images/thumbs-links-fighter.jpg"),
          },
        ],
      },
    };
  },
};
</script>



<style lang="scss" scoped>
.head :nth-child(3) {
  text-align: center;
}

article {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "figure figure description description";
  grid-gap: 100px;
  align-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding: 25px 0;
  figure {
    grid-area: figure;
    img {
      width: 100%;
    }
  }
  div {
    grid-area: description;
  }
  h2 {
    color: #999;
    font-size: 1em;
    font-weight: 500;
    text-transform: uppercase;
  }
  h3 {
    font-size: 1.6em;
  }
  p {
    line-height: 30px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
  i {
    font-size: 0.7em;
    margin-right: 5px;
  }
  a {
    color: var(--color-primary);
  }

  span {
    color: #ff5f04;
  }
}

@media (max-width: 1200px) {
  article {
    grid-template-columns: 1fr;
    grid-template-areas:
      "figure"
      "description";
    grid-gap: 0px;
    padding: 0;
    img {
      margin-bottom: 10px;
    }
    div {
      padding: 0 10px;
      margin-bottom: 25px;
    }
  }
}

</style>