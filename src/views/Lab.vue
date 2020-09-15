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
          screen: require("../assets/images/portfolio-street-fighter.jpg"),
          title: "Street Fighter Tribute (old school)",
          description: `
                    Sua interface é fluída portanto a melhor experiência é desktop.
                    As imagens foram retiradas do Pinterest.  
                    Demora um pouco para carregar pois tem um vídeo na introdução, mas vale a pena esperar :·)
                    `,
          url: "https://renato7oliveira.github.io/street-fighter-audio-project",
          tags: ["edge", "photoshop"],
        },
        {
          screen: require("../assets/images/portfolio-breaking-infografico.jpg"),
          title: "Infográfico do Breaking Bad",
          description: `
          Criei este infográfico com fotos e frases intrigantes dos personagens da minha série favorita.
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