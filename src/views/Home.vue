<template>
  <section>
    <article>
      <h2>RENATO<span class="style_1">7</span>OLIVEIRA</h2>
      <p>
        Olá! Trabalho com desenvolvimento frontend, design de interface e gestão de projetos 
        web.</p>
      <router-link to="/portfolio" class="btn btn_primary"
        ><i class="material-icons md-layers"></i> ver portfolio</router-link
      >
    </article>
  </section>
</template>

<style lang="scss" scoped>
$color-primary: #6a48d7;
$color-secondary: #37266b;
.style_1 {
  color: $color-secondary;
}
section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  background: #f0edf3;
  height: 100vh;
  text-align: center;
  article {
    grid-column-start: 2;
    box-shadow: 0px 0px 0px transparent;
    background: transparent;
    color: rgba(255, 255, 255, 0.8);
    margin-top: -65px;
    h2 {
      color: $color-primary;
      font-size: 3.4em;
      font-weight: bolder;
      margin-bottom: 5px;
    }
    p {
      color: #6a48d7;
      font-size: 1.1em;
      line-height: 30px;
      margin-bottom: 25px;
    }
  }
}
.btn {
  box-shadow: 5px 1px 30px rgba(112, 48, 160, 0.3);
  color: #6a48d7;
  margin-top: 20px!important;
  padding: 18px 24px;
  i{
    color: $color-primary!important;
  }
  &:hover {
    box-shadow: 5px 1px 50px rgba(112, 48, 160, 0.5);
  }
  &:active{
    background: #F0EDF3;
  }
}

@media (max-width: 800px) {
  section {
    grid-template-columns: 1fr;
    background: #fff;
    article {
      h2 {
        font-size: 1.6em;
      }
    }
  }
}
</style>