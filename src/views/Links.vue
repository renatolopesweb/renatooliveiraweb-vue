<template>
  <section>
    <h1>Links</h1>
    <article>
      <ul class="social">
        <li v-for="item in social" :key="item.id">
          <a :href="item.url" target="_blank" :title="item.title">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          title: "Speed Locações (Wix / Freelance)",
          url: "https://www.speedlocacoes.com.br"
        },
        {
          title: "Landpage Verão (SVG animado)",
          url: "https://renato7oliveira.github.io/svg-animate/src"
        },
        {
          title: "Landpage Genérica (HTML / CSS-Grid + Sass)",
          url: "https://renato7oliveira.github.io/landpage-generica/src/"
        },
        {
          title: "Street Fighter (Adobe Edge)",
          url: "https://renato7oliveira.github.io/street-fighter-audio-project"
        }
      ]
    };
  }
};
</script>