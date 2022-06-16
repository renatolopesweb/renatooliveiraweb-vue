<template>
  <section>
    <h1>Sobre</h1>
    <article>
      <div class="description">
        <p><strong>Nome</strong>: Renato Oliveira</p>
        <p><strong>Aniversário</strong>: 12/05</p>
        <p><strong>Signo</strong>: Touro</p>
        <p><strong>Formação</strong>: Comunicação Web UNIP</p>
        <p><strong>Posição</strong>: Web Designer / Front-end</p>
        <p><strong>Departamentos</strong>: TI / Marketing / Comunicação</p>
        <p><strong>Missão</strong>: Transformar semente em substância</p>
        <p>
          <strong>Amo</strong>: Minha profissão, pedalar, cinema, centro de São
          Paulo, MPB, temaki, assistir TV, quebra cabeça, xadrez,
          youtube
        </p>
        <div class="btn-content" @click="toTop()">
          <router-link to="/curriculo" class="btn"
            ><i class="far fa-file-alt"></i>Currículo</router-link
          >
        </div>
      </div>
      <div>
        <figure>
          <img
            src="../assets/images/renato-oliveira-web.jpg"
            alt="Renato Oliveira Web"
            title="Renato Oliveira Web"
          />
        </figure>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
      });
    }
  }
}
  </script>

<style lang="scss" scoped>
article {
  display: grid;
  grid-template-columns: auto 300px;
  grid-gap: 50px;
  grid-template-areas: "desc photo";
  .description {
    grid-area: desc;
  }
  p {
    font-size: 1.2em;
    font-weight: normal;
    margin-bottom: 20px;
  }
  figure {
    display: grid;
    align-content: center;
    grid-area: photo;
    img {
      border-radius: var(--df-border-radius);
      width: 100%;
    }
  }
}
@media (max-width: 800px) {
  article {
    grid-template-columns: 1fr;
    grid-gap: 0;
    grid-template-areas:
      "photo"
      "desc";
    h2 {
      font-size: 2em;
      margin-top: 25px;
    }
    figure{
      margin-bottom: 15px;
    }
  }
}
</style>