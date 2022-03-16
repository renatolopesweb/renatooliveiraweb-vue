<template>
  <article>
    <h1>RENATO OLIVEIRA</h1>
    <h2>WEBDESIGN / FRONTEND</h2>
  </article>
</template>

<script>
export default {
  data() {
    return {
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
        {
          title: "Flickr",
          img: "fab fa-flickr",
          url: "https://github.com/renato7oliveira",
        },
      ],

      skills: [
        {
          categ: { content: "Code" },
          list: { content: "JS · TS · HTML5 · Sass + CSS3" },
        },
        {
          categ: { content: "FW" },
          list: { content: "Angular · Ionic" },
        },
        {
          categ: { content: "Design" },
          list: { content: "XD · Photoshop" },
        },
        {
          categ: { content: "Marketing" },
          list: { content: "Wordpress" },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
article {
  display: grid;
  height: calc(100vh - 50px);
  align-content: center;
  h2 {
    color: var(--color-black);
    font-size: 2.4em;
    font-weight: 500;
  }
}

@media (max-width: 1100px) {
  article {
    text-align: center;
    h2 {
      font-size: 2em;
    }
  }
}
</style>