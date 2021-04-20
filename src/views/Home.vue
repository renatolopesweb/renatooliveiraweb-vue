<template>
  <div>
    <h2></h2>
    <h3></h3>
    <p></p>
    <ul>
      <li v-for="(item, article) in articles" :key="article">
        <a :href="item.url" :title="item.stackMaster" target="_blank">{{
          item.title
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Lab",
  data() {
    return {
      articles: [
        {
          title: "Breaking Bad Tributo",
          description: `Página motivacional a testar o Glide.js, um plugin leve (23k) para slider`,
          stackMaster: "Glide.js, Sass, Gulp compress images",
          url:
            "https://renato7oliveira.github.io/portfolio/Breaking_Bad_Tributo/src/",
          screen: require("../assets/images/portfolio-breaking-bad-tributo.jpg"),
        },
        {
          title: "Smooth Scroll simplificado",
          description: `2 linhas para um efeito que pode te ajudar`,
          stackMaster: "CSS, HTML",
          url: "https://renato7oliveira.github.io/portfolio/Scroll_Smooth/src/",
          screen: require("../assets/images/portfolio-scroll-behavior.jpg"),
        },
        {
          title: "Beatles Tributo",
          description: `Página motivacional a testar animações com CSS3`,
          stackMaster: "CSS3 Animation, Vue.js Component",
          url:
            "https://renato7oliveira.github.io/portfolio/Beatles_Tributo/src/",
          screen: require("../assets/images/portfolio-beatles.jpg"),
        },
        {
          title: "Street Fighter Tributo",
          description: `Projeto interativo feito com Adobe Edge`,
          stackMaster: "Adobe Edge Animate, Photoshop, Pinterest*",
          url: "https://renato7oliveira.github.io/street-fighter-audio-project",
          screen: require("../assets/images/portfolio-street-fighter.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$color-primary: #630094;
$color-secondary: #37266b;

div {
  text-align: center;
  h2::after {
    content: "Veja alguns experimentos";
    font-size: 0.8em;
  }

  @media (max-width: 800px) {
    h2::after {
      content: "RENATO7OLIVEIRA";
    }
      h3{
    margin-bottom: 25px;
  }
    h3::after{
      content: 'FRONTEND · WEB';
      color: #666;
      font-size: 0.8em;
      font-weight: normal;
    }
    p::after{
      content: 'Veja alguns experimentos';
      font-weight: bold;

    }
  }
  li {
    padding: 5px;
    margin-top: 7px;
    transition: 0.2s;
    &:hover {
      transform: scale(1.2);
    }
    @media (max-width: 800px) {
      &:hover {
        transform: scale(1);
      }
    }
  }
}
@media(max-width: 800px){
  div{
    margin-top: -90px;
  }
}
</style>