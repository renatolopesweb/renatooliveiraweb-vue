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
            dedicado ao desenvolvimento frontend e design.
            <router-link to="/about">Saiba mais</router-link>
          </p>
        </div>
      </article>
    </header>
    <!-- <main class="show-d">
      <h3>Code</h3>
      <ul>
        <li>JS - TS</li>
        <li>HTML</li>
        <li>CSS-Grid</li>
        <li>Sass</li>
      </ul>
      <h3>Framework</h3>
      <ul>
        <li>Angular</li>
        <li>Vue.js</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Adobe</h3>
      <ul>
        <li>XD</li>
        <li>Photoshop</li>
        <li>Premiere</li>
      </ul>
    </main> -->
    <footer>
      <article class="card">
        <div class="screen">
          <i class="fa fa-user" aria-hidden="true"></i>
        </div>
        <div class="description" @click="toTop()">
          <router-link to="/about">
            <h2>Sobre</h2>
            <p>Um resumo sobre minha carreira profissional e momento atual</p>
          </router-link>
        </div>
      </article>
      <article class="card">
        <div class="screen">
          <i class="fa fa-flask" aria-hidden="true"></i>
        </div>
        <div class="description" @click="toTop()">
          <router-link to="/lab">
            <h2>Experimentos</h2>
            <p>Coisas feitas por mim a caráter de pesquisa, desenvolvimento e diversão</p>
          </router-link>
        </div>
      </article>
      <article class="card">
        <div class="screen">
          <i class="fa fa-fighter-jet" aria-hidden="true"></i>
        </div>
        <div class="description">
          <h2>Habilidades</h2>
          <p>
            Saiba o que venho usando nesses últimos anos (conteúdo delicado!)
          </p>
        </div>
      </article>
    </footer>
  </section>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
}
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
    text-align: center;
  }
  img {
    background: $color-primary;
    max-width: 150px;
    border-radius: 500px;
    // filter: grayscale(1);
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
    font-size: 4em;
  }
  h2 {
    color: rgba($color: #000000, $alpha: 0.2);
    font-size: 3.6em;
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
  grid-gap: 65px;
  margin: 0 65px 65px 65px;
  article {
    display: grid;
    grid-template-rows: 175px auto;
    h2, a {
      color: rgba($color: #000000, $alpha: 0.5);
      &:hover{
        text-decoration: none;
      }
    }
  }
  .screen {
    background: $color-primary;
    text-align: center;
    align-items: center;
    display: grid;
    i {
      color: #fff;
      font-size: 6em;
    }
    @media (max-width: 1024px) {
      i {
        font-size: 4em;
      }
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
      padding-bottom: 100px;
      margin: 0px;
      article {
        grid-template-rows: 155px 200px;
      }
    }
  }
</style>



