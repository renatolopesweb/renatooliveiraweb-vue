<template>
  <section>
    <h1>Sobre</h1>
    <article>
      <p>Sou incansável para fazer algo relevante para a web, veja minha história:</p>
      <p>
        Meu primeiro contato com web foi em 2001, acessava sites
        como Cifra Club e Humortadela. O que me intrigava era:
        “Como fazer algo e disponibilizar online para as pessoas?"
        Daí surge certa curiosidade por web.
      </p>
      <p>
        Em 2004 faço então um curso de web na SOS Computadores que oferecia o famoso pacote Adobe com 
        Dreamweaver, Flash e Photoshop. Eu nem tinha PC em casa mas o
        interesse por web não cessava.
      </p>
      <p>
        Em 2007 ingressei na faculdade de Comunicação para Web pela UNIP. Na
        ocasião, o único curso que abordava de maneira abrangente as frentes de
        design, programação e comunicação, além de ser voltado ao mercado de
        trabalho. Ainda neste ano iniciei um estágio que me rendeu uma
        viagem para Monte Vídeo para capacitar-se em Genexus GX Portal. De 2009 pra cá passei por empresas de Marketing
        Digital, TI entre outras.
      </p>
      <p>Hoje (2022) me dedico ao front-end e design (UI).</p>
    </article>
    <article class="section slider">
      <h2>Mais...</h2>
      <input type="radio" name="slider" id="slide-1" class="slider__radio">
      <input type="radio" name="slider" id="slide-2" class="slider__radio">
      <input type="radio" name="slider" id="slide-3" class="slider__radio" checked="">
      <input type="radio" name="slider" id="slide-4" class="slider__radio">
      <input type="radio" name="slider" id="slide-5" class="slider__radio">

      <div class="slider__holder">
        <label for="slide-1" class="slider__item slider__item--1 card">
          <div class="slider__item-content">
              <img src="../assets/images/renato-oliveira-web-about-2.jpg">
          </div>
        </label>
        <!-- Slider__item -->

        <label for="slide-2" class="slider__item slider__item--2 card">
          <div class="slider__item-content">
              <img src="../assets/images/renato-oliveira-web-about-3.jpg">
          </div>
        </label>
        <!-- Slider__item -->

        <label for="slide-3" class="slider__item slider__item--3 card" checked>
          <div class="slider__item-content">
              <img src="../assets/images/renato-oliveira-web-about-1.jpg">
        </div>
        </label>
        <!-- Slider__item -->

        <label for="slide-4" class="slider__item slider__item--4 card">
          <div class="slider__item-content">
              <img src="../assets/images/renato-oliveira-web-about-4.jpg">
          </div>
        </label>
        <!-- Slider__item -->
        <label for="slide-5" class="slider__item slider__item--5 card">
          <div class="slider__item-content">
              <img src="../assets/images/renato-oliveira-web-about-5.jpg">
          </div>
        </label>
        <!-- Slider__item -->
      </div>
      <!-- Slider Holder -->
      <div class="bullets">
        <label for="slide-1" class="bullets__item bullets__item--1"></label>
        <label for="slide-2" class="bullets__item bullets__item--2"></label>
        <label for="slide-3" class="bullets__item bullets__item--3"></label>
        <label for="slide-4" class="bullets__item bullets__item--4"></label>
        <label for="slide-5" class="bullets__item bullets__item--5"></label>
      </div>
      <!-- Bullets -->
    </article>
  </section>
</template>

<style lang="scss" scoped>
p {
  margin-bottom: 25px;
}

// AUTHOR SLIDER
// https://medium.com/significa/css-only-slider-71727effff0b#.e5t9l7b55

.slider__item {
  transition: all 0.2s ease; }
  #slide-1:checked ~ .slider__holder .slider__item--1 {
    position: relative;
    z-index: 2;
    transform: translate(0) scale(1); }
  #slide-2:checked ~ .slider__holder .slider__item--1 {
    z-index: 1;
    transform: translateX(-100px) scale(0.85); }
    @media (max-width: 768px) {
      #slide-2:checked ~ .slider__holder .slider__item--1 {
        opacity: 0.6; } }
  #slide-3:checked ~ .slider__holder .slider__item--1 {
    z-index: 0;
    transform: translateX(-210px) scale(0.65); }
    @media (max-width: 900px) {
      #slide-3:checked ~ .slider__holder .slider__item--1 {
        transform: translateX(-170px) scale(0.65); } }
    @media (max-width: 768px) {
      #slide-3:checked ~ .slider__holder .slider__item--1 {
        opacity: 0; } }
  #slide-4:checked ~ .slider__holder .slider__item--1 {
    z-index: -1;
    opacity: 0;
    transform: translateX(-210px) scale(0.65); }
  #slide-5:checked ~ .slider__holder .slider__item--1 {
    z-index: -1;
    opacity: 0;
    transform: translateX(-210px) scale(0.65); }
  #slide-1:checked ~ .slider__holder .slider__item--2 {
    z-index: 1;
    transform: translateX(100px) scale(0.85); }
    @media (max-width: 768px) {
      #slide-1:checked ~ .slider__holder .slider__item--2 {
        opacity: 0.6; } }
  #slide-2:checked ~ .slider__holder .slider__item--2 {
    position: relative;
    z-index: 2;
    transform: translate(0) scale(1); }
  #slide-3:checked ~ .slider__holder .slider__item--2 {
    z-index: 1;
    transform: translateX(-100px) scale(0.85); }
    @media (max-width: 768px) {
      #slide-3:checked ~ .slider__holder .slider__item--2 {
        opacity: 0.6; } }
  #slide-4:checked ~ .slider__holder .slider__item--2 {
    z-index: 0;
    transform: translateX(-210px) scale(0.65); }
    @media (max-width: 900px) {
      #slide-4:checked ~ .slider__holder .slider__item--2 {
        transform: translateX(-170px) scale(0.65); } }
    @media (max-width: 768px) {
      #slide-4:checked ~ .slider__holder .slider__item--2 {
        opacity: 0; } }
  #slide-5:checked ~ .slider__holder .slider__item--2 {
    z-index: -1;
    opacity: 0;
    transform: translateX(-210px) scale(0.65); }
  #slide-1:checked ~ .slider__holder .slider__item--3 {
    z-index: 0;
    transform: translateX(210px) scale(0.65); }
    @media (max-width: 900px) {
      #slide-1:checked ~ .slider__holder .slider__item--3 {
        transform: translateX(170px) scale(0.65); } }
    @media (max-width: 768px) {
      #slide-1:checked ~ .slider__holder .slider__item--3 {
        opacity: 0; } }
  #slide-2:checked ~ .slider__holder .slider__item--3 {
    z-index: 1;
    transform: translateX(100px) scale(0.85); }
    @media (max-width: 768px) {
      #slide-2:checked ~ .slider__holder .slider__item--3 {
        opacity: 0.6; } }
  #slide-3:checked ~ .slider__holder .slider__item--3 {
    position: relative;
    z-index: 2;
    transform: translate(0) scale(1); }
  #slide-4:checked ~ .slider__holder .slider__item--3 {
    z-index: 1;
    transform: translateX(-100px) scale(0.85); }
    @media (max-width: 768px) {
      #slide-4:checked ~ .slider__holder .slider__item--3 {
        opacity: 0.6; } }
  #slide-5:checked ~ .slider__holder .slider__item--3 {
    z-index: 0;
    transform: translateX(-210px) scale(0.65); }
    @media (max-width: 900px) {
      #slide-5:checked ~ .slider__holder .slider__item--3 {
        transform: translateX(-170px) scale(0.65); } }
    @media (max-width: 768px) {
      #slide-5:checked ~ .slider__holder .slider__item--3 {
        opacity: 0; } }
  #slide-1:checked ~ .slider__holder .slider__item--4 {
    z-index: -1;
    opacity: 0;
    transform: translateX(210px) scale(0.65); }
  #slide-2:checked ~ .slider__holder .slider__item--4 {
    z-index: 0;
    transform: translateX(210px) scale(0.65); }
    @media (max-width: 900px) {
      #slide-2:checked ~ .slider__holder .slider__item--4 {
        transform: translateX(170px) scale(0.65); } }
    @media (max-width: 768px) {
      #slide-2:checked ~ .slider__holder .slider__item--4 {
        opacity: 0; } }
  #slide-3:checked ~ .slider__holder .slider__item--4 {
    z-index: 1;
    transform: translateX(100px) scale(0.85); }
    @media (max-width: 768px) {
      #slide-3:checked ~ .slider__holder .slider__item--4 {
        opacity: 0.6; } }
  #slide-4:checked ~ .slider__holder .slider__item--4 {
    position: relative;
    z-index: 2;
    transform: translate(0) scale(1); }
  #slide-5:checked ~ .slider__holder .slider__item--4 {
    z-index: 1;
    transform: translateX(-100px) scale(0.85); }
    @media (max-width: 768px) {
      #slide-5:checked ~ .slider__holder .slider__item--4 {
        opacity: 0.6; } }
  #slide-1:checked ~ .slider__holder .slider__item--5 {
    z-index: -1;
    opacity: 0;
    transform: translateX(210px) scale(0.65); }
  #slide-2:checked ~ .slider__holder .slider__item--5 {
    z-index: -1;
    opacity: 0;
    transform: translateX(210px) scale(0.65); }
  #slide-3:checked ~ .slider__holder .slider__item--5 {
    z-index: 0;
    transform: translateX(210px) scale(0.65); }
    @media (max-width: 900px) {
      #slide-3:checked ~ .slider__holder .slider__item--5 {
        transform: translateX(170px) scale(0.65); } }
    @media (max-width: 768px) {
      #slide-3:checked ~ .slider__holder .slider__item--5 {
        opacity: 0; } }
  #slide-4:checked ~ .slider__holder .slider__item--5 {
    z-index: 1;
    transform: translateX(100px) scale(0.85); }
    @media (max-width: 768px) {
      #slide-4:checked ~ .slider__holder .slider__item--5 {
        opacity: 0.6; } }
  #slide-5:checked ~ .slider__holder .slider__item--5 {
    position: relative;
    z-index: 2;
    transform: translate(0) scale(1); }

/*--------------------------------------------------------------
3.0 Bullets
--------------------------------------------------------------*/
.bullets__item {
  transition: all 0.2s ease; }
  #slide-1:checked ~ .bullets .bullets__item--1 {
    background: var(--color-primary); }
  #slide-2:checked ~ .bullets .bullets__item--2 {
    background: var(--color-primary); }
  #slide-3:checked ~ .bullets .bullets__item--3 {
    background: var(--color-primary); }
  #slide-4:checked ~ .bullets .bullets__item--4 {
    background: var(--color-primary); }
  #slide-5:checked ~ .bullets .bullets__item--5 {
    background: var(--color-primary); }


.card {
  position: relative;
  display: block;
  border-radius: var(--df-border-radius);
  background: #FFF;
  border: 1px solid rgba($color: #ccc, $alpha: 0.7);
  // box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.1); }
}
/*--------------------------------------------------------------
2.0 Slider
--------------------------------------------------------------*/
.slider {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  }
  .slider__radio {
    display: none; }
  .slider__holder {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 25px;
  }
    @media (max-width: 900px) {
      .slider__holder {
        max-width: 540px; } }
    @media (max-width: 600px) {
      .slider__holder {
        margin-top: 60px; } }
  .slider__item {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    overflow: hidden;
    width: 100%;
    opacity: 1;
    cursor: pointer; }
  .slider__item-content {
    padding: 40px; 
    img{
      width: 100%;
    }
    }
    @media (max-width: 600px) {
      .slider__item-content {
        padding: 32px 32px; } }
    @media (max-width: 375px) {
      .slider__item-content {
        padding: 40px 24px; } }
  .slider__item-text {
    padding: 60px 0; }

/*--------------------------------------------------------------
3.0 Bullets
--------------------------------------------------------------*/
.bullets {
  display: block;
  width: auto;
  height: 20px;
  height: 20px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center; }
  @media (max-width: 600px) {
    .bullets {
      margin-top: 25px; 
      margin-bottom: 75px; 
      } }
  .bullets__item {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 4px;
    border-radius: var(--df-border-radius);
    background: #ccc;
    cursor: pointer; }
    .bullets__item:hover {
      background: var(--color-primary); }

.section {
  position: relative;
  width: 100%;
  text-align: center; }
  .section__entry {
    width: 100%;
    max-width: 300px;
    margin: 0 auto; }
    .section__entry--center {
      text-align: center; }
  .section__title {
    display: block;
    padding-bottom: 12px; }
  .section__text {
    display: block; }

</style>