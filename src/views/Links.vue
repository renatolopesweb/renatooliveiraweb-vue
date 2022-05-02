<template>
  <section>
    <h1>Links</h1>
    <article
      v-for="(item, article) in projects.front"
      :key="article"
      class="card"
    >
      <span>{{ item.intro }}</span>
      <h2><a :href="item.url" target="_blank">{{ item.title }}</a></h2>
      <p>{{ item.stack }}</p>
    </article>
  </section>
</template>


<script>
export default {
  data() {
    return {
      projects: {
        front: [
          {
            intro: "item.categ",
            title: "Em atualização",
            stack: "item.stack",
            url: "https://www.renatooliveiraweb.com/#/links",
          },
        ],
      },
    };
  },
};
</script>


<style scoped lang="scss">
h1 {
  grid-row: 1;
  grid-column: 1 / -1;
  margin-bottom: 0px;
}
section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  padding-bottom: 25px;
}
article {
  background: #fff;
  padding: 25px;
  h2 , a {
    color: var(--color-primary);
    margin: 15px 0;
    &:hover{
      text-decoration: underline;
    }
  }
  p {
    font-weight: 700;
  }
}
@media (max-width: 900px) {
  h1{
    margin-bottom: 25px;
  }
  section {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 25px;
    padding-bottom: 75px;
  }
  article {
    margin-bottom: 25px;
    padding: 25px;
  }
}
@media (max-width: 600px) {
  section {
    grid-template-columns: 1fr;
  }
}


</style>