<template>
  <section>
    <article
      v-for="(item, article) in projects.front"
      :key="article"
      class="card"
    >
      <figure>
        <a :href="item.url" target="_blank">
          <img :src="item.screen" :alt="item.title" :title="item.title" />
        </a>
      </figure>
      <div>
        <h2>{{ item.intro }}</h2>
        <h3>{{ item.title }}</h3>
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
            intro: "Landpage",
            title: "Starbucks Clone",
            url: "https://renato7oliveira.github.io/experimentos/Starbucks/src/",
            screen: require("../assets/images/thumb-links-starbucks.jpg"),
          },
          {
            intro: "Landpage",
            title: "Desafio CSS-Grid",
            url: "https://renato7oliveira.github.io/experimentos/Grid_CSS_Template_Canyon/src/",
            screen: require("../assets/images/thumb-links-canyon.jpg"),
          },
          {
            intro: "Website",
            title: "Tesla Clone",
            url: "https://renato7oliveira.github.io/experimentos/Tesla/src/",
            screen: require("../assets/images/thumb-links-tesla.jpg"),
          },
          {
            intro: "Email mkt (Old)",
            title: "Vivo",
            url: "https://renato7oliveira.github.io/experimentos/Email_Mkt/Vivo/index.html",
            screen: require("../assets/images/thumb-links-email-mkt-vivo.jpg"),
          },
          {
            intro: "Edge Animate (old)",
            title: "Street Fighter Tribute",
            url: "https://renato7oliveira.github.io/street-fighter-audio-project/",
            screen: require("../assets/images/thumb-links-street-fighter.jpg"),
          },
          // {
          //   intro: "UI",
          //   title: "PDV Cinema",
          //   url: "https://renato7oliveira.github.io/experimentos/Grid_CSS_Template_Canyon/src/",
          //   screen: require("../assets/images/w1.jpg"),
          // },
          // {
          //   intro: "UI",
          //   title: "PDV Cinema",
          //   url: "https://renato7oliveira.github.io/experimentos/Grid_CSS_Template_Canyon/src/",
          //   screen: require("../assets/images/w1.jpg"),
          // },
        ],
      },
    };
  },
};
</script>



<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  align-content: center;
  article {
    padding: 0;
    &:hover {
      transform: translateY(-12px);
    }
    &:active {
      transform: translateY(0px);
    }
  }
  img {
    width: 100%;
    border-radius: 3px 3px 0 0;
  }
  div {
    margin: 25px;
  }
  h2 {
    font-size: 1em;
    font-weight: 500;
    text-transform: uppercase;
  }
  h3 {
    font-size: 1.2em;
    font-weight: 900;
    margin-top: 10px;
  }
}

@media (max-width: 1100px) {
  section {
    grid-template-columns: 1fr;
    margin: 25px;
    padding-bottom: 60px;
    article {
      div {
        margin: 25px;
      }
    }
  }
}
</style>