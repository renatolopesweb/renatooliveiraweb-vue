<template>
  <div>
    <section class="about internal">
      <div>
        <figure>
          <img
            src="../assets/images/renato7oliveira-home.jpg" 
            alt="renato7oliveira"
            title="renato7oliveira"
          />
        </figure>
        <h2>Mídias Sociais:</h2>
        <p class="social">
          <a href="https://bit.ly/2x9Bgj7" alt="Github" title="Github" target="_blank">
            <i class="fa fa-github"></i>
          </a>
          <a href="https://bit.ly/2QzoMZ8" alt="Linkedin" title="Linkedin" target="_blank">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="https://bit.ly/2QySUDD" alt="Instagram" title="Instagram" target="_blank">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="https://bit.ly/2BRwU2r" alt="Twitter" title="Twitter" target="_blank">
            <i class="fa fa-twitter"></i>
          </a>
        </p>
      </div>
      <div>
        <p>Me chamo Renato, trabalho como webdesigner desde 2009.
           Os meus interesses profissionais são: Desenvolvimento Frontend, Design, Comunicação & Marketing. 
        </p>
        <p>Tenho o hobby estranho de pedalar e toco um violão pra lá de modesto.</p>
        <p>Casado com a Delma, pai da Ana Luiza e da Cyndi.</p>
        <p>
            <router-link to="/portfolio" class="btn"><i class="material-icons-outline md-apps"></i> Ver Portfolio</router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.dark-mode:root{
  .about img{
    box-shadow: 1px 1px 3px #000;
  }
  .social a{
    color: #fff;
  }
}
.about {
  display: grid;
  grid-template-columns: 180px auto;
  grid-gap: 60px;
  img {
    width: 100%;
    box-shadow: 1px 1px 3px #ccc;
  }
  p {
    margin-bottom: 15px;
  }
  h2 {
    font-size: 1em;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .social a {
    color: #000;
    opacity: 1;
    transition-duration: 0.2s;
    &:hover {
      color: #FA3423;
    }
    i{
        margin-right: 9px;
        font-size: 1.3em;
    }
  }
  router-link, .btn{
    background: #FA3423;
    font-size: 0.6em;
    i{
        font-size: 1em;
    }
}
}
/* MEDIA QUERIES START */
@media (max-width: 60em) {
  .about {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
}
/* MEDIA QUERIES END  */
</style>