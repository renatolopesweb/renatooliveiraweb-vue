<template>
  <div>
    <section class="internal lab">
      <article v-for="(item , article) in articles" :key="article" @click="shareData(article)">
        <img :src="item.screen" :title="item.title" :alt="item.title" />
        <h2>{{item.title}}</h2>
      </article>
    </section>
  </div>
  <!-- <router-link to="/lab"><button class="btn btn_home">Laboratório →</button></router-link> -->
</template>
<script>
export default {
  name: "Lab",
  data() {
    return {
      articles: [
        {
          screen: require("../assets/images/portfolio-beatles.jpg"),
          title: "Beatles Tributo",
          description: `
                    Singela homenagem a melhor banda do mundo. Interessante aqui foi o modal componentizado do vueJs.
                    `,
          url: "https://renato7oliveira.github.io/beatles-tributo/src/index.html",
          tags: ["vue", "css grids" , "photoshop"],
        },
        {
          screen: require("../assets/images/portfolio-street-fighter.jpg"),
          title: "Street Fighter Tributo (old school)",
          description: `
                    Melhor experiência no desktop mas é responsivo. As imagens são do Pinterest, creditei no Readme.  
                    Demora para carregar pois tem vídeo introdutório, vale a pena esperar :·)
                    `,
          url: "https://renato7oliveira.github.io/street-fighter-audio-project",
          tags: ["edge", "photoshop" , "design"],
        },
        {
          screen: require("../assets/images/portfolio-breaking-infografico.jpg"),
          title: "Infográfico do Breaking Bad",
          description: `
          Criei este infográfico com frases intrigantes dos personagens da minha série favorita💕
          `,
          url: "https://br.pinterest.com/pin/102949541465385965/",
          tags: ["Illustrator"],
        },
        {
          screen: require("../assets/images/portfolio-breaking-bad-video.jpg"),
          title: "Breaking Bad Slide Show",
          description: "Um slide show básico com imagens da série.",
          url: "https://www.youtube.com/watch?v=qHwl86jkmGg",
          tags: ["Premiere"],
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
.lab {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 55px;
  article {
    box-shadow: 1px 1px 3px #ccc;
    transition: 0.5s;
    background: #fff;

    &:hover {
      box-shadow: 1px 1px 3px #999;
      cursor: pointer;
      transform: translateY(-5px);
    }
    &:active {
      box-shadow: 1px 1px 3px #999;
      transform: translateY(0px);
    }
    h2 {
      font-size: 1em;
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
  .lab {
    grid-template-columns: 1fr;
  }
}
/* MEDIA QUERIES END  */
</style>