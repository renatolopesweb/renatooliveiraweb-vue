<template>
  <ul class="social">
    <li v-for="item in social" :key="item.id">
      <a :href="item.url" target="_blank" :title="item.title">
        <i :class="item.img" aria-hidden="true"></i>{{ item.title }}
      </a>
    </li>
    <li>
      <details>
        <summary><i class="far fa-envelope" aria-hidden="true"></i>E-mail
        </summary><p>renato.ldeoliveira@gmail.com</p>
      </details>
    </li>
  </ul>
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
        }
      ]
    };
  }
};
</script>