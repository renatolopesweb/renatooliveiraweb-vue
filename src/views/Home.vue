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
            <h2>renato7oliveira</h2>
            <p>frontend · ux · ui</p>
            <router-link to="/sobre" class="btn"><i class="material-icons-outline md-account_circle"></i> Sobre</router-link>
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
    max-width: 630px;
    text-align: center;
    img{
        background: #f0f0f0;
        border-radius: 50%;
        // filter: grayscale(70%);
        text-align: center;
        transition: 0.3s all;
        width: 150px;
            // &:hover{
            //     filter: grayscale(0%);
            // }
    }
    h2{
        color: #FA3423;
        font-size: 1.8em;
        font-weight: bolder;
        text-shadow: 0px 0px 0px!important;
    }
    router-link, .btn{
        background: #FA3423;
        // font-size: 0.6em;
    }
    p{
        margin-bottom: 20px;
        font-size: 1.4em;
    }
    i{
        font-size: 1.2em;
    }
}
/* MEDIA QUERIES START */
@media(max-width: 60em){
    .home{
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