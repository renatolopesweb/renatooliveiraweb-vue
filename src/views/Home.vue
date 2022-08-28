<template>
  <section>
    <header>
      <h1>RENATO OLIVEIRA</h1>
      <h2>
        <svg height="75" stroke="#000" stroke-width="2" class="animate-title" width="100%">
          <text x="50%" dominant-baseline="middle" text-anchor="middle" y="25px">front-end · web-design</text>
        </svg>
      </h2>
    </header>
    <section class="about">
      <article class="card">
        <figure>
          <img src="../assets/images/renato-oliveira-web-about.jpg" alt="Renato Oliveira Web"
            title="Renato Oliveira Web" />
        </figure>
        <p>
          Sou o <strong>RENATO OLIVEIRA</strong>, profissional de front-end e web-design. Obstinado desde 2009
          em materializar
          ideias com meu conhecimento e experiência. Onipresente em Comunicação, Marketing e TI.
        </p>
        <p>
          <a href="https://drive.google.com/file/d/1Xc1jfuPX1rzA3627AHtKe_HWVZaeaYr8/view?usp=sharing"
            target="_blank" class="btn"><i class="fas fa-link"></i> Currículo</a>
        </p>
      </article>
    </section>
  </section>
</template>

<!-- <script>
import Social from "../components/Social";
export default {
  components: {
    Social
  }
};
</script> -->


<style lang="scss" scoped>
section {
  padding: 0;
}

header {
  align-content: center;
  // background-color: #ccc;
  // background-image: url(../assets/images/header-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // opacity: 0.5;
  display: grid;
  height: calc(100vh - 100px);
  text-align: center;

  h1 {
    font-size: 6vw;
    font-weight: 900;
    letter-spacing: -4px;
    margin: 0;
  }

  h2 {
    font-size: 3.3vw;
    font-weight: 900;
    margin: 0;
  }
}

@media (max-width: 1024px) {
  header {
    display: none;
  }
}

.animate-title {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: dash 3s linear forwards, animateTitle 1s ease-in forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes animateTitle {

  0%,
  90% {
    fill: transparent;
    fill-opacity: 0;
  }

  100% {
    fill: transparent;
    fill-opacity: 1;
  }
}

.about {
  display: flex;
  align-items: center;
  height: 100vh;
  margin: var(--mar-pad-dft);
}

article {
  align-content: center;
  display: grid;
  border-radius: 5px;
  height: calc(100vh - 200px);
  margin: auto;
  max-width: 800px;
  padding: 50px;
  text-align: center;
  img {
    border-radius: 500px;
    width: 150px;
    filter: grayscale(1);

    &:hover {
      filter: grayscale(0);
    }
  }
  p{
    margin-top: 10px;
  }
}

@media (max-width: 900px) {
  .about {
    height: auto;
    flex-direction: column;
    margin: 20px;
    padding-bottom: 75px;
  }

  article {
    height: auto;
    padding: 20px;
    p{
      margin-top: 20px;
    }
    a{
      display: block;
    }
  }

  figure img {
    border-radius: 5px;
    filter: grayscale(0);
    width: 100%;
  }
}
</style>