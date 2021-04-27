<template>
  <section>
    <article class="about-description">
      <h1>RENATO7OLIVEIRA</h1>
      <h2>FRONTEND · WEB</h2>
      <p>
        Desde 2009 trabalho para empresas nas divisões
        de web, normalmente dedicado ao frontend, design e gestão de mídias
        digitais. Sou casado com a Delma, pai da AnaLu e da “Cyndi”.
      </p>
      <h3>Contato</h3>
      <p class="social">
        <a
          v-for="item in social"
          :title="item.title"
          :key="item.id"
          :href="item.url"
          target="_blank"
          ><i :class="item.img"></i
        ></a>
      </p>
    </article>
    <article class="about-animate">
      <figure class="shuttle">
        <i class="fa fa-space-shuttle" aria-hidden="true"></i>
        <!-- <i class="fa fa-rocket" aria-hidden="true"></i> -->
      </figure>
      <button @click="sky()" class="shuttle-bt show-d"><i class="fa fa-hand-o-up" aria-hidden="true"></i></button>
      <button @click="reset()" class="shuttle-reset show-d"><i class="fa fa-refresh" aria-hidden="true"></i></button>
    </article>
  </section>
</template>

<script>

export default {
  data() {
    return {
      social: [
        {
          title: "Github",
          img: "fa fa-github",
          url: "https://github.com/renato7oliveira",
        },
        {
          title: "Linkedin",
          img: "fa fa-linkedin",
          url: "https://www.linkedin.com/in/renato7oliveira",
        },
        {
          title: "Instagram",
          img: "fa fa-instagram",
          url: "https://www.instagram.com/renato7oliveira",
        },
        {
          title: "Twitter",
          img: "fa fa-twitter",
          url: "https://twitter.com/renato7oliveira",
        },
        {
          title: "Facebook",
          img: "fa fa-facebook",
          url: "https://facebook.com/renato7oliveira",
        },
        {
          title: "Mensagem",
          img: "fa fa-paper-plane",
          url: "https://forms.gle/mdYVxaBnc1mziQ8KA",
        },
      ],
    };
  },
  methods:{
    sky(){
      document.querySelector('.shuttle').classList.add('shuttle-active');
      document.querySelector('body').style.overflow = "hidden";
      document.querySelector('.shuttle-bt').style.display = "none";
      
      setTimeout(function(){ 
        document.querySelector('.shuttle-reset').style.display = "block";
        document.querySelector('.shuttle-reset').classList.add('shuttle-reset-active');
       }, 3000);

    },
    reset(){
      document.querySelector('.shuttle').classList.remove('shuttle-active');
      document.querySelector('.shuttle-bt').style.display = "block";
      document.querySelector('.shuttle-reset').style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap');



$color-primary: #151515;
$t-def: 0.3s;

section {
  grid-template-columns: repeat(2 , 1fr);
  grid-gap: 20px;
  align-items: center;
  height: 85vh;
  grid-template-areas:
  "desc anim"
  ;
  

  h1,  h2{
    font-family: 'Bowlby One SC', cursive;
    font-size: 4em;
    letter-spacing: 2px;
  }
  h1{
    color: $color-primary;
  }
  h2{
    color: #999;
    margin-top: -23px;
  }
  h3{
    color: $color-primary;
    font-size: 1.2em;
    margin-top: 20px;
    margin-bottom: -2px;
  }
  p{
    color: $color-primary;
    font-size: 1.1em;
    line-height: 30px;
    margin-bottom: 7px;
    margin-top: 7px;
    text-shadow: 1px 1px 3px #f0f0f0;
  }
}

  @media (max-width: 800px) {
  section {
    padding-bottom: 680px;
    grid-template-columns: 1fr;
    grid-template-areas:
    "anim"
    "desc"
  ;
  h1, h2{
    font-size: 1.6em;
  }
    h2{
    margin-top: -10px;
  }
  }
}

.about-description{
  grid-area: desc;
}
.about-animate{
  grid-area: anim;
}
.social{
  a{
      margin-right: 7px;
      color: $color-primary;
      transition: $t-def;
      &:hover{
        color: #999;
      }
  }
  i{
    font-size: 1.6em;
  }
}

.about-animate{
  // text-align: center;
  position: relative;
.shuttle{
  i{
    font-size: 30em;
    transition: $t-def;
    color: #ccc;
    transform: rotate(-40deg);;
    // background: -webkit-linear-gradient($color-primary, #000);
    // background-image: linear-gradient(to bottom left, $color-primary, #000);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
  }
  @media(max-width: 800px){
    i{
      color: $color-primary;
      font-size: 15em;
    }
  }
  }
}

.shuttle-active i{
    animation-name: shuttle;
    animation-duration: 3s;
    // animation-iteration-count: 1;
    // animation-delay: 0.5s;
    animation-fill-mode: forwards;
}

button{
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  font-size: 1.6em;
  outline: 0;
  padding: 20px 26px;
  text-transform: uppercase;
  transition: .1s;
}

.shuttle-bt {
  border: 1px solid #941c05;
  background: #ff2800; 
  position: absolute;
  left: 400px;
  top: 60%;
  box-shadow:0 5px 0 #a81e04;
  &:hover{
    background:#d32606;
  }
  &:active{
    box-shadow:none;
    top:61%;
  }
}
@media (max-width: 800px) {
  .shuttle-bt {
    left: 170px;
  }
}

.shuttle-reset{
  display: none;
  border: 1px solid #04546f;
  background: #06799F;
  position: absolute;
  left: 300px;
  top: 30%;
  box-shadow:0 5px 0 #045e7c;
  &:hover{
    background:#077093;
  }
  &:active{
    box-shadow:none;
    top:31%;
  }
}
@media (max-width: 800px) {
  .shuttle-reset {
    left: 140px;
  }
}

.shuttle-reset-active{
    animation-name: reset;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

@keyframes shuttle{

  50%{
    color: $color-primary;
        transform: 
    rotate(-40deg)

  }
  100%{

      color: $color-primary;
        transform: 
        rotate(-40deg)
        translateY(10px)
        translateX(250%)
        scale(1.8)
        ;
  }
}

@keyframes reset {
  0%{
    opacity: 0;
  }
  100%{
    transform: 
      rotate(360deg)
    ;
    opacity: 1;
  }
}

</style>



