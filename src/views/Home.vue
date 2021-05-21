<template>
  <section>
    <article>
      <h2>RENATO7OLIVEIRA</h2>
      <p>frontend web</p>
    </article>
  </section>
</template>


<style lang="scss" scoped>
$color-primary: #8c52ff;
$t-def: 0.3s;

article {
  align-self: center;
  h2 {
    color: $color-primary;
    font-size: 2.8em;
    letter-spacing: -3px;
  }
  p {
    font-size: 2em;
    font-weight: bold;
  }
}
@media (max-width: 800px) {
  article {
    h2 {
      font-size: 2em;
      margin-top: -75px;
    }
    p {
      font-size: 1.6em;
    }
  }
}
</style>



