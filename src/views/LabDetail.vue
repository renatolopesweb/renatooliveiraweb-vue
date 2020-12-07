<template>
<div>
    <section class="lab_internal internal lab">
        <article class="screen">
            <img :src="article.screen" :title="article.title" :alt="article.title" />
            <a class="btn" :href="article.url" target="_blank"><i class="material-icons-outline md-remove_red_eye"></i> Ver projeto</a>
        </article>
        <article class="description">
            <h2>{{article.title}}</h2>
            <p>{{article.description}}</p>
            <h3>Stack:</h3>
            <ul>
                <li v-for="item in article.tags" :key="item">{{item}}</li>
            </ul>
        </article>
    </section>
    <footer>
        <div class="lab_back">
            <a class="btn" @click="labScroll()"><i class="material-icons-outline md-arrow_back_ios"></i> Voltar</a>
        </div>
    </footer>
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
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 55px;
}
.screen{
    grid-column-start: 1;
    grid-column-end: 1;
    text-align: center;
    border-radius: 20px;
    img{
        width: 100%;
        box-shadow: 1px 1px 3px #ccc;
        margin-bottom: 55px;
    }
    .btn{
        background: #FA3423;
        a{
            color: #fff;
        }
    }
    i{
        font-size: 1.1em;
    }
}
.description{
    grid-column-start: 2;
    grid-column-end: 4;
    h2{
        font-size: 1.6em;
        font-weight: normal;
    }
    h3{
        font-size: 1.3em;
        font-weight: normal;
        margin-bottom: 6px;
    }
    p{
        margin: 15px 0;
    }
    ul{
    padding: 0px;
    }
    li{
        border-radius: 100px;
        border: 1px dashed #000;
        float: left;
        font-size: 0.9em;
        margin-right: 7px;
        margin-bottom: 7px;
        padding: 10px 20px;
        text-align: center;
        text-transform: uppercase;
    }
}
footer{
    position: absolute;
    position: fixed;
    right: 70px;
    bottom: 32px;
    i{
        font-size: 1.1em;
    }
    .btn{
        background: #030F92;
        color: #fff;
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
        grid-template-columns: 1fr;
    }
    .screen {
        .btn{
            display: none;
        }
        img{
            margin-bottom: -40px;
        }
    } 
    .description{
        grid-column-start: 1;
        grid-column-end: 2; 
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