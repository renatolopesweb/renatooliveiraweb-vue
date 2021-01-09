<template>
<div>
    <section class="lab_internal internal lab">
        <figure class="screen">
            <img :src="article.screen" :title="article.title" :alt="article.title" />
        </figure>
        <article class="description">
            <h2>{{article.title}}</h2>
            <ul>
                <li v-for="item in article.tags" :key="item">{{item}}</li>
            </ul>
            <div>
                <a class="btn btn_show_project" :href="article.url" target="_blank"><i class="material-icons-outline md-remove_red_eye"></i> Ver projeto</a>
            </div>
            <div>
                <a class="btn btn_back" @click="labScroll()"><i class="material-icons-outline md-arrow_back_ios"></i> Voltar</a>
            </div>
        </article>
    </section>
    <div class="footer_mobile">
        <a class="btn project" :href="article.url" target="_blank"><i class="material-icons-outline md-remove_red_eye"></i> Ver projeto</a>
        <a class="btn back" @click="labScroll()"><i class="material-icons-outline md-arrow_back_ios"></i> Voltar</a>
    </div>
</div>
</template>
<script>
export default {
  name: "PortfolioDetalhe",

//   data() {
//     return {
//      article: []
//     }
//   },
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
.dark-mode:root{
    .screen{
        img{
            box-shadow: 1px 1px 3px #000;
        }
    }
    .description li{
        border: 1px dashed #fff;
    }
    .footer_mobile{
        background: #02070A;
        box-shadow: 2px 1px 2px 2px #02070A;
    }
}
.lab_internal{
    display: grid;
    grid-template-rows: 160px auto;
    text-align: center;
}
.screen{
    img{
        width: 100%;
        max-width: 400px;
        box-shadow: 1px 1px 3px #999;
    }
}
.description{
    width: 100%;
    max-width: 400px;
    margin: auto;
    h2{
        font-size: 1.1em;
        font-weight: bolder;
        margin-top: 80px;
        margin-bottom: 20px;
    }
    ul{
        padding: 0px;
        margin: 0 0 35px 0;
    }
    li{
        border-radius: 100px;
        border: 1px dashed #000;
        display: inline;
        font-size: 0.9em;
        margin-right: 7px;
        padding: 10px 20px;
        text-align: center;
        text-transform: uppercase;
    }
    div{
        height: 57px;
    }
    i{
        font-size: 1.1em;
    }
}
.btn_show_project{
    background: #FA3423;
}
.btn_back{
    border: 1px dashed #FA3423;
    color: #FA3423;
}
footer{
    position: absolute;
    position: fixed;
    right: 2.5%;
    bottom: 35px;
    i{
        font-size: 1.1em;
    }
}
.footer_mobile{
    background: #fff;
    box-shadow: 2px 1px 2px 2px #ccc;
    bottom: 0;
    padding: 18px 0 20px 10px;
    position: fixed;
    width: 100%;
    display: none;
    .btn{
        background: #000;
        margin-right: 10px;
        font-size: 0.7em;
        padding: 12px;
        a{
            color: #fff;
        }
        i{
            font-size: 1em;
        }
    }
    .project{
        background: #FA3423;
    }
    .back{
        background: #030F92;
        color: #fff;
    }
}
/* MEDIA QUERIES START */
@media(max-width: 60em){
.lab_internal{
    grid-template-rows: 140px auto;
}
    .description{
        .btn{
            display: none;
        }
    }
    footer{
        display: none;
    }
    .footer_mobile{
        display: block;
    }
}
/* MEDIA QUERIES END  */
</style>