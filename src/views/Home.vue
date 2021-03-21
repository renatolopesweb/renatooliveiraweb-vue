<template>
  <section>
    <article>
      <h2>Renato<span class="style_1">7</span>Oliveira</h2>
      <p>
        { Frontend · Web }
      </p>
      <router-link to="/portfolio" class="btn btn_primary"
        ><i class="material-icons md-layers"></i> portfolio</router-link
      >
    </article>
  </section>
</template>

<style lang="scss" scoped>
.style_1 {
  color: rgba(255, 255, 255, 0.2);
}
$color-secondary: rgb(51, 23, 140);
section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-content: center;
  height: 100vh;
  text-align: center;
  background: $color-secondary;
  article {
    grid-column-start: 2;
    grid-column-end: 5;
    box-shadow: 0px 0px 0px transparent;
    background: transparent;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    h2 {
      font-size: 2.8em;
      font-weight: lighter;
      margin-bottom: 5px;
    }
    p {
      font-size: 1.4em;
      font-weight: lighter;
      line-height: 35px;
      margin-bottom: 20px;
    }
  }
}
.btn {
  padding: 12px 22px;
}
.btn_primary {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.6);
  &:hover {
    background: rgba(255, 255, 255, 1);
    color: $color-secondary;
  }
}
@media (max-width: 800px) {
  // section {
  //   background: #fff;
  // }
  section article {
    grid-column-start: 1;
    grid-column-end: 6;
    // color: rgba(0, 0, 0, 0.8);
    h2 {
      font-size: 2em;
      margin-top: -100px;
    }
    p {
      text-shadow: 0px 0px 1px #666;
      font-size: 1.2em;
      font-weight: lighter;
    }
  }
  // .btn_primary {
  //   background: $color-secondary;
  //   color: rgba(255, 255, 255, 0.9);
  //   &:hover {
  //     background: transparent;
  //     border: 1px solid $color-secondary;
  //     color: $color-secondary;
  //   }
  // }
  // .style_1 {
  //   color: $color-secondary;
  // }
}
</style>