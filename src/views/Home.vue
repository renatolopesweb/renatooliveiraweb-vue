<template>
  <section>
    <article>
      <div>
        <h1>RENATO<span>7</span>OLIVEIRA</h1>
        <p>FRONTEND / UX & UI</p>
      </div>
    </article>

    <div class="about">
      <div>
        <figure>
          <img
            src="../assets/images/renato7oliveira-about.jpg"
            alt="renato7oliveira"
            title="renato7oliveira"
            class="about-photo-class"
          />
        </figure>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          distinctio optio explicabo velit laborum! Temporibus, ab recusandae
          optio repellat in maiores quaerat unde a, voluptates saepe impedit
          ducimus veritatis dolorum!
        </p>
      </div>
      <div>
        <figure>
          <i class="fas fa-mug-hot"></i>
        </figure>
        <h2>Code</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          nesciunt laudantium reprehenderit
        </p>
        <ul>
          <li>Tec A</li>
          <li>Tec A</li>
          <li>Tec A</li>
          <li>Tec A</li>
        </ul>
      </div>
      <div>
        <figure>
          <i class="far fa-eye"></i>
        </figure>
        <h2>Design</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          nesciunt laudantium reprehenderit
        </p>
        <ul>
          <li>Tec A</li>
          <li>Tec A</li>
          <li>Tec A</li>
          <li>Tec A</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/css/_variables.scss";

article {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  align-content: center;
  height: calc(100vh - 125px);
  text-align: center;
  div {
    grid-column: 3 / 4;
  }
  span {
    font-size: 5.4vw;
  }
  h1 {
    color: $color-primary;
    font-size: 5vw;
    font-weight: 900;
    letter-spacing: -3px;
  }
  p {
    color: $color-default;
    color: $color-primary;
    font-size: 3.5vw;
    font-weight: 300;
  }
}

.about {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 2px solid rgba($color: $color-primary, $alpha: 0.1);
  height: calc(100vh - 68px);
  // align-items: center;
  // align-content: center;
  // text-align: center;

  div {
    color: $color-primary;
    padding: 40px 20px;
    figure {
      text-align: center;
    }
    img {
      width: 150px;
      border-radius: 100%;
    }
    i {
      font-size: 6em;
      // height: 125px;
    }
    p {
      font-size: 1.2em;
      line-height: 30px;
      margin: 15px 0;
    }
    h2 {
      font-size: 2.2em;
      font-weight: lighter;
      margin-top: 25px;
      text-align: center;
      text-transform: uppercase;
    }
    li {
      font-size: 1.2em;
      list-style-type: circle;
      margin-left: 20px;
    }
  }
}
.about div:nth-child(2) {
  border-left: $border-default;
  border-right: $border-default;
}

@media (max-width: 700px) {
  article {
    height: calc(100vh - 70px);
    h1 {
      font-size: 10vw;
    }
    span {
      font-size: 10.5vw;
    }
    p {
      font-size: 6.5vw;
      font-weight: 500;
    }
  }
  .about {
    grid-template-columns: 1fr;
    border-top: 0;
    height: auto;
  }
  .about div:nth-child(2) {
    border-left: 0;
    border-right: 0;
  }
  .about div:nth-child(3) {
    padding-bottom: 100px;
}
  .about div{
    border-top: $border-default;
  }
}
</style>