<template>
  <section>
    <h1>Links</h1>
    <article
      v-for="(item, article) in projects.front"
      :key="article"
      class="card"
    >
    <figure>
          <a :href="item.url" target="_blank"><img :src="item.screen" :alt="item.title" :title="item.title" /></a>
        </figure>
      <h2>{{ item.title }}</h2>
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
            screen: require("../assets/images/thumb-links-speed-locacoes.jpg"),
            title: "Speed Locações (Freelance)",
            url: "https://www.speedlocacoes.com.br",
          },
          {
            screen: require("../assets/images/thumb-links-landpage-verao.jpg"),
            title: "SVG Landpage (Greensocks)",
            url: "https://renato7oliveira.github.io/svg-animate/src/",
          },
          {
            screen: require("../assets/images/thumb-landpage-links-canyon.jpg"),
            title: "Landpage Genérica (CSS-Grid / Sass)",
            url: "https://renato7oliveira.github.io/landpage-generica/src/",
          },
          {
            screen: require("../assets/images/thumb-links-street-fighter.jpg"),
            title: "Street Fighter Tribute (Adobe Edge)",
            url: "https://renato7oliveira.github.io/street-fighter-audio-project/",
          },
        ],
      },
    };
  },
};
</script>


<style scoped lang="scss">
h1 {
  grid-row: 1;
  grid-column: 1 / -1;
  margin-bottom: 0px;
}
section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding-bottom: 150px;
}
article {
  background: #fff;
  transition: 0.3s;
  h2{
    color: var(--color-primary);
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    padding: 20px;
    text-decoration: none;
    text-transform: none;
  }
  &:hover{
    transform: translateY(-10px);
  }
  &:active{
    transform: translateY(0);
  }

}
@media (max-width: 900px) {
  h1{
    // margin-bottom: 20px;
  }
  section {
    grid-template-columns: 1fr;
    // grid-gap: 20;
    padding-bottom: 100px;
  }
  .card{
    margin: 0;
  }
}


</style>