<template>
    <section>
      <article v-for="(item , article) in articles" :key="article" @click="shareData(article)">
        <img :src="item.screen" :title="item.title" :alt="item.title" />
        <h2>{{item.title}}</h2>
      </article>
    </section>
</template>
<script>
export default {
  name: "Lab",
  data() {
    
    return {

      articles: [
        {
          screen: require("../assets/images/portfolio-mobile-first.jpg"),
          title: "Responsive Test",
          url: "https://renato7oliveira.github.io/responsive-test/dist/index.html",
          tags: ["css grids" , "javascript"],
        },
        {
          screen: require("../assets/images/portfolio-clone-google.jpg"),
          title: "Clone Google Desafio",
          url: "https://renato7oliveira.github.io/clone-google/src/index.html",
          tags: ["css grids"],
        },
        {
          screen: require("../assets/images/portfolio-beatles.jpg"),
          title: "Beatles Tribute",
          url: "https://renato7oliveira.github.io/beatles-tributo/src/index.html",
          tags: ["css grids" , "vue"],
        },
        {
          screen: require("../assets/images/portfolio-street-fighter.jpg"),
          title: "Street Fighter Tribute (old school)",
          url: "https://renato7oliveira.github.io/street-fighter-audio-project",
          tags: ["edge", "photoshop"],
        },
      ],
    };
  },
  methods: {
    shareData(keyDetail) {
      this.$router.push({
        name: "PortfolioDetalhe",
        params: { data: this.articles[keyDetail] },
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>


<style lang="scss" scoped>
section{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  article {
    background: #fff;
    box-shadow: 0px 10px 13px -7px #ccc, 5px 5px 15px 5px rgba(0,0,0,0);
    transition: 0.5s;
    &:hover {
      cursor: pointer;
      transform: translateY(-5px);
    }
    &:active {
      transform: translateY(0px);
    }
    h2 {
      font-size: 0.9em;
      font-weight: normal;
      padding: 15px;
    }
    img {
      width: 100%;
    }
  }
}
/* MEDIA QUERIES START */
@media (max-width: 60em) {
  section{
    grid-template-columns: 1fr;
  }
}
/* MEDIA QUERIES END  */
</style>