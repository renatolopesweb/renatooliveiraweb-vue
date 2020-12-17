<template>
  <div>
    <section class="internal lab">
      <article v-for="(item , article) in articles" :key="article" @click="shareData(article)">
        <img :src="item.screen" :title="item.title" :alt="item.title" class="lab_img" />
        <h2>{{item.title}}</h2>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  name: "Lab",
  data() {
    return {
      articles: [
        {
          screen: require("../assets/images/portfolio-clone-google.jpg"),
          title: "Desafio Clone Google",
          description: `
                    CSS Grids com template área.
                    `,
          url: "https://renato7oliveira.github.io/clone-google/src/index.html",
          tags: ["css grids"],
        },
        {
          screen: require("../assets/images/portfolio-mobile-first.jpg"),
          title: "Responsive Test",
          description: `
                    Teste responsivo para resoluções pré-definidas.
                    `,
          url: "https://renato7oliveira.github.io/mobile-test/src/index.html",
          tags: ["css grids" , "javascript"],
        },
        {
          screen: require("../assets/images/portfolio-beatles.jpg"),
          title: "Beatles Tribute",
          description: `
                    Mera homenagem a melhor banda do mundo.
                    `,
          url: "https://renato7oliveira.github.io/beatles-tributo/src/index.html",
          tags: ["vue", "css grids" , "photoshop"],
        },
        {
          screen: require("../assets/images/portfolio-breaking-bad-video.jpg"),
          title: "Breaking Bad - Vídeo slide show",
          description: "Slide show básico com imagens da minha série favorita💕",
          url: "https://www.youtube.com/watch?v=qHwl86jkmGg",
          tags: ["Premiere"],
        },
        {
          screen: require("../assets/images/portfolio-breaking-infografico.jpg"),
          title: "Infográfico Breaking Bad",
          description: `
          Infográfico com frases intrigantes dos personagens da minha série favorita💕
          `,
          url: "https://br.pinterest.com/pin/102949541465385965/",
          tags: ["Illustrator"],
        },
        {
          screen: require("../assets/images/portfolio-street-fighter.jpg"),
          title: "Street Fighter Tribute (old school)",
          description: `
                    Projeto interativo feito para desktop mas é responsivo. Imagens do Pinterest e estão creditadas.  
                    Demora para carregar pois tem vídeo introdutório, mas vale a pena esperar :·)
                    `,
          url: "https://renato7oliveira.github.io/street-fighter-audio-project",
          tags: ["edge", "photoshop" , "design"],
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
.dark-mode:root{
      .lab article{
        background: #02070A;
        box-shadow: 1px 1px 3px #02070A;
        &:hover{
        box-shadow: 1px 1px 3px #000;
        }
    }
}
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