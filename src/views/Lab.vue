<template>
  <div>
     <section class="internal lab">
        <article class="lab_link" v-for="(item , article) in articles" :key="article" @click="shareData(article)">
            <img :src="item.screen" :title="item.title" :alt="item.title" />
            <h2>{{item.title}}</h2>
        </article>
    </section>
  </div>
<!-- <router-link to="/lab"><button class="btn btn_home">Laboratório →</button></router-link> -->
</template>
<script>

export default {

    name: "Lab",
    data(){
        return{
            articles:[
                {
                    screen: require('../assets/images/1.png'),
                    title: 'Titulo 1',
                    url: 'https://github.com/renato7oliveira',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eos doloremque eum eius commodi minus, nulla dolorum, qui placeat asperiores sit nemo voluptas quibusdam doloribus dolor ab, ad tenetur consequuntur!',
                    tags: ['html' , 'css']
                }
                ,
                {
                    screen: require('../assets/images/3.png'),
                    title: 'Titulo 2',
                    url: 'http://youtube.com',
                    description: 'xoxoxoxo',
                    tags: ['Photoshop' , 'XD']
                }
                ,
                {
                    screen: require('../assets/images/3.png'),
                    title: 'Titulo 3',
                    url: 'http://youtube.com',
                    description: 'HYYYYYYY',
                    tags: ['SSSS' , 'XD']
                }
            ]
        }
    },
      methods: {
    shareData(keyDetail) {
      this.$router.push({ name: "PortfolioDetalhe", params: { data: this.articles[keyDetail] }});
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    }
  }
}
</script>

<style lang="scss" scoped>

.lab{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 55px;
    article{
        box-shadow: 1px 1px 3px #ccc;
        transition: 0.5s;
        background: #fff;
        
        &:hover{
            box-shadow: 1px 1px 3px #999;
            cursor: pointer;
            transform: translateY(-5px);
        }
        &:active{
            box-shadow: 1px 1px 3px #999;
            transform: translateY(0px);
        }
    }
    img{
        width: 100%;
    }
    h2{
        font-size: 1em;
        font-weight: normal;
        padding: 15px;
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
    img{
        width: 100%;
    }
    button{
        margin-top: 50px;
        // background: $bg-2;
    }
    i{
        font-size: 1.2em;
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
        font-size: 1em;
        font-weight: normal;
        margin-bottom: 8px
    }
    p{
        font-size: 1.2em;
        margin: 15px 0;
    }
}
.lab_back{
    position: absolute;
    position: fixed;
    right: 55px;
    bottom: 25px;
    i{
        font-size: 1.2em;
    }
    button{
        // background: $bg-3;
        color: #000;
    }
}
/* MEDIA QUERIES START */
@media(max-width: 60em){
    .lab , .lab_internal{
        grid-template-columns: 1fr;
    }
    .description{
        grid-column-start: 1;
        grid-column-end: 2; 
    }
}
/* MEDIA QUERIES END  */
</style>