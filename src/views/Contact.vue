<template>
  <section>
    <h1>Contato</h1>
    <h2>Minhas Redes Sociais</h2>
    <ul>
      <li v-for="item in social" :key="item.id">
        <a :href="item.url" target="_blank" :title="item.title"
          ><i :class="item.img" aria-hidden="true"></i> {{ item.title }}</a
        >
      </li>
    </ul>
    <!-- <h2>Experimentos Web</h2>
    <ul>
      <li v-for="(item, article) in projects.front" :key="article">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </li>
    </ul> -->
  </section>
</template>


<script>
export default {
  data() {
    return {
      projects: {
        front: [
          {
            title: "Landpage CSS-Grid",
            url: "https://renato7oliveira.github.io/experimentos/Grid_CSS_Template_Canyon/src/",
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

<style scoped lang="scss">
ul {
  margin-bottom: 75px;
}
li {
  font-size: 1.1em;
  margin-top: 15px;
  i {
    text-align: center;
    width: 20px;
  }
  a {
    color: var(--color-primary);
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>