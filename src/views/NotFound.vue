<template>
<section>
  <div>
    <h2>página não encontrada...</h2>
    <router-link to="/"
      ><div class="ghost" title="Arraste-me pra Home!!!">👻</div>
    </router-link>
  </div>
  </section>
</template>

<style lang="scss" scoped>
section{
  display: grid;
  align-content: center;
  height: 100vh;
}
  div{
    text-align: center;
    h2{
      font-size: 1.4em;
    }
  }
  .ghost{
    font-size: 2em;
    animation: ghost 0.5s ease-in-out alternate infinite;
      &:hover{
      animation-play-state: paused;
  }
  }

  @keyframes ghost{
    to{
        transform: translateY(40px);
    }
}
</style>