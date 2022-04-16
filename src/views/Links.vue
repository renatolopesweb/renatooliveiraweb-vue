<template>
  <article>
    <h1>Links</h1>
    <!-- <h2>Web</h2> -->
    <ul>
      <li v-for="(item, article) in projects.front" :key="article">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </li>
    </ul>
    <!-- <p>Atualização em bem breve 2022 ❤</p> -->
  </article>
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
            title: "Landpage Starbucks Clone",
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
  margin-bottom: 50px;
}

li {
  font-size: 1.2em;
  margin-bottom: 20px;
  a {
    color: var(--color-black);
    &:hover {
      background: rgba($color: #ccc, $alpha: 0.5);
      border-radius: var(--default-border-radius);
      border: 1px solid #ccc;
      padding: 10px;
      &:active {
        background: #fff;
      }
    }
  }
}
</style>