<template>
  <section>
    <h1>Links</h1>
    <div>
      <article v-for="(item, article) in projects.front" :key="article">
      <h2>
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </h2>
      <span>{{ item.stack }}</span>
    </article>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      projects: {
        front: [
          {
            title: "Speed Locações",
            stack: "Wix! / Freelance",
            url:
              "https://www.speedlocacoes.com.br"
          },
          {
            title: "Teste Responsivo",
            stack: "Javascript / Materialize",
            url:
              "https://renato7oliveira.github.io/teste-responsivo/src/"
          },
          {
            title: "Landpage Genérica",
            stack: "Sass / CSS-Grid",
            url:
              "https://renato7oliveira.github.io/landpage-generica/src/"
          },
          {
            title: "Street Fighter Tribute",
            stack: "Edge Animate (old school)",
            url:
              "https://renato7oliveira.github.io/street-fighter-audio-project/"
          },
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
div{
  display: flex;
  flex-wrap: wrap;
  gap: 90px;
}
article{
  h2{
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 5px;
    text-transform: none;
  }
  span{
    color: #000;
    font-size: 0.9rem;
    font-style: italic;
  }
}
@media(max-width: 900px){
  div{
    gap: 25px 50px;
  }
}
</style>