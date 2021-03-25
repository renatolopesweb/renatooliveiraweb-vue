<template>
  <section>
    <article>
      <h2>Habilidades</h2>
      <div v-for="item in skills" :key="item.id" class="bar">
        <div class="bar_front" :style="{ width: item.cssStyle + '%' }">
          <span
            ><strong>{{ item.category }}:</strong> {{ item.content }}</span
          >
        </div>
      </div>
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
        <p>
          Concretiza ideias para web desde 2009.<br> Destinado ao
          frontend, design de interface e gestão de projetos digitais.
        </p>
        <p>Entre em <a href="https://forms.gle/g74U2LhoGjhVRCJSA" target="_blank">Contato</a>.</p>
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
          content: "HTML / CSS / Sass",
          cssStyle: "100",
        },
        {
          category: "PWA",
          content: "Angular / Vue.js / JS*",
          cssStyle: "50",
        },
        {
          category: "Lib",
          content: "Bootstrap / Material Design",
          cssStyle: "80",
        },
        {
          category: "Adobe",
          content: "XD / Photoshop",
          cssStyle: "60",
        }
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
  height: 100vh;
}
article {
  grid-area: skills;
  padding: 25px;
  h2 {
    font-size: 1.2em;
    font-weight: bolder;
    margin-bottom: 15px;
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
    padding: 10px 20px;
    h2 {
      font-size: 1em;
      margin-top: 10px;
      margin-bottom: 7px;
    }
    p {
      font-size: 1em;
      margin-bottom: 15px;
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
        margin-top: -7px;
        margin-right: 6px;
        font-size: 1.6em;
      }
    }
  }
}
/* MEDIA QUERIES START */
@media (max-width: 1024px) {
  section {
    grid-template-columns: 1fr;
    grid-template-areas:
      "about about"
      "skills skills";
    .mobile-space-bottom {
      width: 100%;
      height: 90px;
    }
  }
}
/* MEDIA QUERIES END  */
</style>