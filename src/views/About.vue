<template>
  <article>
    <h1>Sobre</h1>
    <div class="about">
      <div class="description">

      <p>
        Olá, sou o <span><strong>Renato Oliveira</strong></span
        >, +10 anos que trabalho na web com Frontend e Design de Interface.
        Normalmente estou em divisões de Marketing, TI & Comunicação. Moro em
        São Paulo, casado com a Delma, pai da Ana Luiza e da "Cyndi".
      </p>

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
    <h2>Habilidades</h2>
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
    </ul>
  </article>
</template>

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