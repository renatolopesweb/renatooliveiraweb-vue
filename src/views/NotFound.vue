<template>
  <div>
    <h2>página não encontrada...</h2>
    <router-link to="/"
      ><div class="ghost" title="Arraste-me pra Home!!!">👻</div>
    </router-link>
    
  </div>
</template>

<style lang="scss" scoped>
  div{
    text-align: center;
    h2{
      font-size: 1.4em;
    }
    .bt{
      border-radius: 500px;
      border: 1px solid #f0f0f0;
      box-shadow: 1px 2px 3px #999;
      margin-top: 15px;
      padding: 12px;
      transition: 0.3s;
    }
      i{
        font-size: 1.6em;
        &:hover {
          opacity: 0.7;
        }
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