<template>
    <section>
      <div> 
         <figure>
          <img
            src="../assets/images/renato7oliveira-home.jpg" 
            alt="renato7oliveira"
            title="renato7oliveira"
          />
        </figure>
        <p>
          Desde 2009 trabalho para empresas na parte de web. Destinado ao Desenvolvimento Frontend de aplicações Web; Design de Interface e Gestão de Projetos. Desde 2009 trabalho para empresas na.
        </p>
        <p>
          Web parte de web. Destinado ao Desenvolvimento Frontend de aplicações Web; Design de Interface e Gestão de Projetos.
        </p>
        <h2>Mídias Sociais:</h2>
        <p class="social">
          <a v-for="item in social" :title="item.title" :key="item.id" :href="item.url" target="_blank"><i :class="item.img"></i></a>
        </p>
      </div>
      <div>
        <i class="material-icons-outline md-account_circle skills"></i>
        <p>Vue.js - Javascript - CSS3 (Sass) - HTML5</p>
        <p>XD - Photoshop - Premiere</p>
        <p>Wordpress - Google Analytics - SEO - ADS</p>
      </div>
    </section>
</template>

<script>
export default {
  data(){
    return{

      social: [
        {
          title: 'Github',
          img: 'fa fa-github',
          url: 'https://github.com/renato7oliveira'
        },{
          title: 'Linkedin',
          img: 'fa fa-linkedin',
          url: 'https://www.linkedin.com/in/renato7oliveira'
        },{
          title: 'Instagram',
          img: 'fa fa-instagram',
          url: 'https://www.instagram.com/renato7oliveira'
        },{
          title: 'Twitter',
          img: 'fa fa-twitter',
          url: 'https://twitter.com/renato7oliveira'
        },{
          title: 'Facebook',
          img: 'fa fa-facebook',
          url: 'https://facebook.com/renato7oliveira'
        }
      ],
      skills:['vue' , 'javascript' , 'css grid' , '{{sass}}' , 'html' , 'wordpress' , 'XD'  ]
    }
  },
   methods:{
        toTop(){
          window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
}
</script>

<style lang="scss" scoped>
.dog{color: #704734}
section {
  display: grid;
  grid-template-columns: repeat(2 , 1fr);
  grid-gap: 30px;
  height: 100vh;
  div{
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 25px 50px;
    text-align: center;
  }
  img {
    border-radius: 100%;
    width: 150px;
  }
  p {
    color: #fff;
    font-size: 1em;
    line-height: 25px;
    margin-bottom: 15px;
    a{
      color: blue;
    }
  }

  h2 {
    color: #fff;
    font-size: 1em;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .social a {
    color: #fff;
    opacity: 1;
    transition-duration: 0.3s;
    &:hover {
      opacity: 0.3;
    }
    i{
        margin-right: 7px;
        font-size: 1.6em;
    }
  }
}
.skills{
  color: #fff;
  font-size: 10em;
}
/* MEDIA QUERIES START */
@media (max-width: 60em) {
  section {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    p{
      font-size: 1em;
    }
  }
}
/* MEDIA QUERIES END  */
</style>