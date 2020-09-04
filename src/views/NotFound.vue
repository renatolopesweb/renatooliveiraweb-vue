<template>
  <div>
        <section class="home">
        <article>
            <h2>página não encontrada...</h2>
            <router-link to="/" class="btn">← Home</router-link>
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
        margin-bottom: 20px;
        text-shadow: 0px 0px 0px!important;
    }
        router-link, .btn{
            background: #320d6d;
    }
}
/* MEDIA QUERIES START */
@media(max-width: 60em){
    .home{
        grid-template-columns: 1fr;
        align-content: initial;
        padding-top: 90px;
    }
}
/* MEDIA QUERIES END  */
</style>