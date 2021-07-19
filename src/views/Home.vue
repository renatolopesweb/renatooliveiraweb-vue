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
    <footer>
      <article class="card">
        <div class="screen">
          <i class="fa fa-flask" aria-hidden="true"></i>
        </div>
        <div class="description" @click="toTop()">
          <router-link to="/lab">
            <h2>Experimentos</h2>
            <p>
              Feitos por mim a caráter de pesquisa, desenvolvimento e diversão
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
              Um resumo sobre minha carreira profissional e o que venho fazendo
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
              Saiba o que venho usando ultimamente (conteúdo
              delicado!)💀☠️👻
            </p>
          </a>
        </div>
      </article>
    </footer>
    <div id="skills" v-show="skills">
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

  data() {
    return {
      skills: false,
    };
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
footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  align-items: center;
  background: rgba($color: #f0f0f0, $alpha: 0.5);
  height: 100vh;
  padding: 65px;
  article {
    display: grid;
    grid-template-rows: 175px auto;
    background: #fff;
    h2 {
      color: rgba($color: #000000, $alpha: 0.4);
    }
    a {
      color: rgba($color: #000000, $alpha: 0.5);
      &:hover {
        text-decoration: none;
      }
    }
  }
  
  .screen {
    display: grid;
    align-items: center;
    background: $color-primary;
    border-radius: 2px 2px 0 0;
    text-align: center;
    transition: $t-def;
    i {
      color: #fff;
      font-size: 6em;
    }
    @media (max-width: 1024px) {
      i {
        font-size: 4em;
      }
    }
    &:hover{
      background: #581AA6;
    }
  }
  .description {
    padding: 35px;

    h2 {
      font-size: 2em;
      font-weight: lighter;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
  }
}
@media (max-width: 1024px) {
  footer {
    grid-template-columns: 1fr;
    background: #fff;
    height: auto;
    padding: 0 0 125px 0;
    article {
      grid-template-rows: 155px 200px;
      a{
        font-weight: lighter;
        font-size: 1.2em;
        color: rgba($color: #000000, $alpha: 0.9);
      }
    }
  }
}

.skills {
  height: 100vh;
  padding: 50px;
}
@media (max-width: 1024px) {
  .skills {
    height: 180vh;
  }
}
</style>



