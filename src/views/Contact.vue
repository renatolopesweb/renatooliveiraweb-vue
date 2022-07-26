<template>
  <section>
    <article>
      <h1>Contato</h1>
      <ul class="social">
        <li v-for="item in social" :key="item.id">
          <a :href="item.url" target="_blank" :title="item.title">
            <i :class="item.img" aria-hidden="true"></i>{{ item.title }}
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