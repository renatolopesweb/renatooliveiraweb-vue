<template>
  <section>
    <article>
      <div class="code">
      <h2>Code</h2>
        <ul>
          <li>JS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Sass</li>
        </ul>
      </div>
      <div class="pwa">
      <h2>PWA</h2>
      <ul>
        <li>Angular</li>
        <li>Vue.js</li>
      </ul>
      </div>
      <div class="design">
      <h2>Design</h2>
      <ul>
        <li>XD</li>
        <li>Photoshop</li>
      </ul>
      </div>
      <div class="social">
      <h2>Redes Sociais</h2>
        <a
            v-for="item in social"
            :title="item.title"
            :key="item.id"
            :href="item.url"
            target="_blank"
            ><i :class="item.img"></i
          ></a>
      </div>
    </article>
    <div class="mobile-space-bottom show-mobile"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          list: ["HTML" , "CSS"]
        },
        {
          list: ["Angular" , "Vue.js"]
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
        {
          title: "E-mail",
          img: "fa fa-envelope",
          url: "https://forms.gle/mdYVxaBnc1mziQ8KA",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100vh;
  article {
    grid-column-start: 2;
    box-shadow: 0px 0px 0px;
    div{
      text-align: center;
      margin-bottom: 30px;
      h2{
        font-size: 0.9em;
        margin-bottom: 13px;
      }
      li{
        border-radius: 50px;
        display: inline;
        font-size: 0.8em;
        margin: 4px;
        padding: 10px 25px;
      }
    }
  }
}
.code{
  color: #7030a0;
  li{
    border: 1px solid #7030a0;
  }
}
.pwa{
  color: rgb(149,55,53);
  li{
    border: 1px solid rgb(149,55,53);
  }
}
.design{
  color: #b62e8a;
  li{
    border: 1px solid #b62e8a;
  }
}
.social{
  color: #000;
  h2{
    margin-bottom: 4px;
  }
  i{
    font-size: 1.6em;
    margin-right: 7px;
    color: #000;
    transition: 0.3s;
    &:hover{
      opacity: 0.5;
    }
  }
}


/* MEDIA QUERIES START */
@media (max-width: 400px) {
  section {
    grid-template-columns: 1fr;
    article{
      div{
        clear: both;
        margin-bottom: 70px;
          h2{
            margin-bottom: 2px;
          }
      }
      li{
        float: left;
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