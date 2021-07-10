<template>
  <section>
    <article>
      <router-link to="/"
        >
        <h2>Página não encontrada</h2>
        <div class="ghost" title="Arraste-me pra Home!!!">👻</div>
      </router-link>
    </article>
  </section>
</template>

<style lang="scss" scoped>
article {
  display: grid;
  align-items: center;
  height: 100vh;
  vertical-align: top;
  margin: auto;
  text-align: center;
  a:hover{
    text-decoration: none;
  }
  h2{
    font-size: 1.2em;
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