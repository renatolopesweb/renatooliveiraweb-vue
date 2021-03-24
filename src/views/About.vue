<template>
  <section>
    <article>
      <figure>
        <img
          src="../assets/images/renato7oliveira-home.jpg"
          alt="renato7oliveira"
          title="renato7oliveira"
        />
      </figure>
      <div>
        <p>
          Entusiasmado em concretizar ideias web desde 2009. Destinado ao frontend, design de interface e gestão de projetos.
        </p>
        <p>
          Sua presença em divisões como Marketing,
          Comunicação e Comercial, não é evitável. <br>
          Casado com a Delma, pai da AnaLu e da D.ª Cyndi. Fale comigo <a href="https://forms.gle/xH4TV4iLPEBC3gtq5" target="_blank">clicando aqui</a>.
        </p>
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
    </article>
    <article>
      <figure><i class="material-icons md-directions_bike"></i></figure>
      <div>
        <p><strong>Code:</strong> JS, Angular, Vue.js, HTML, Sass, CSS-Grid.</p>
        <p><strong>Lib:</strong> Bootstrap, Material Design.</p>
        <p><strong>Adobe:</strong> XD, Photoshop.</p>
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 25px;
}
article {
  display: grid;
  grid-template-columns: 240px auto;
  img {
    width: 100%;
    border-radius: 15px 0 0 15px;
  }
  div {
    padding: 25px;
    h2 {
      font-size: 1em;
      margin-top: 10px;
      margin-bottom: 7px;
    }
    p {
      margin-top: 5px;
      margin-bottom: 15px;
    }
    a{
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
figure {
  background: #ffde3f;
  display: grid;
  place-items: center;
  border-radius: 15px 0 0 15px;
  i {
    font-size: 7em;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
  }
}


/* MEDIA QUERIES START */
@media (min-width: 1500px) {
  section {
    height: 100vh;
  }
  article {
    grid-template-columns: 300px auto;
  }
}
@media (max-width: 1024px) {
  section {
    height: 100vh;
  }
  article {
    grid-template-columns: 1fr;
    img,
    figure {
      border-radius: 15px 15px 0 0;
    }
    figure i {
      padding: 25px;
    }
  }
  .mobile-space-bottom {
    width: 100%;
    height: 90px;
  }
}
/* MEDIA QUERIES END  */
</style>