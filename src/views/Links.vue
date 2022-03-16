<template>
  <article>
    <h1>Links</h1>
    <ul>
      <li>Atualização em bem breve 2022❤</li>
    </ul>
    <!-- <ul>
      <li v-for="(item, article) in projects.front"
      :key="article"><a :href="item.url" target="_blank">{{ item.title }}</a></li>
    </ul> -->
  </article>
</template>

<script>
export default {
  data() {
    return {
      projects: {
        front: [
          {
            title: "Starbucks Clone",
            url: "https://renato7oliveira.github.io/experimentos/Starbucks/src/",
          },
          {
            title: "CSS Challenge #1",
            url: "https://renato7oliveira.github.io/experimentos/Grid_CSS_Template_Canyon/src/",
          },
          {
            title: "Tesla Clone",
            url: "https://renato7oliveira.github.io/experimentos/Tesla/src/",
          },
          {
            title: "E-mail Marketing (HTML 1.0)",
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


</style>