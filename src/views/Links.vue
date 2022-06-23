<template>
  <section>
    <h1>Links</h1>
    <!-- <h2>Minhas Redes Sociais</h2>
    <ul>
      <li v-for="item in social" :key="item.id">
        <a :href="item.url" target="_blank" :title="item.title"
          ><i :class="item.img" aria-hidden="true"></i> {{ item.title }}</a
        >
      </li>
    </ul>-->
    <!-- <h2>Experimentos Web</h2>-->

    <!-- <p>Em breve...🐶</p> -->
    <div v-for="(item, article) in projects.front" :key="article">
      <h2>
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </h2>
      <span>{{ item.stack }}</span>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      projects: {
        front: [
          {
            title: "Front-end Test",
            stack: "HTML / CSS-Grid",
            url:
              "https://renato7oliveira.github.io/experimentos/Grid_CSS_Template_Canyon/src/"
          },
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
section{
  padding-bottom: 50px;
}
div {
  margin-bottom: 25px;
}
h2 {
  font-size: 1.1em;
  font-weight: 500;
  line-height: 30px;
  text-transform: unset;
}
span {
  // color: #78657E;
  font-size: 0.9em;
  font-weight: bolder;
}
</style>