<template>
  <section>
    <div>
      <figure>
        <img
          src="../assets/images/renato7oliveira-home.jpg"
          alt="renato7oliveira"
          title="renato7oliveira"
        />
      </figure>
      <p>
        Desde 2009 trabalho para empresas na divisão de web. Destinado ao Desenvolvimento Frontend; 
        Design de Interface e Gestão de Projetos Digitais.
      </p>
      <p>Casado com a Delma, pai da AnaLu e da Cyndi.</p>
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
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfvreM17QyS421n90WYUp9cP0Sl9o8zcNXtvxPdFuw4aAQTaA/viewform?embedded=true"
        target="_blank"
        class="btn btn_fourth"
        ><i class="material-icons md-message"></i> fale comigo</a
      >
    </div>
    <div>
      <i class="material-icons md-fitness_center skills"></i>
      <ul>
        <li v-for="item in skillsCode" :key="item">{{ item }}</li>
      </ul>
      <ul>
        <li v-for="item in skillsFw" :key="item">{{ item }}</li>
      </ul>
      <ul>
        <li v-for="item in skillsSoft" :key="item">{{ item }}</li>
      </ul>
    </div>
    <div class="mobile-space-bottom show-mobile"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      modalShow: false,

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
      skillsCode: ["JS", "CSS-Grid", "HTML"],
      skillsFw: ["Angular", "Vue.js"],
      skillsSoft: ["XD", "Photoshop", "Premiere"],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  height: 100vh;
  div {
    background: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #999;
    color: rgba(0, 0, 0, 1);
    padding: 25px 50px;
    text-align: center;
    h2 {
      font-size: 1em;
      margin-top: 10px;
      margin-bottom: 7px;
    }
    ul {
      height: 38px;
    }
    li {
      border: 1px solid #000;
      border-radius: 3px;
      color: #000;
      display: inline;
      font-size: 0.8em;
      // float: left;
      margin-right: 10px;
      padding: 5px 12px;
      transition: 0.3s;
      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
  img {
    border-radius: 100%;
    width: 150px;
    filter: grayscale(100%);
    transition: 0.3s;
    &:hover {
      filter: grayscale(0%);
    }
  }
  p {
    margin-top: 5px;
    margin-bottom: 15px;
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

.skills {
  color: #000;
  font-size: 10em;
  margin-bottom: 10px;
}

/* MEDIA QUERIES START */
@media (max-width: 1024px) {
  .mobile-space-bottom {
    width: 100%;
    height: 90px;
  }
  section {
    grid-template-columns: 1fr;
    div {
      padding: 28px 15px;
    }
  }
}
/* MEDIA QUERIES END  */
</style>