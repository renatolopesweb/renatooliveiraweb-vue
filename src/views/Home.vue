<template>
    <div>
    <div class="home-description">
      <h2></h2>
      <h3></h3>
      <p></p>
      </div>
  <section>
    <article v-for="(item, article) in articles" :key="article">
      <a :href="item.url" target="_blank" :title="item.description">
        <h2>{{ item.title }}</h2>
        <p>{{ item.stack }}</p>
      </a>
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
          title: "Breaking Bad Tributo",
          description: `Página motivacional a testar o Glide.js, um plugin leve (23k) para slider`,
          stack: "Glide.js",
          url:
            "https://renato7oliveira.github.io/portfolio/Breaking_Bad_Tributo/src/",
          screen: require("../assets/images/portfolio-breaking-bad-tributo.jpg"),
        },
        {
          title: "Smooth Scroll simplificado",
          description: `2 linhas para um efeito que pode te ajudar`,
          stack: "CSS2, HTML",
          url: "https://renato7oliveira.github.io/portfolio/Scroll_Smooth/src/",
          screen: require("../assets/images/portfolio-scroll-behavior.jpg"),
        },
        {
          title: "Beatles Tributo",
          description: `Página motivacional a testar animações com CSS3`,
          stack: "CSS3 Animation",
          url:
            "https://renato7oliveira.github.io/portfolio/Beatles_Tributo/src/",
          screen: require("../assets/images/portfolio-beatles.jpg"),
        },
        {
          title: "Street Fighter Tributo",
          description: `Projeto interativo feito com Adobe Edge`,
          stack: "Edge Animate, Photoshop",
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

section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
  padding: 0 25px;
}
@media(max-width: 800px){
  section{
    grid-template-columns: 1fr;
    padding-bottom: 120px;
  }
}
.home-description{
  font-size: 0.7em;
  padding: 90px 25px 25px 25px;
  h2::after {
    content: "Clique nos experimentos";
  }
}
@media(max-width: 800px){
  .home-description{
    padding: 25px;
    text-align: center;
    h2{
      font-size: 2em;
    }
    h3{
      color: #666;
      font-size: 1.6em;
    }
    p{
      color: #000;
      font-size: 1.3em;
      margin-top: 15px;
    }
    h2::after {
    content: "RENATO7OLIVEIRA";
  }
  h3::after{
      content: 'FRONTEND · WEB';
    }
    p::after{
      content: 'Clique nos experimentos';
      font-weight: bold;
    }
  }
}

article {
  display: grid;
  align-items: center;
  align-content: center;
  background: #fff;
  border: 1px solid rgba($color: $color-primary, $alpha: 0.2);
  height: 125px;
  padding-left: 25px;
  padding-right: 25px;
  a {
    color: $color-primary;
  }
  h2 {
    font-size: 1em;
  }
  p {
    font-size: 0.8em;
    margin-top: 5px;
    text-align: right;
  }
}

// ANIMATE HOVER
article {
  position: relative;
}
@media(max-width: 800px){
  article{
    position: unset;
  }
}
article::before,
article::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  // z-index: 5;
  pointer-events: none;
  width: 0;
  height: 0;
  opacity: 0;
  border: 1px solid rgba($color: $color-primary, $alpha: 1);
}

article::before {
  border-left: none;
  border-bottom: none;
  left: 0;
  top: 0;
  transition: width 0.5s linear 1.5s, height 0.5s linear 1s, opacity 0.1s 2s;
}

article::after {
  border-top: none;
  border-right: none;
  right: 0;
  bottom: 0;
  transition: width 0.5s linear 0.5s, height 0.5s linear, opacity 0.1s 1s;
}

article:hover::before,
article:hover::after {
  width: 100%;
  height: 100%;
  opacity: 1;
}
@media(max-width: 800px){
  article:hover::before,
article:hover::after {
  opacity: 0;
}
}

article:hover::before {
  transition: width 0.5s linear, height 0.5s linear 0.5s, opacity 0.1s;
}
article:hover::after {
  transition: width 0.5s linear 1s, height 0.5s linear 1.5s, opacity 0.1s 1s;
}
</style>



