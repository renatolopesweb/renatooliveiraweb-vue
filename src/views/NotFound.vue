<template>
    <section>
        <article>
            <h2>página não encontrada... 👻</h2>
            <router-link to="/" class="btn btn_secondary"><i class="material-icons md-home"></i> Home</router-link>
        </article>
    </section>
</template>

<style lang="scss" scoped>
$color-primary: #6a48d7;
section{
    display: grid;
    max-width: 450px;
    margin: auto;
    height: 100vh;
    align-content: center;
    text-align: center;
    article{
        padding: 50px;
        .btn_secondary {
        background: $color-primary;
        color: #fff;
        &:hover {
          background: #37dd6f;
        }
        &:active{
          background: #68EE95;
        }
      }
    }
    h2{        
        font-size: 1.4em;
        font-weight: bolder;
        margin-bottom: 15px;
    }
    
}

</style>