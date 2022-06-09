<template>
  <section>
    <header>
      <h1>RENATO OLIVEIRA</h1>
      <h2>PORTFOLIO WEB</h2>
    </header>
    <article>
      <div class="description">
        <p>
          Profissional da web dedicado ao front-end e design (UI). Tive
          oportunidade de trabalhar em startups de marketing digital e de TI.
          Sou incansável, me esforço diariamente para entregar o melhor
          possível. Casado com a Delma, pai da Ana Luiza e da "Cyndi".
        </p>

        <div class="btn-content" @click="toTop()">
          <router-link to="/skills" class="btn"
            ><i class="fas fa-chess-knight"></i>Skills</router-link
          >
        </div>
      </div>
      <div>
        <figure>
          <img
            src="../assets/images/renato-oliveira-web-2.jpg"
            alt="Renato Oliveira Web"
            title="Renato Oliveira Web"
          />
        </figure>
        <div class="social">
          <ul>
            <li v-for="item in social" :key="item.id">
              <a :href="item.url" target="_blank" :title="item.title"
                ><i :class="item.img" aria-hidden="true"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  data() {
    return {
      social: [
        {
          title: "Linkedin",
          img: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/renatooliveiraweb",
        },
        {
          title: "Github",
          img: "fab fa-github-alt",
          url: "https://github.com/renato7oliveira",
        },
        {
          title: "Instagram",
          img: "fab fa-instagram",
          url: "https://www.instagram.com/renatooliveiraweb",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 0;
}
header {
  display: grid;
  align-content: center;
  background: var(--color-primary);
  height: 50vh;
  padding: 0 50px;
  h1 {
    color: #fff;
    font-size: 4vw;
    margin: 0;
    // animation: hello 0.5s ease-in-out;
  }
  h2 {
    color: #fff;
    // font-size: 3em;
    font-size: 3vw;
    font-weight: 900;
    margin: 0;
  }
}
@media (max-width: 1000px) {
  header {
    height: 100vh;
    padding: 25px;
    h1 {
      font-size: 7.5vw;
    }
    h2 {
      font-size: 6vw;
    }
  }
}
article {
  display: grid;
  grid-template-columns: auto 175px;
  grid-gap: 75px;
  grid-template-areas: "desc photo";
  align-content: center;
  // color: var(--color-primary);
  min-height: 50vh;
  padding: 0 50px;
  .description {
    grid-area: desc;
  }
  h2 {
    color: #fff;
    font-size: 1.7em;
    font-weight: 900;
    margin: 15px 0;
  }
  p {
    font-size: 1.1em;
    font-weight: 500;
    line-height: 30px;
    // margin-top: 20px;
  }
  .social {
    // border: 2px solid red;
    text-align: center;
    ul {
      display: flex;
      justify-content: space-around;
      margin: 15px 0;
    }
    a {
      color: var(--color-primary);
      font-size: 1.4em;
      &:hover {
        color: rgba($color: #000, $alpha: 0.9);
      }
    }
  }
  figure {
    display: grid;
    align-content: center;
    grid-area: photo;
    img {
      border-radius: 100%;
      width: 100%;
    }
  }
}
.btn-content {
  display: flex;
  margin-top: 30px;
  padding-bottom: 35px;
}
.btn {
  background-color: #fff;
  border: 0;
  border-radius: var(--df-border-radius);
  box-shadow: var(--box-shadow);
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
  color: var(--color-primary);
  cursor: pointer;
  font-size: 0.8em;
  font-weight: 500;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    background: rgba($color: #fff, $alpha: 0.7);
  }
  i {
    margin-right: 5px;
  }
}
@media (max-width: 1100px) {
  .btn-content {
    flex-direction: column;
    margin-bottom: 50px;
  }
}
@media (max-width: 800px) {
  article {
    grid-template-columns: 1fr;
    grid-gap: 0;
    grid-template-areas:
      "photo"
      "desc";
    height: auto;
    padding: 25px;
    h2 {
      font-size: 2em;
      margin-top: 25px;
    }
  }
}
</style>