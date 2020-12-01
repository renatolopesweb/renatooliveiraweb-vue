<template>
  <div>
    <section class="about internal">
      <div> 
        <figure>
          <img
            src="../assets/images/renato7oliveira-home.jpg" 
            alt="renato7oliveira"
            title="renato7oliveira"
          />
        </figure>
        <h2>Mídias Sociais:</h2>
        <p class="social">
          <a v-for="item in social" :title="item.title" :key="item.id" :href="item.url" target="_blank"><i :class="item.img"></i></a>
        </p>
      </div>
      <div>
        <p>Desde 2009 trabalho para empresas na área de web. Dou meu melhor quer seja no frontend, quer seja projetando interfaces ou gerindo projetos digitais. Presente nas divisões de Marketing, Comunicação e TI.</p>
        <p>Casado com a Delma, pai da Ana Luiza e da <span class="dog">Cyndi</span>.</p>
        <span @click="toTop()">
            <router-link to="/portfolio" class="btn"><i class="material-icons-outline md-apps"></i> Ver Portfolio</router-link>
        </span>
      </div>
    </section>
  </div>
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
      ]
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
.dark-mode:root{
  .about img{
    box-shadow: 1px 1px 3px #000;
  }
  .social a{
    color: #fff;
  }
}
.dog{color: #704734}
.about {
  display: grid;
  grid-template-columns: 180px auto;
  grid-gap: 60px;
  img {
    width: 100%;
    box-shadow: 1px 1px 3px #ccc;
  }
  p {
    margin-bottom: 15px;
  }
  h2 {
    font-size: 1em;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .social a {
    color: #000;
    opacity: 1;
    transition-duration: 0.2s;
    &:hover {
      color: #FA3423;
    }
    i{
        margin-right: 9px;
        font-size: 1.2em;
    }
  }
  .span
  router-link, .btn{
    background: #FA3423;
    // font-size: 0.6em;
}
}
/* MEDIA QUERIES START */
@media (max-width: 60em) {
  .about {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
}
/* MEDIA QUERIES END  */
</style>