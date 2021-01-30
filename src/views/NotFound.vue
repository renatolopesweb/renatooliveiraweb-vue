<template>
    <section>
        <article>
            <h2>página não encontrada... 😥</h2>
            <router-link to="/" class="btn btn_primary"><i class="material-icons md-home"></i> Home</router-link>
        </article>
    </section>
</template>

<style lang="scss" scoped>
section{
    display: grid;
    width: 350px;
    margin: auto;
    height: 100vh;
    align-content: center;
    text-align: center;
    h2{        
        font-size: 1.4em;
        font-weight: bolder;
        margin-bottom: 15px;
    }
}
</style>