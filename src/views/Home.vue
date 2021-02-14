<template>
    <section>
      <article>
        <h2>renato<span class="style_1">7</span>oliveira</h2>
            <p>Olá, meu nome é Renato Oliveira, trabalho com desenvolvimento frontend e webdesign.</p>
            <router-link to="/portfolio" class="btn btn_primary"><i class="material-icons md-layers"></i> portfolio</router-link>
      </article>
    </section>
</template>

<style lang="scss" scoped>
.style_1{
  color: rgb(106,72,215);
}
section{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-content: center;
  height: 100vh;
  text-align: center;
  article{
    grid-column-start: 3;
    grid-column-end: 4;
    h2{
    color: rgba(0, 0, 0, 1);
    font-weight: lighter;
    font-size: 3.6em;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  p{
    color: rgba(0, 0, 0, 1);
    text-shadow: 0px 0px 1px #666;
    font-size: 1.2em;
    font-weight: lighter;
    line-height: 30px;
    margin-bottom: 20px;
  }
  }
  
}
@media (max-width: 1024px) {
  section article{
    grid-column-start: 1;
    grid-column-end: 6;
    h2{
      font-size: 2em;
      margin-top: -100px;
    }
  }
}
</style>