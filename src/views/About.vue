<template>
  <section>
    <article>
      <h2>Sobre</h2>
      <p>
        Desde 2009 trabalho com web para as empresas. Destinado ao
        desenvolvimento frontend, design para interfaces e gestão de projetos digitais.
      </p>
      <p>
        Casado com a Delma, pai da AnaLu e da D.ª Cyndi. Fale comigo clicando
        <a href="https://forms.gle/g74U2LhoGjhVRCJSA" target="_blank">aqui</a>.
      </p>
      <h3>Habilidades</h3>
      <ul>
        <li v-for="item in skills" :key="item.id">
          <strong>{{ item.category }}:</strong> {{ item.content }}
        </li>
      </ul>
    </article>
    <aside>
      <figure>
        <img
          src="../assets/images/renato7oliveira-home.jpg"
          alt="renato7oliveira"
          title="renato7oliveira"
        />
      </figure>
      <div>
        <h2>Redes Sociais:</h2>
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
    </aside>
    <div class="mobile-space-bottom show-mobile"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          category: "Code",
          content: "HTML / CSS / Sass / JS / *VS Code",
        },
        {
          category: "PWA",
          content: "Angular / Vue.js",
        },
        {
          category: "Lib",
          content: "Bootstrap / Material Design",
        },
        {
          category: "Visual",
          content: "XD / Photoshop",
        },
      ],

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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  grid-gap: 25px;
  grid-template-areas: "skills about";
}
article {
  grid-area: skills;
  box-shadow: 0px 0px 0px;
  background: #fff;
  h2 {
    font-size: 1.2em;
    font-weight: bolder;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 1em;
    font-weight: bolder;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 12px;
  }
  a {
    color: blue;
  }
  li {
    margin-bottom: 10px;
    margin-left: 18px;
    list-style-type: square;
  }
}
.bar {
  width: 100%;
  border-radius: 5px;
  background: #f0f0f0;
  margin-top: 15px;
}
.bar_front {
  border-radius: 5px;
  padding: 9px 14px;
  background: #ffde3f;
  color: rgb(30, 28, 17);
  span {
    font-size: 0.9em;
  }
}
aside {
  grid-area: about;
  img {
    border-radius: 15px 15px 0 0;
    width: 100%;
    filter: grayscale(1);
    transition: 0.2s;
    &:hover {
      filter: grayscale(0);
    }
  }
  div {
    padding-left: 15px;
    padding-bottom: 12px;
    // text-align: center;
    h2 {
      font-size: 0.9em;
      margin-top: 10px;
      margin-bottom: 5px;
    }
    a {
      color: blue;
    }
    .social a {
      color: rgba(0, 0, 0, 1);
      transition-duration: 0.3s;
      &:hover {
        opacity: 0.3;
      }
      i {
        margin-right: 8px;
        font-size: 1.5em;
      }
    }
  }
}
/* MEDIA QUERIES START */
@media (max-width: 1024px) {
  section {
    grid-template-columns: 1fr;
    grid-template-areas:
      "skills skills"
      "about about";

    article {
      p {
        margin-bottom: 15px;
        line-height: 25px;
      }
    }
    .mobile-space-bottom {
      width: 100%;
      height: 65px;
    }
  }
}
/* MEDIA QUERIES END  */
</style>