<template>
    <section>
      <article>
        <h2>renato7oliveira</h2>
            <p>Olá, meu nome é Renato Oliveira, trabalho com webdesign e desenvolvimento frontend para web.</p>
            <router-link to="/portfolio" class="btn btn_white"><i class="material-icons-outline md-account_circle"></i> portfolio</router-link>
      </article>
    </section>
</template>

<style lang="scss" scoped>
section{
  align-content: center;
  color: rgba(255, 255, 255, 0.9);
  display: grid;
  height: 100vh;
  width: 90%;
  margin: auto;
  max-width: 630px;
  text-align: center;
  h2{
    text-transform: uppercase;
    font-weight: lighter;
    font-size: 3.6em;
    margin-bottom: 5px;
  }
  p{
    font-size: 1.2em;
    font-weight: lighter;
    line-height: 30px;
    margin-bottom: 20px;
  }
}
@media (max-width: 60em) {
  section{
    align-content: initial;
    h2{
      font-size: 2em;
      margin-top: 20%;
    }
  }
}
</style>