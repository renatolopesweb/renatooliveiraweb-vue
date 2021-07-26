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
        <h2>FRONTEND · WEB</h2>
        <div>
          <p>
            10+ anos que trabalho para empresas nas divisões de web, normalmente
            dedicado ao frontend e design de interface.
            <router-link to="/about">Saiba mais</router-link>
          </p>
        </div>
      </article>
    </header>
    <!-- <footer>
      <article class="card">
        <div class="screen">
          <i class="fa fa-flask" aria-hidden="true"></i>
        </div>
        <div class="description" @click="toTop()">
          <router-link to="/lab">
            <h2>Experimentos</h2>
            <p>
              Pesquisa, desenvolvimento e diversão
            </p>
          </router-link>
        </div>
      </article>
      <article class="card">
        <div class="screen">
          <i class="fa fa-user" aria-hidden="true"></i>
        </div>
        <div class="description" @click="toTop()">
          <router-link to="/about">
            <h2>Sobre</h2>
            <p>
              Resumo sobre minha carreira profissional
            </p>
          </router-link>
        </div>
      </article>
      <article class="card">
        <div class="screen">
          <i class="fa fa-bicycle" aria-hidden="true"></i>
        </div>
        <div class="description">
          <a href="#skills" @click="skills = true">
            <h2>Habilidades</h2>
            <p>
              Que venho aprimorando ultimamente 💀
            </p>
          </a>
        </div>
      </article>
    </footer> -->
    <div id="skills">
      <Skills />
    </div>
  </section>
</template>

<script>
import Skills from "../components/Skills.vue";

export default {
  components: {
    Skills,
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
    margin-top: -120px;
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
    height: 100vh;
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



