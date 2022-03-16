<template>
  <article>
    <h1>Sobre</h1>
    <div>
      <p>
        Olá, sou o <span><strong>Renato Oliveira</strong></span
        >, +10 anos que trabalho na web com Frontend e Design de Interface.
        Normalmente estou em divisões de Marketing, TI & Comunicação. Moro em
        São Paulo, casado com a Delma, pai da Ana Luiza e da "Cyndi".
      </p>
      <figure>
        <img
          src="../assets/images/renato-oliveira-web.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>
    </div>
    <h2>Habilidades</h2>
    <h3>Code</h3>
    <ul>
      <li>Angular</li>
      <li>Ionic</li>
      <li>HTML5 / Sass / CSS3</li>
    </ul>
    <h3>Visual</h3>
    <ul>
      <li>XD</li>
      <li>Photoshop</li>
    </ul>
    <h3>Marketing</h3>
    <ul>
      <li>Wordpress</li>
    </ul>
  </article>
</template>

<style lang="scss" scoped>
div {
  display: grid;
  grid-template-columns: auto 200px;
  grid-template-areas: "desc photo";
  grid-gap: 25px;
  img {
    grid-area: photo;
    border-radius: 100%;
    cursor: none;
    filter: grayscale(1);
    width: 100%;
    &:hover {
      filter: grayscale(0);
    }
  }
}
@media (max-width: 1100px) {
  div {
    grid-template-columns: 1fr;
    grid-template-areas:
      "photo photo"
      "desc desc";
    figure {
      text-align: center;
      img {
        margin-top: 25px;
        width: 75%;
      }
    }
  }
}
p {
  grid-area: desc;
  font-size: 1.2em;
  line-height: 35px;
  margin-top: 15px;
  margin-bottom: 45px;
}
span {
  color: var(--color-primary);
  text-transform: uppercase;
}
h2 {
  color: var(--color-primary);
  font-size: 1.8em;
  font-weight: 900;
  margin-bottom: 15px;
}
h3 {
  font-weight: 700;
  margin-bottom: 10px;
}
ul {
  margin-bottom: 50px;
  text-transform: uppercase;
}
li {
  font-size: 1.2em;
  margin-bottom: 5px;
  margin-top: 0px !important;
}
</style>