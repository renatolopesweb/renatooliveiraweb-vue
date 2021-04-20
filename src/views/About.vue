<template>
  <div class="about">
    <div class="about-text">
      <h2>Sobre</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim purus,
        commodo non cursus sed, sagittis volutpat sapien. Fusce volutpat
        tristique nisi at consequat. Mauris ut ligula diam. Aliquam nec nisl
        quis est ultricies ultricies sed eu nunc. Nulla ultrices tempor nisl.
        Curabitur quis felis non risus elementum vehicula.
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
      <i class="material-icons md-school"></i>
    </div>
  </div>
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
    };
  },
};
</script>

<style lang="scss" scoped>
$color-primary: #630094;
$color-secondary: #37266b;

.about {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 25px;
  grid-template-areas:
    "about-text        about-text     about-image"
    "skills-image      skills-text    skills-text";
  align-items: center;
  color: $color-primary;
  padding-top: 15vh;
  h2 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  li {
    font-size: 1em;
    font-weight: 500;
    list-style-type: square;
    margin-top: 15px;
    margin-left: 18px;
  }
  p {
    font-size: 1em;
    font-weight: 500;
    line-height: 32px;
  }
  i {
    font-size: 15em;
  }
}
.about-text {
  grid-area: about-text;
}
.about-image {
  grid-area: about-image;
  text-align: right;

  img {
    max-width: 200px;
    border-radius: 500px;
    filter: opacity(0.2) grayscale(1)
      drop-shadow(-40px -40px 0px $color-primary);
    transition: 0.3s;
    &:hover {
      filter: opacity(0.8) grayscale(1) drop-shadow(0px 0px 0px);
      cursor: none;
    }
  }
}
.social a {
  transition-duration: 0.3s;
  &:hover {
    color: #37dd6f;
  }
  &:active {
    color: #68ee95;
  }
  i {
    margin-right: 8px;
    margin-top: 5px;
    font-size: 1.5em;
  }
}
.about-image {
  grid-area: about-image;
}
.about-text {
  grid-area: about-text;
}
.skills-text {
  grid-area: skills-text;
}
.skills-image {
  grid-area: skills-image;
}

/* MEDIAQUERIES */
@media (max-width: 800px) {
    .about {
      text-align: center;
      grid-template-columns: 1fr;
      grid-template-areas:
        "about-image"
        "about-text"
        "skills-image"
        "skills-text";
      padding: 25px;
      ul{
        padding-bottom: 150px;
      }
      li {
          list-style-type: none;
        }
    }
    .about-image {
      text-align: center;
      margin-top: 625px;
    }
}
</style>