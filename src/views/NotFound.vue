<template>
  <section>
    <article>
      <h2>página não encontrada...</h2>
    <router-link to="/"
      ><div class="ghost" title="Arraste-me pra Home!!!">👻</div>
    </router-link>
    </article>
  </section>
</template>

<style lang="scss" scoped>
$color-primary: #8c52ff;
$t-def: 0.3s;

article {
  align-self: center;
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