<template>
  <div>
    <section>
      <article>
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <h3>Links</h3>
        <ul>
          <li><a :href="article.url" target="_blank"><i class="material-icons md-launch"></i> Ver projeto</a></li>
          <li><a @click="labScroll()"><i class="material-icons md-arrow_back_ios"></i> Voltar</a></li>
        </ul>
      </article>
      <aside>
        <figure>
          <img
            :src="article.screen"
            :title="article.title"
            :alt="article.title"
          />
        </figure>
        <a class="btn btn_secondary" :href="article.url" target="_blank"
          ><i class="material-icons md-launch"></i> Ver projeto</a
        >
        <a class="btn btn_third" @click="labScroll()"
          ><i class="material-icons-outline md-arrow_back_ios"></i> Voltar</a
        >
      </aside>
    </section>
  </div>
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
  
  article {
    grid-column-start: 1;
    grid-column-end: 3;
    border-radius: 5px;
    padding: 25px;
    h2 {
      font-size: 1.4em;
      font-weight: bolder;
      margin-bottom: 15px;
    }
    h3 {
      font-size: 1.2em;
      font-weight: bolder;
      margin: 20px 0 20px 0;
    }
    li{
      // list-style-type: circle;
      // margin-left: 20px;
      margin-bottom: 10px;
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
  }
  aside {
    display: grid;
    grid-column-start: 3;
    grid-column-end: 4;
    border-radius: 5px;
    img {
      width: 100%;
      border-radius: 5px 5px 0 0;
      margin-bottom: 20px;
    }
  }
}
/* MEDIA QUERIES START */
@media (max-width: 1024px) {
  section {
    grid-template-columns: 1fr;
    article, aside{
      grid-column-start: 1;
      grid-column-end: 4;
    }
    aside{
      margin-bottom: 90px;
    }
  }
}
/* MEDIA QUERIES END  */
</style>