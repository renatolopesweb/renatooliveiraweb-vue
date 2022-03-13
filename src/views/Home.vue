<template>
  <section>
    <article class="card">
      <figure>
        <img
          src="../assets/images/renato-oliveira-web.jpg"
          alt="Renato Oliveira Web"
          title="Renato Oliveira Web"
        />
      </figure>
      <p>
        Olá, sou o <span>Renato,</span> +10 anos de Frontend e Design.
      </p>
      <p>
        Moro em São Paulo, casado com a Delma, pai da Ana Luiza e da "Cyndi".
      </p>

      <span v-for="item in social" :key="item.id" class="social-media">
        <a :href="item.url" target="_blank" :title="item.title"
          ><i :class="item.img" aria-hidden="true"></i
        ></a>
      </span>
    </article>
    <article class="card">
      <figure>
        <i class="fas fa-briefcase skills" aria-hidden="true"></i>
      </figure>
      <p v-for="(item, article) in skills" :key="article">
        <span>{{ item.categ.content }}:</span> {{ item.list.content }}
      </p>
    </article>
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
        {
          title: "Flickr",
          img: "fab fa-flickr",
          url: "https://github.com/renato7oliveira",
        },
      ],

      skills: [
        {
          categ: { content: "Code" },
          list: { content: "JS · TS · HTML5 · Sass + CSS3" },
        },
        {
          categ: { content: "FW" },
          list: { content: "Angular · Ionic" },
        },
        {
          categ: { content: "Design" },
          list: { content: "XD · Photoshop" },
        },
        {
          categ: { content: "Marketing" },
          list: { content: "Wordpress" },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  color: var(--color-primary);
}

section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  font-size: 1.2em;
  figure {
    text-align: center;
  }
  img {
    border-radius: 100%;
    margin: 15px;
    max-width: 40%;
  }
  h2 {
    font-size: 1.3em;
    margin: 20px 0;
    text-transform: uppercase;
  }
  span {
    font-weight: 700;
    text-transform: uppercase;
  }
  p {
    line-height: 40px;
    margin-bottom: 13px;
  }
  a {
    color: var(--color-primary);
    font-size: 1.8em;
    margin-right: 10px;
    &:hover {
      transform: translateY(-5px);
    }
  }
  .skills {
    color: var(--color-primary);
    font-size: 6em;
    margin-bottom: 30px;
  }
}

@media (max-height: 628px) {
  section{
    article{
      padding: 30px;
    }
  }
}


@media (max-width: 1100px) {
  section {
    grid-template-columns: 1fr;
    height: auto;
    padding: 25px 25px 85px 25px;
    img {
      max-width: 75%;
    }
  }
}
</style>