<template>
  <div>
    <section class="internal lab_default" v-show="labDefault">
      <ul>
        <li v-for="(item , article) in articles" :key="article">
          <a @click="shareData(article)">{{item.title}}</a>
        </li>
      </ul>
    </section>

    <section class="internal lab lab_grid" v-show="labGrid">
      <article v-for="(item , article) in articles" :key="article" @click="shareData(article)">
        <img :src="item.screen" :title="item.title" :alt="item.title" class="lab_img" />
        <h2>{{item.title}}</h2>
      </article>
    </section>
    <div class="footer_choose">
      <a title="Grids" @click="(labDefault = !labDefault , labGrid = !labGrid)"><i class="material-icons-outline md-border_all"></i></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Lab",
  data() {
    
    return {

      labDefault: true,
      labGrid: false,

      articles: [
        {
          screen: require("../assets/images/portfolio-mobile-first.jpg"),
          title: "Responsive Test",
          url: "https://renato7oliveira.github.io/mobile-test/src/index.html",
          tags: ["css grids" , "javascript"],
        },
        {
          screen: require("../assets/images/portfolio-clone-google.jpg"),
          title: "Desafio Clone Google",
          url: "https://renato7oliveira.github.io/clone-google/src/index.html",
          tags: ["css grids"],
        },
        {
          screen: require("../assets/images/portfolio-beatles.jpg"),
          title: "Beatles Tribute",
          url: "https://renato7oliveira.github.io/beatles-tributo/src/index.html",
          tags: ["vue", "css grids" , "photoshop"],
        },
        {
          screen: require("../assets/images/portfolio-breaking-bad-video.jpg"),
          title: "Breaking Bad - Vídeo slide show",
          url: "https://www.youtube.com/watch?v=qHwl86jkmGg",
          tags: ["Premiere"],
        },
        {
          screen: require("../assets/images/portfolio-breaking-infografico.jpg"),
          title: "Breaking Bad - Infográfico",
          url: "https://br.pinterest.com/pin/102949541465385965/",
          tags: ["Illustrator"],
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
.dark-mode:root{
      .lab article{
        background: #02070A;
        box-shadow: 1px 1px 3px #02070A;
        &:hover{
        box-shadow: 1px 1px 3px #000;
        }
    }
    .footer_choose a{
      color: #fff;
    }
}
.lab_default{
    text-align: center;
    font-weight: normal;
    font-size: 1em;
    ul{
      margin: 0px;
      padding: 0px;
    }
    li{
      margin-bottom: 20px;
      transition: 0.2s;
      display: block;
      &:hover{
        color: #FA3423;
      }
      a{
        cursor: pointer;
      }
    }
  }
.lab {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 55px;
  article {
    background: #fff;
    box-shadow: 1px 1px 3px #ccc;
    transition: 0.5s;

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

.footer_choose{
    bottom: 15px;
    right: 26px;
    position: fixed;
    a{
      font-size: 1.4em;
      color: #000;
      cursor: pointer;
    }
}

/* MEDIA QUERIES START */
@media (max-width: 60em) {
  .lab_default, .footer_choose{display: none;}
  .lab_grid{display: block!important;}
  .lab article{margin-bottom: 55px;}
}
/* MEDIA QUERIES END  */
</style>