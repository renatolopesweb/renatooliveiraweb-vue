<template>
  <section>
    <h1>Contato</h1>
    <ul>
      <li v-for="item in social" :key="item.id">
        <a :href="item.url" target="_blank" :title="item.title"
          ><i :class="item.img" aria-hidden="true"></i
        > {{ item.title }}</a>
      </li>
    </ul>
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
          url: "https://www.linkedin.com/in/renatooliveiraweb",
        },
        {
          title: "Instagram",
          img: "fab fa-instagram",
          url: "https://www.instagram.com/renatooliveiraweb",
        },
        {
          title: "Github",
          img: "fab fa-github-alt",
          url: "https://github.com/renato7oliveira",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  ul{
    margin-bottom: 75px;
  }
  li {
    font-size: 1.1em;
    margin-top: 15px;
    i {
      text-align: center;
      width: 20px;
    }
    a {
      color: var(--color-primary);
      &:hover {
        text-decoration: underline;
      }
    }
  }

</style>