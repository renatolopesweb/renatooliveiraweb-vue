<template>
  <article>
    <h1>Sobre</h1>
    <div class="about">
      <div class="description">
        <p>
          Área da Web responsável pela programação visual das interfaces, seja
          como um e-mail marketing, até mesmo a interface Área da Web
          responsável engineer. Área da Web responsável pela programação visual
          das interfaces mesmo a interface Área da Web responsável engineer.
        </p>
        <p>
          Área da Web responsável pela programação visual das interfaces, seja
          como um e-mail marketing, até mesmo a interface Área da Web.
        </p>
        <!-- <p>
        Olá, sou o <span><strong>Renato Oliveira</strong></span
        >, +10 anos que trabalho na web com Frontend e Design (UI).
        Normalmente estou em divisões de Marketing, TI & Comunicação. Moro em
        São Paulo, casado com a Delma, pai da Ana Luiza e da "Cyndi".
      </p> -->

        <!-- <p>
        I have been worked to make Web more than Search, Social and Porn,
        helping out companies to make theirs ideas and products accessible since
        2001.
      </p>
      <p>
        Sophia's dad, Aline's husband and mama's beloved one, I'm always busy
        trying to make them laugh.
      </p>
      <p>
        Sometimes developing at the front-end, sometimes at the back, other
        times creating layouts or taking care of user experience experiments, I
        like to be useful.
      </p>
      <p>
        Doesn't matter what, always trying to keep myself more fool than full
        and trying to do my best.
      </p>
      <p>Discover more about me using those tabs above.</p> -->
      </div>

      <figure>
        <img
          src="../assets/images/renato-oliveira-web.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>
    </div>
    <h2>Aspirações</h2>
    <!-- <div class="slider">
      <div class="slider--width">
        <div class="slider--item">
          <img src="../assets/images/800-500.jpg" alt="" />
        </div>
        <div class="slider--item">
          <img src="../assets/images/800-500.jpg" alt="" />
        </div>
        <div class="slider--item">
          <img src="../assets/images/800-500.jpg" alt="" />
        </div>
      </div>
      <div class="slider--controls">
        <button class="slider--control"><i class="fas fa-paper-plane"></i></button>
      </div>
    </div> -->

    <carousel
      @next="next"
      @prev="prev"
    >
      <carousel-slide v-for="(slide, index) in slides" 
      :key="slide" 
      :index="index"
      :visibleSlide="visibleSlide"
      :direction="direction"
      >
        <img :src="slide" />
      </carousel-slide>
    </carousel>
    <!-- <h2>Habilidades</h2>
    <h3>Code</h3>
    <ul>
      <li>Angular / Vue.js</li>
      <li>Ionic</li>
      <li>HTML5 / Sass / CSS3</li>
      <li>Github</li>
    </ul>
    <h3>Visual</h3>
    <ul>
      <li>XD</li>
      <li>Photoshop</li>
    </ul>
    <h3>Marketing</h3>
    <ul>
      <li>Wordpress</li>
    </ul> -->
  </article>
</template>

<script>

import Carousel from '../components/Carousel'
import CarouselSlide from '../components/CarouselSlide'

export default {
  data(){
    return{
      slides: [
        'https://picsum.photos/id/237/600/350',
        'https://picsum.photos/id/236/600/350',
        'https://picsum.photos/id/235/600/350',
        'https://picsum.photos/id/234/600/350',
        'https://picsum.photos/id/233/600/350',
        'https://picsum.photos/id/232/600/350',
        'https://picsum.photos/id/231/600/350',
      ],
      visibleSlide: 0,
      direction: 'left',
    }
  },

  computed:{
    slidesLen(){
      return this.slides.length;
    }
  },

  methods:{
    next(){
      if(this.visibleSlide >= this.slidesLen - 1){
        this.visibleSlide = 0;

      }else {
        this.visibleSlide++;
      }
      this.direction = "left"
    },
    prev(){
      if(this.visibleSlide <= 0){
        this.visibleSlide = this.slidesLen - 1;

      }else {
        this.visibleSlide--;
      }
      this.direction = "right"
    }
  },
  components:{
    Carousel,
    CarouselSlide
  }
}
</script>


<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: auto 150px;
  grid-template-areas: "desc photo";
  grid-gap: 25px;
  .description {
    grid-area: desc;
  }
  p {
    font-size: 1.2em;
    line-height: 30px;
    margin-bottom: 22px;
  }
  img {
    grid-area: photo;
    border-radius: 100%;
    cursor: none;
    filter: grayscale(1);
    width: 100%;
    &:hover {
      filter: grayscale(0);
    }
  }
}
.slider {
  display: grid;
  grid-template-columns: auto 100px;
  height: 250px;
  background: #666;
  overflow: hidden;
}
.slider--width {
  display: flex;
  gap: 25px;
  background: red;
  height: 100%;
}
.slider--item {
  background: greenyellow;
  img {
    width: 100%;
  }
}
.slider--controls{
  text-align: right;
}
.slider--control{
  background: #333;
  border: none;
  cursor: pointer;
  height: 100%;
  padding: 3px;
  &:hover{
    background: red;
  }
  i{
    font-size: 2.6em;
    padding: 5px;
  }
}
@media (max-width: 500px) {
  .about {
    grid-template-columns: 1fr;
    grid-template-areas:
      "photo"
      "desc";
    figure {
      text-align: center;
      img {
        margin-top: 25px;
        width: 75%;
      }
    }
  }
}

li {
  margin-bottom: 5px;
  text-transform: uppercase;
}
</style>