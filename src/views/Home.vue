<template>
  <section>
    <section class="section-hello">
      <article>
        <h2>
          Olá,<br />
          Sou o <span>Renato</span><br />
          Web Designer
        </h2>
        <!-- <p>
          <a href="" class="btn btn-primary"
            ><i class="fas fa-gamepad"></i> Projetos</a
          >
        </p> -->
        <span v-for="item in social" :key="item.id">
          <a :href="item.url" target="_blank" :title="item.title"
            ><i :class="item.img" aria-hidden="true"></i
          ></a>
        </span>
      </article>
      <figure>
        <img
          src="../assets/images/renato-oliveira-web.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>
    </section>
    <section class="section-about">
      <article>
        <p>
          Meu nome é Renato Oliveira, sou de São Paulo, casado com a Delma,
          pai da Ana Luiza e da "Cyndi". +10 anos que trabalho na web com
          desenvolvimento frontend e gerenciamento de projetos digitais.
        </p>
        <h2>Habilidades</h2>
        <div class="skills">
          <div>
            <h2><i class="fas fa-code" aria-hidden="true"></i> Code</h2>
            <ul>
              <li>javaScript</li>
              <li>typeScript</li>
              <li>HTML5</li>
              <li>Sass / CSS</li>
            </ul>
          </div>
          <div>
            <h2><i class="fas fa-tools" aria-hidden="true"></i> Framework</h2>
            <ul>
              <li>Angular</li>
              <li>Electron</li>
              <li>Ionic</li>
              <li>Vue</li>
            </ul>
          </div>
          <div>
            <h2><i class="fas fa-eye" aria-hidden="true"></i> Visual</h2>
            <ul>
              <li>XD</li>
              <li>Photoshop</li>
              <li>Premiere</li>
            </ul>
          </div>
          <div>
            <h2>
              <i class="fas fa-bullhorn" aria-hidden="true"></i> Marketing
            </h2>
            <ul>
              <li>Wordpress</li>
              <li>E-mail mkt</li>
            </ul>
          </div>
        </div>
        <!-- <footer>
          <h2>Redes Sociais:</h2>
          
            <span v-for="item in social" :key="item.id">
              <a :href="item.url" target="_blank" :title="item.title"
                ><i :class="item.img" aria-hidden="true"></i
              ></a>
            </span>
         
        </footer> -->
      </article>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          title: "Linkedin",
          img: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/renatooliveiraweb",
        },
        {
          title: "Instagram",
          img: "fab fa-instagram",
          url: "https://www.instagram.com/renatooliveiraweb",
        },
        {
          title: "Github",
          img: "fab fa-github-alt",
          url: "https://github.com/renato7oliveira",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-hello {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "description figure";
  // grid-gap: 50px;
  height: calc(100vh - 125px);
  align-items: center;
  article {
    grid-area: description;
    h2 {
      font-size: 3em;
      font-weight: 900;
      // line-height: 12vh;
      span {
        color: var(--color-primary);
      }
    }
    i {
      color: var(--color-black);
      font-size: 2.4em;
      margin: 10px 10px 0 0;
      &:hover {
        color: var(--color-primary);
        transform: translateY(-5px);
      }
    }
  }
  figure {
    grid-area: figure;
    img {
      filter: grayscale(1);
      border: 50px double #f0f0f0;
      border-radius: 100%;
      transition: var(--default-transition);
      width: 100%;
      &:hover {
        cursor: none;
        filter: grayscale(0);
      }
    }
  }
}
.section-about {
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  align-items: center;
  background: var(--color-primary);
  color: #fff;
  font-size: 1.2em;
  height: calc(100vh - 50px);
  left: 0;
  position: absolute;
  article {
    grid-column: 2 / 2;
  }
  h2 {
    font-size: 1.3em;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 40px;
  }
  a {
    color: #fff;
    text-decoration: underline;
  }
}
@media (max-width: 1100px) {
  .section-hello {
    padding: 0 25px;
  }
  .section-about {
    padding: 50px;
  }
}

@media (max-width: 700px) {
  .section-hello {
    grid-template-columns: 1fr;
    grid-template-areas:
      "figure"
      "description";
    // grid-gap: 50px;
    align-content: center;
    // height: calc(100vh - 150px);
    height: 100vh;
    text-align: center;
    article {
      h2 {
        font-size: 2em;
        // line-height: 6vh;
        // margin-bottom: 50px;
      }
      i {
        font-size: 1.8em;
      }
    }
    figure {
      img {
        border: 25px double #f0f0f0;
        width: 75%;
      }
    }
  }
  .section-about {
    grid-template-columns: 1fr;
    height: auto;
    padding: 25px;
  }
}

.skills {
  display: flex;
  justify-content: space-between;
  i {
    font-size: 1em;
  }
  h2 {
    font-size: 1em;
    margin: 15px 0;
    text-transform: uppercase;
  }
  li {
    font-size: 1.1em;
    margin-bottom: 7px;
  }
}
@media (max-width: 1100px) {
  .skills {
    flex-direction: column;
    gap: 25px;
    padding-bottom: 75px;
  }
}
</style>