<template>
    <section>
      <article class="description">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </article>
      <article class="detail">
        <h2>Detalhes</h2>
        <ul>
          <li v-for="item in article.detail" :key="item">{{item}}</li>
        </ul>
      </article>
      <aside class="screenLinks">
        <figure>
          <img
            :src="article.screen"
            :title="article.title"
            :alt="article.title"
          />
        </figure>
        <div>
          <a class="btn btn_secondary" :href="article.url" target="_blank"
          ><i class="material-icons md-launch"></i> Ver projeto</a
        >
        <a class="btn btn_third" @click="labScroll()"
          ><i class="material-icons-outline md-arrow_back_ios"></i> Voltar</a
        >
        </div>
      </aside>
    </section>
</template>

<script>
export default {
  name: "PortfolioDetalhe",

  created() {
    this.article = this.$route.params.data;
  },
  methods: {
    labScroll() {
      window.history.back();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  grid-template-areas: 
  "description detail screenLinks";
}
.description{grid-area: description;}
.detail{grid-area: detail;}
.screenLinks{grid-area: screenLinks;}
article {
    padding: 25px;
    h2 {
      font-size: 1.2em;
      font-weight: bolder;
      margin-bottom: 15px;
    }
    p{
      margin-bottom: 15px;
    }
    li{
      margin-bottom: 10px;
      margin-left: 17px;
      list-style-type:square;
      i{
        font-size: 1.2em;
        vertical-align: bottom;
      }
      a{
        color: blue;
        cursor: pointer;
        font-size: 0.9em;
        text-transform: uppercase;
        &:hover{
          text-decoration: underline;
        }
      }
    }
    li:first-child{
      color: #FF6B3F;
    }
}
aside {
    border-radius: 15px;
    div{
      // display: block;
      margin: 5px 0 32px 17px;
      // @media(max-width: 1024px){
      //   display: grid;
      //   margin: 0px;
      // }
      .btn{
        margin-right: 15px;
      }
    }
    img {
      width: 100%;
      border-radius: 15px 15px 0 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
  }
/* MEDIA QUERIES START */
@media (max-width: 800px) {

  section {
     grid-template-areas: 
      "screenLinks screenLinks screenLinks"
      "description description description"
      "detail      detail      detail";
      margin-bottom: 95px;
  }
  // section::before{
  //   content: "";
  //   margin-bottom: 500px;
  // }
}
/* MEDIA QUERIES END  */
</style>