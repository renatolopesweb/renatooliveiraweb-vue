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
  h1 {
    // font-size: 4.6em;
    font-size: 5vw;
    margin: 0;
    // animation: hello 0.5s ease-in-out;
  }
  h2 {
    color: var(--color-black);
    // font-size: 3em;
    font-size: 3vw;
    font-weight: 900;
    margin: 0;
  }
}

@media (max-width: 1100px) {
  article {
    text-align: center;
    h1 {
      font-size: 3em;
    }
    h2 {
      font-size: 2em;
    }
  }
}

@keyframes hello{
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
}

</style>