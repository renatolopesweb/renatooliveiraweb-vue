<template>
  <div>
        <section class="about internal">
        <div>
            <figure>
                <img src="../assets/images/renato7oliveira.gif" width="100%" alt="">
            </figure>
        </div>
        <div>
        <p>Trabalho com web desde 2009, época onde fazia desde animações em Flash (RIP!) à websites estáticos. 
            Hoje estou dedicado ao desenvolvimento frontend para web, UX e Gestão de Comunicação Digital.
        </p>
        <p>Tenho o hobby de pedalar e toco um violão bem modesto. Amo música nacional mas o que seria de nós sem Beatles?</p>
        <p>Casado com a Delma, pai da Ana Luiza e da Cyndi.
        </p>
        <h3>Mais informações:</h3>
        <p class="social">
            <a href="https://bit.ly/2x9Bgj7" alt="Github" title="Github" target="_blank"><i class="fa fa-github"></i></a>
            <a href="https://bit.ly/2QzoMZ8" alt="Linkedin" title="Linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
            <a href="https://bit.ly/2QySUDD" alt="Instagram" title="Instagram" target="_blank"><i class="fa fa-instagram"></i></a>
            <a href="https://bit.ly/2BRwU2r" alt="Twitter" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a>
        </p>
        </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about{
    display: grid;
    grid-template-columns: 240px auto;
    grid-gap: 60px;
    img{
        width: 100%;
        box-shadow: 1px 1px 3px #ccc;
    }
    p{
        margin-bottom: 15px;
    }
    h3{
        font-size: 1.4em;
        margin-bottom: 3px;
    }
    i{
        font-size: 1.4em;
        margin-right: 7px;
    }
    .social a{
        color: #000;
        opacity: 1;
        transition-duration: 0.2s;
        &:hover{
        opacity: 0.8;
        }
    }
}
/* MEDIA QUERIES START */
@media(max-width: 60em){
    .about{
        grid-template-columns: 1fr;
    }
}
/* MEDIA QUERIES END  */
</style>