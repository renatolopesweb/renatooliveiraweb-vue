<template>
  <div>
    <section class="home">
        <div class="mobile_home">
            <img src="../assets/images/mobile_home.svg" alt="webdesign">
        </div>
        <article>
            <h2>renato7oliveira · webdesigner</h2>
            <p>Olá, trabalho com desenvolvimento responsivo de websites e gestão de comunicação digital.</p>
            <router-link to="/portfolio" class="btn"><i class="material-icons-outline md-apps"></i> Ver Portfolio</router-link>
        </article>
    </section>
  </div>
</template>

<style lang="scss" scoped>

.home{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
    align-content: center;
    h2{
        background: transparent;
        border: 0px;
        color: #320d6d;
        font-size: 2.2em;
        font-weight: bolder;
        text-shadow: 0px 0px 0px!important;
    }
        router-link, .btn{
            background: #320d6d;
    }
    p{
        margin-bottom: 20px;
    }
    i{
        font-size: 1em;
    }
}
.mobile_home{
    background: #320d6d;
    margin-bottom: 15px;
    display: none;
}
/* MEDIA QUERIES START */
@media(max-width: 60em){
    .home{
        grid-template-columns: 1fr;
        align-content: initial;
        padding-top: 100px;
            h2{
                font-weight: normal;
                font-size: 2em;
            }
    }
    .mobile_home{
        display: block;
    }
}
/* MEDIA QUERIES END  */
</style>