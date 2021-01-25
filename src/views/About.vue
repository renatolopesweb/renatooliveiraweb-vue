<template>
    <section>
      <div> 
        <figure>
          <img
            src="../assets/images/renato7oliveira-about.jpg" 
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
        <p>Desde 2009 trabalho para empresas na parte de web. Destinado ao Desenvolvimento Frontend de aplicações Web; Design de Interface e Gestão de Projetos.</p>
        <p>Casado com a Delma, pai da Ana Luiza e da <span class="dog">Cyndi</span>.</p>
        <p>Se deseja entrar em contato, <a href="https://forms.gle/Ny9FhRcy3BcyKG7t9" target="_blank">clique aqui</a> e preencha um simples formulário.</p>
        <h2>O que uso:</h2>
        <ul>
          <li v-for="item in skills" :key="item">{{item}}</li>
        </ul>
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
  grid-template-columns: 300px auto;
  grid-gap: 30px;
  img {
    width: 100%;
    box-shadow: 1px 1px 3px #ccc;
  }
  p {
    margin-bottom: 15px;
    a{
      color: blue;
    }
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
      opacity: 0.5;
    }
    i{
        margin-right: 5px;
        font-size: 1.5em;
    }
  }
}
/* MEDIA QUERIES START */
@media (max-width: 60em) {
  section {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
}
/* MEDIA QUERIES END  */
</style>