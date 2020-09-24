<template>
  <div>
    <section class="home">
        <article>
            <figure>
                <router-link to="/sobre">
          <img
            src="../assets/images/renato7oliveira-home.jpg"
            alt="renato7oliveira"
            title="renato7oliveira"
          />
          </router-link>
        </figure>
            <h2>renato7oliveira · webdesigner</h2>
            <p>Olá, trabalho com desenvolvimento de website e comunicação digital.</p>
            <router-link to="/portfolio" class="btn"><i class="material-icons-outline md-apps"></i> Ver Portfolio</router-link>
        </article>
    </section>
  </div>
</template>

<style lang="scss" scoped>

.home{
    align-content: center;
     display: grid;
    // grid-template-columns: 1fr;
    height: 100vh;
    width: 90%;
    margin: auto;
    max-width: 800px;
    text-align: center;
    img{
        background: #f0f0f0;
        border-radius: 50%;
        filter: grayscale(100%);
        text-align: center;
        transition: 0.3s all;
        width: 150px;
            &:hover{
                filter: grayscale(0%);
            }
    }
    h2{
        color: #030F92;
        font-size: 2.2em;
        font-weight: bolder;
        text-shadow: 0px 0px 0px!important;
    }
    router-link, .btn{
        background: #030F92;
    }
    p{
        margin-bottom: 20px;
        font-size: 1.6em;
    }
    i{
        font-size: 1em;
    }
}
/* MEDIA QUERIES START */
@media(max-width: 60em){
    .home{
        grid-template-columns: 1fr;
        align-content: initial;
        padding-top: 100px;
        h2{
            font-size: 1.5em;
        }
        p{
            font-size: 1.1em;
        }
    }
}
/* MEDIA QUERIES END  */
</style>