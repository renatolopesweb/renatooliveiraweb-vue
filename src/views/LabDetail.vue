<template>
    <div>
        <section class="internal">
            <div></div>
            <article>
                <img :src="article.screen" :title="article.title" :alt="article.title" />
                <div class="description">
                <h2>{{article.title}}</h2>
                <ul>
                    <li v-for="item in article.tags" :key="item">{{item}}</li>
                </ul>
                <a class="btn btn_primary" :href="article.url" target="_blank"><i class="material-icons-outline md-remove_red_eye"></i> Ver projeto</a>
                <a class="btn btn_secondary" @click="labScroll()"><i class="material-icons-outline md-arrow_back_ios"></i> Voltar</a>
                </div>
            </article>
            <div></div>
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
            background: #fff;
            box-shadow: 0px 10px 13px -7px #ccc, 5px 5px 15px 5px rgba(0,0,0,0);
            img{
                width: 100%;
            }
            h2{
                font-size: 1em;
                margin-top: 7px;
            }
        }
        
    }
.description{
    padding: 0px 15px;
}
/* MEDIA QUERIES START */
@media (max-width: 60em) {
  section{
    grid-template-columns: 1fr;
  }
}
/* MEDIA QUERIES END  */
</style>