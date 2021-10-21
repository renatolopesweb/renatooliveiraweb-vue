<template>
  <article>
    <router-link to="/">
      <h2>Página não encontrada</h2>
      <div class="ghost" title="Arraste-me pra Home!!!">👻</div>
    </router-link>
  </article>
</template>

<style lang="scss" scoped>
@import "../assets/css/_variables.scss";

article {
  margin-top: 100px;
  text-align: center;
  a{
    color: $color-primary;
  }
}

.ghost {
  font-size: 2em;
  animation: ghost 0.5s ease-in-out alternate infinite;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes ghost {
  to {
    transform: translateY(40px);
  }
}
</style>