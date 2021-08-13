<template>
  <section>
    <header>
      <article>
        <figure>
          <img
            src="../assets/images/renato7oliveira-about.gif"
            alt="renato7oliveira"
            title="renato7oliveira"
          />
        </figure>
        <h1>RENATO7OLIVEIRA</h1>
        <h2>WEBDESIGNER</h2>
        <div>
          <p>
            10+ anos que trabalho para empresas nas divisões de web dedicado ao
            front-end e design de interface.
            <router-link to="/about"
              ><span @click="toTop()"> Saiba mais</span></router-link
            >
          </p>
        </div>
      </article>
    </header>
    <div class="show-d">
      <Experiments />
    </div>
  </section>
</template>

<script>
import Experiments from "../components/Experiments.vue";

export default {
  components: {
    Experiments,
  },

  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
      });
    },
  },
};
</script>




<style lang="scss" scoped>
$color-primary: #9e51ff;
$t-def: 0.3s;

header {
  grid-template-columns: repeat(5, 1fr);
  height: 100vh;
  align-items: center;
  article {
    grid-column: 2 / 5;
    // margin-top: -120px;
    text-align: center;
  }
  img {
    background: $color-primary;
    max-width: 150px;
    border-radius: 500px;
  }
  h1,
  h2 {
    font-family: "Bowlby One";
    font-weight: bold;
    letter-spacing: 4px;
    line-height: 1.2em;
  }
  h1 {
    color: $color-primary;
    font-size: 3.7em;
  }
  h2 {
    color: rgba($color: #000000, $alpha: 0.2);
    font-size: 3.7em;
  }
  div {
    margin: auto;
    max-width: 75%;
  }
  p {
    color: rgba($color: #000000, $alpha: 0.7);
    line-height: 1.6;
    font-size: 1.1em;
  }
}
@media (max-width: 1024px) {
  header {
    grid-template-columns: 1fr;
    align-items: center;
    article {
      grid-column: 4 / 5;
      h1 {
        font-size: 1.6em;
      }
      h2 {
        font-size: 1.4em;
      }
    }
  }
}
@media (max-width: 350px) {
  header {
    article {
      h1 {
        font-size: 1.4em;
      }
      h2 {
        font-size: 1.2em;
      }
    }
  }
}
</style>



