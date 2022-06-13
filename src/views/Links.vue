<template>
  <section>
    <h1>Links</h1>
    <!-- <h2>Minhas Redes Sociais</h2>
    <ul>
      <li v-for="item in social" :key="item.id">
        <a :href="item.url" target="_blank" :title="item.title"
          ><i :class="item.img" aria-hidden="true"></i> {{ item.title }}</a
        >
      </li>
    </ul> -->
    <!-- <h2>Experimentos Web</h2>-->


    <!-- <p>Em breve...🐶</p> -->
    <div v-for="(item, article) in projects.front" :key="article">
      <h2>
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </h2>
      <span>{{ item.stack }}</span>
    </div>


  </section>
</template>


<script>
export default {
  data() {
    return {
      projects: {
        front: [
          // {
          //   title: "Jade Arts",
          //   stack: "Next.js / Material Design",
          //   url: "https://next-amazona-phi.vercel.app/",
          // },
          // {
          //   title: "International Churchill Society",
          //   stack: "Wordpress / Bootstrap",
          //   url: "https://winstonchurchill.org/",
          // },
          {
            title: "Frontend Job Test",
            stack: "CSS-Grid / Sass",
            url: "https://renato7oliveira.github.io/experimentos/Grid_CSS_Template_Canyon/src/",
          },
          {
            title: "Street Fighter Animate",
            stack: "Adobe Edge (Old School)",
            url: "https://renato7oliveira.github.io/street-fighter-audio-project/",
          }
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
div {
  font-size: 1em;
  margin-bottom: 25px;
}
h2 {
  font-weight: normal;
  margin-bottom: 5px;
  text-transform: unset;
  a {
    color: var(--color-primary);
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>