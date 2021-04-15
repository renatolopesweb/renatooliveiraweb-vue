<template>
  <section>
    <article>
      <h2>RENATO<span class="style_1">7</span>OLIVEIRA</h2>
      <p>
        Trabalho com web desde 2009 e me dedico ao desenvolvimento frontend e marketing digital.
      </p>
      <router-link to="/portfolio" class="btn btn_secondary"
        ><i class="material-icons md-layers"></i> portfolio</router-link
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
  background: $color-primary;
  height: 100vh;
  padding: 20px;
  text-align: center;
  article {
    grid-column-start: 2;
    box-shadow: 0px 0px 0px transparent;
    background: transparent;
    color: #fff;
    h2 {
      font-size: 3.4em;
      font-weight: bolder;
      margin-bottom: 5px;
    }
    p {
      font-size: 1.1em;
      line-height: 30px;
      margin-bottom: 25px;
    }
  }
}

.btn_secondary {
  background: #fff;
  color: $color-primary;
  &:hover {
    background: $color-secondary;
    color: #fff;
  }
  &:active{
    background: rgba(0, 0, 0, 0.7);
  }
}

@media (max-width: 520px) {
  section {
    grid-template-columns: 1fr;
    article {
      margin-top: -40px;
      h2 {
        font-size: 1.6em;
      }
    }
  }
}
</style>