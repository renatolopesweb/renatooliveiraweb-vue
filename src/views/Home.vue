<template>
    <section>
      <article>
        <h2>renato7oliveira</h2>
            <p>Olá, meu nome é Renato Oliveira, trabalho com webdesign e desenvolvimento frontend para web.</p>
            <router-link to="/portfolio" class="btn btn_primary"><i class="material-icons-outline md-account_circle"></i> portfolio</router-link>
      </article>
    </section>
</template>

<style lang="scss" scoped>
section{
  align-content: center;
  display: grid;
  height: 100vh;
  margin: auto;
  max-width: 630px;
  text-align: center;
  width: 90%;
  h2{
    color: rgba(0, 0, 0, 0.6);
    font-weight: lighter;
    font-size: 3.6em;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  p{
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2em;
    // font-weight: lighter;
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