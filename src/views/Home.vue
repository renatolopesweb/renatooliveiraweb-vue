<template>
  <article>
    <figure class="show-m">
      <img
        src="../assets/images/renato7oliveira-about.gif"
        alt="renato7oliveira"
        title="renato7oliveira"
      />
    </figure>
    <h1>RENATO7OLIVEIRA</h1>
    <h2>FRONTEND · UX/UI</h2>
  </article>
</template>

<style lang="scss" scoped>
$color-primary: #141e55;

article {
  display: grid;
  align-items: center;
  align-content: center;
  height: 55vh;
  img {
    background: $color-primary;
    border-radius: 100%;
    margin: auto;
  }
}
h1,
h2 {
  font-weight: 900;
  letter-spacing: 1.5px;
  font-family: "Bowlby One", cursive;
}
h1 {
  color: $color-primary;
  font-size: 4.5vw;
  margin-bottom: -10px;
}
h2 {
  color: rgba($color: #999, $alpha: 0.7);
  font-size: 3.5vw;
  // font-size: 3em;
}

@media (max-width: 600px) {
  article {
    height: 80vh;
    text-align: center;
    h1{
      margin: 0;
    }
  }
}
</style>