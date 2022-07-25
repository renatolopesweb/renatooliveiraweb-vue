<template>
  <section>
    <article>
      <h1>Sobre</h1>
      <p>
        Olá, meu nome é <strong>RENATO OLIVEIRA</strong>, profissional de front-end e web-design. Obstinado desde 2009 em
        materializar ideias e torna-las responsivas com meu conhecimento e experiência. Onipresente em áreas de Comunicação, Marketing e
        TI. Veja detalhes em
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
      <h2>Redes Sociais</h2>
      <ul class="social">
        <li v-for="item in social" :key="item.id">
          <a :href="item.url" target="_blank" :title="item.title">
            <i :class="item.img" aria-hidden="true"></i>{{ item.title }}
          </a>
        </li>
      </ul>
    </article>
    <figure>
      <img
        src="../assets/images/renato-oliveira-web-about.jpg"
        alt="Renato Oliveira Web"
        title="Renato Oliveira Web"
      />
    </figure>
  </section>
</template>


<script>
export default {
  data() {
    return {
      social: [
        {
          title: "Linkedin",
          img: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/renatooliveiraweb"
        },
        {
          title: "Github",
          img: "fab fa-github-alt",
          url: "https://github.com/renato7oliveira"
        },
        {
          title: "Instagram",
          img: "fab fa-instagram",
          url: "https://www.instagram.com/renatooliveiraweb"
        },
        {
          title: "E-mail",
          img: "far fa-envelope",
          url: "mailto:renato.ldeoliveira@gmail.com"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
section {
  display: flex;
  gap: 75px;
}
article {
  span {
    font-weight: 900;
    text-transform: uppercase;
  }
}
figure {
  img {
    border-radius: 500px;
    width: 200px;
    filter: grayscale(1);
    &:hover{
      filter: grayscale(0);
    }
  }
}
@media (max-width: 600px) {
  section{
    flex-direction: column-reverse;
    gap: 25px;
  }
  figure img{
    border-radius: 0;
    width: 100%;
  }
}
</style>