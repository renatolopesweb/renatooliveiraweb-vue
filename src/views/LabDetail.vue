<template>
    <div>
        <section class="internal">
            <article>
                <img :src="article.screen" :title="article.title" :alt="article.title" />
                <div class="description">
                <h2>{{article.title}}</h2>
                <ul>
                    <li v-for="item in article.tags" :key="item">{{item}}</li>
                </ul>
                <a class="btn btn_secondary" :href="article.url" target="_blank"><i class="material-icons md-remove_red_eye"></i> Ver projeto</a>
                <a class="btn btn_third" @click="labScroll()"><i class="material-icons-outline md-arrow_back_ios"></i> Voltar</a>
                </div>
            </article>
        </section>
    </div>
</template>
<script>
export default {
  name: "PortfolioDetalhe",

  created() {
    this.article = this.$route.params.data
  },
  methods: {
    labScroll(){
        window.history.back();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }
  }
}
</script>

<style lang="scss" scoped>
    section{
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        article{
            display: grid;
            grid-column-start: 2;
            grid-column-end: 3;
            background: #fff;
            border-radius: 5px;
            box-shadow: 1px 1px 5px #ccc;
            // padding-bottom: 5px;
            // box-shadow: 0px 0px 75px 7px #ccc, 5px 5px 15px 5px rgba(255, 255, 255, 0.9);
            img{
                width: 100%;
                border-radius: 5px 5px 0 0;
            }
            h2{
                font-size: 0.9em;
                font-weight: normal;
                margin: 12px 0 12px 0;
            }
            .btn{
              display: block;
            }
        }
        
    }
.description{
    padding: 0px 10px;
}
/* MEDIA QUERIES START */
@media (max-width: 60em) {
  section{
    grid-template-columns: 1fr;
  }
}
/* MEDIA QUERIES END  */

</style>