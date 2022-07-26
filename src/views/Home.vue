<template>
  <section>
    <header>
      <h1>RENATO OLIVEIRA</h1>
      <h2>
        <svg height="75" stroke="#000" stroke-width="2" class="animate-title" width="100%">
          <text
            x="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            y="25px"
          >front-end · web-design</text>
        </svg>
      </h2>
    </header>
    <div class="about">
      <figure>
        <img
          src="../assets/images/renato-oliveira-web-parati.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>
      <article>
        <p>
          Olá, meu nome é
          <strong>RENATO OLIVEIRA</strong>, profissional de front-end e web-design. Obstinado desde 2009 em
          materializar ideias e torna-las responsivas com meu conhecimento e experiência. Onipresente em Comunicação, Marketing e
          TI. Mais detalhes em
          <a
            href="https://drive.google.com/file/d/1Xc1jfuPX1rzA3627AHtKe_HWVZaeaYr8/view?usp=sharing"
            target="_blank"
          >currículo (PDF)</a>.
        </p>
        <h2>Habilidades</h2>
        <p>
          <span>Code:</span> JS, Sass > CSS, HTML5
        </p>
        <p>
          <span>Libs:</span> Bootstrap, Material Design
        </p>
        <p>
          <span>Design:</span> XD, Photoshop
        </p>
        <p>
          <span>Extra:</span> Wordpress, Github, NPM, E-mail mkt
        </p>
      </article>
    </div>
  </section>
</template>
<style lang="scss" scoped>
header {
  display: grid;
  align-content: center;
  height: calc(100vh - 100px);
  // background: red;
  text-align: center;
  h1 {
    font-size: 5.2vw;
    font-weight: 900;
    letter-spacing: -4px;
    margin: 0;
  }
  h2 {
    color: var(--color-bg);
    font-size: 3.1vw;
    font-weight: 900;
    margin: 0;
  }
}
@media (max-width: 700px) {
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
    fill: var(--color-bg);
    fill-opacity: 0;
  }
  100% {
    fill: var(--color-bg);
    fill-opacity: 1;
  }
}

.about {
  display: flex;
  align-items: center;
  height: 100vh;
  gap: 50px;
  span {
    font-weight: 900;
    text-transform: uppercase;
  }
}
figure {
  img {
    border-radius: 100px 3px;
    width: 250px;
    filter: grayscale(1);
    &:hover {
      filter: grayscale(0);
    }
  }
}
@media (max-width: 700px) {
  .about {
    height: auto;
    flex-direction: column;
    gap: 25px;
  }
  figure img {
    filter: grayscale(0);
    width: 100%;
  }
}
</style>