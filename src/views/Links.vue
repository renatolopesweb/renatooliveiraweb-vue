<template>
  <section>
    <h1>Links</h1>
    <ul>
      <li v-for="(item, article) in projects.front" :key="article">
         {{ item.title }} <a :href="item.url" target="_blank" title="Ver case"><i class="fas fa-external-link-alt"></i></a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: {
        front: [
          {
            title: "Landpage Genérica",
            url: "https://renato7oliveira.github.io/experimentos/Grid_CSS_Template_Canyon/src/",
          },
          {
            title: "Starbucks Clone",
            url: "https://renato7oliveira.github.io/experimentos/Starbucks/src/",
          },
          {
            title: "Header Tesla",
            url: "https://renato7oliveira.github.io/experimentos/Tesla/src/",
          },
          {
            title: "E-mail Marketing VIVO (HTML 1.0)",
            url: "https://renato7oliveira.github.io/experimentos/Email_Mkt/Vivo/index.html",
          },
          {
            title: "Street Fighter Animate (Old School)",
            url: "https://renato7oliveira.github.io/street-fighter-audio-project/",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin-bottom: 75px;
}
li {
  font-size: 1.2em;
  margin-bottom: 20px;
  a {
    color: var(--color-primary);
    &:hover {
      color: rgba($color: #999, $alpha: 0.7);
    }
  }
}
</style>