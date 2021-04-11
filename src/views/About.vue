<template>
  <section>
    <article>
      <div class="about-text">
        <h2>Sobre</h2>
        <p>
          Estou na web desde 2009 ajudando as empresas materializarem
          seus projetos digitais. Minha responsabilidade é voltada a experiência
          final do usuário como um todo.
        </p>
        <p class="social">
          <a
            v-for="item in social"
            :title="item.title"
            :key="item.id"
            :href="item.url"
            target="_blank"
            ><i :class="item.img"></i
          ></a>
        </p>
      </div>
      <div class="about-image">
        <div class="content">
          <img
            src="../assets/images/renato7oliveira-about.jpg"
            alt="renato7oliveira"
          />
        </div>
      </div>
      <div class="skills-text">
        <h2>Habilidades</h2>
        <ul>
          <li v-for="item in skills" :key="item.id">
            <strong>{{ item.category }}:</strong> {{ item.content }}
          </li>
        </ul>
      </div>
      <div class="skills-image">
        <i class="material-icons-round md-school"></i>
      </div>
      <div class="sky-text">
        <h2>Este site</h2>
        <ul>
          <li v-for="item in sky" :key="item.id">
            <strong>{{ item.category }}:</strong> {{ item.content }}
          </li>
        </ul>
      </div>
      <div class="sky-image">
        <i class="material-icons-outline md-cloud_done"></i>
      </div>
      <div class="hearth-text">
        <h2>Amor</h2>
        <ul>
          <li v-for="item in hearth" :key="item.id">{{ item.content }}</li>
        </ul>
      </div>
      <div class="hearth-image">
        <i class="fa fa-heartbeat" aria-hidden="true"></i>
      </div>
      <div class="mesage-text">
        <h2>Contato</h2>
        <p>
          <a href="https://forms.gle/mdYVxaBnc1mziQ8KA" target="_blank"
            >Enviar Mensagem</a
          >
        </p>
      </div>
      <div class="mesage-image">
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </div>
    </article>
    <div class="mobile-space-bottom show-mobile"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          title: "Github",
          img: "fa fa-github",
          url: "https://github.com/renato7oliveira",
        },
        {
          title: "Linkedin",
          img: "fa fa-linkedin",
          url: "https://www.linkedin.com/in/renato7oliveira",
        },
        {
          title: "Instagram",
          img: "fa fa-instagram",
          url: "https://www.instagram.com/renato7oliveira",
        },
        {
          title: "Twitter",
          img: "fa fa-twitter",
          url: "https://twitter.com/renato7oliveira",
        },
        {
          title: "Facebook",
          img: "fa fa-facebook",
          url: "https://facebook.com/renato7oliveira",
        },
        {
          title: "Enviar Mensagem",
          img: "fa fa-envelope",
          url: "https://forms.gle/mdYVxaBnc1mziQ8KA",
        },
      ],

      skills: [
        {
          category: "Code",
          content: "JS / HTML / CSS / Bootstrap",
        },
        {
          category: "PWA",
          content: "Angular / Vue.js",
        },
        {
          category: "Design",
          content: "XD / Photoshop",
        },
        {
          category: "Mkt",
          content: "Wordpress / ADS",
        },
      ],

      sky: [
        {
          category: "Deploy",
          content: "Github",
        },
        {
          category: "Host",
          content: "Netlify",
        },
        {
          category: "Stack",
          content: "Vue.js / Material Icons",
        },
        {
          category: "PageSpeed",
          content: "Desk: 99 / Mobile: 89",
        },
      ],

      hearth: [
        {
          content: "Ana Luiza / Delma / Cyndi",
        },
        {
          content: "Beatles /  MPB / Rock",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$color-primary: #6a48d7;
$color-secondary: #37266b;

section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 200px 0;
  article {
    grid-column: 2 / 5;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 115px;
    grid-template-areas:
      "about-text about-image"
      "skills-image skills-text"
      "sky-text sky-image"
      "music-image music-text"
      "hearth-image hearth-text"
      "mesage-text mesage-image";

    color: $color-primary;

    align-items: center;
    div {
      h2 {
        font-size: 1.5em;
      }
      li {
        font-size: 1.2em;
        font-weight: 500;
        list-style-type: square;
        margin-top: 15px;
        margin-left: 18px;
      }
      p {
        font-size: 1.2em;
        font-weight: 500;
        line-height: 37px;
      }
      a {
        color: red;
        text-decoration: underline;
      }
      i {
        font-size: 15em;
      }
    }
  }
  .about-text {
    grid-area: about-text;
  }
  .about-image {
    grid-area: about-image;

    img {
      max-width: 300px;
      border-radius: 500px;
      filter: opacity(0.1) grayscale(1)
        drop-shadow(-40px -40px 0px $color-primary);
      transition: 0.3s;
      &:hover {
        filter: opacity(1) grayscale(1) drop-shadow(0px 0px 0px);
      }
    }
  }
  .social a {
    color: $color-primary;
    transition-duration: 0.3s;
    &:hover {
      color: #37dd6f;
    }
    &:active{
      color: #68EE95;
    }
    i {
      margin-right: 8px;
      margin-top: 9px;
      font-size: 1.5em;
    }
  }
  .skills-image {
    grid-area: skills-image;
    text-align: center;
  }
  .skills-text {
    grid-area: skills-text;
  }
  .sky-text {
    grid-area: sky-text;
  }
  .sky-image {
    grid-area: sky-image;
  }
  .music-text {
    grid-area: music-text;
  }
  .music-image {
    grid-area: music-image;
  }
  .hearth-text {
    grid-area: hearth-text;
  }
  .hearth-image {
    grid-area: hearth-image;
  }
  .mesage-text {
    grid-area: mesage-text;
    p {
      margin-top: 5px;
    }
  }
  .mesage-image {
    grid-area: mesage-image;
  }
}

/* MEDIA QUERIES START */
@media (max-width: 860px) {
  section {
    grid-template-columns: 1fr;
    padding-top: 75px;

    article {
      text-align: center;
      grid-template-columns: 1fr;
      grid-gap: 15px;
      grid-template-areas:
        "about-image"
        "about-text"
        "skills-image"
        "skills-text"
        "sky-image"
        "sky-text"
        "music-image"
        "music-text"
        "hearth-image"
        "hearth-text"
        "mesage-image"
        "mesage-text";
      div {
        li {
          list-style-type: none;
          margin-left: 0px;
        }
      }

      .about-image {
        img {
          max-width: 200px;
        }
      }
    }
  }
}
/* MEDIA QUERIES END  */
</style>