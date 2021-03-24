<template>
    <div>
    <div class="preload">
        <div class="content">
            <div class="icon">R</div>
        </div>
        <p>Carregando...</p>
    </div>
        <div class="hide-mobile">
        <header>
            <div>
                <h1>Renato<span class="style_1">7</span>Oliveira</h1>
            </div>
            <nav>
                <ul @click="toTop()">
                    <li><router-link to="/"><i class="material-icons md-home"></i> home</router-link></li>
                    <li><router-link to="/portfolio"><i class="material-icons md-layers"></i> portfolio</router-link></li>
                    <li><router-link to="/sobre"><i class="material-icons md-person"></i> sobre</router-link></li>
                </ul>
            </nav>
        </header>
        </div>
        <div class="nav-mobile show-mobile" @click="toTop()">
            <div class="nav-link"><router-link to="/"><i class="material-icons md-home"></i> home</router-link></div>
            <div class="nav-link"><router-link to="/portfolio"><i class="material-icons md-layers"></i> portfolio</router-link></div>
            <div class="nav-link"><router-link to="/sobre"><i class="material-icons md-person"></i> sobre</router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        toTop(){
           window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        }
    }
}
</script>


<style lang="scss" scoped>

$color-primary: rgb(106,72,215);
$color-secondary: rgb(51, 23, 140);

.preload{
    width: 100%;
    height: 100vh;
    display: grid;
    align-content: center;
    align-items: center;
    background: #fff;
    position: absolute;
    z-index: 2;
    text-align: center;
    .content{
        margin: auto;
        .icon{
            background: $color-secondary;
            border-radius: 3px;
            color: rgba(255, 255, 255, 0.5);
            font-weight: normal;
            padding: 7px 10px;
            margin: auto;
            text-align: center;            
            animation-iteration-count: infinite;
            animation: animatePreload 0.4s ease-out alternate infinite;
        }
    }
    p{
        font-size: 0.7em;
        color: $color-secondary;
    }
}
.link_active{
    background: rgb(255, 255, 255);
    color: $color-primary;
}
header{
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 65px;
    align-items: center;
    background: $color-primary;
    position: fixed;
    width: 100%;
    z-index: 1;
    h1{
        color: rgba(255, 255, 255, 1);
        font-size: 0.9em;
        font-weight: normal;
        margin-top: -3px;
        padding-left: 20px;
        text-transform: uppercase;
        .style_1{
            color: rgba(255, 255, 255, 0.4);
        }
    }
    nav{
        ul{
            li{
                cursor: pointer;
                float: left;
                font-size: 0.7em;
                text-transform: uppercase;
                margin-left: -10px;
                margin-right: 20px;
                a{
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    border-radius: 4px;
                    color: rgba(255, 255, 255, 0.6);
                    padding: 8px 12px;
                    transition: 0.3s;
                    &:hover{
                        animation-name: nav_pulse;
                        animation-duration: 1.5s;
                        animation-iteration-count: infinite;
                        animation-delay: 1s;
                        background: rgb(255, 255, 255);
                        color: $color-primary;
                    }
                }
                i{
                    font-size: 1em;
                    vertical-align: middle;
                }
            }
        }
    }
}

.nav-mobile{
    display: none;
    grid-template-columns: repeat(3 , 1fr);
    grid-template-rows: 90px;
    grid-gap: 20px;
    align-items: center;
    background: $color-primary;
    bottom: 0px;
    color: #fff;
    padding: 0 20px;
    position: fixed;
    text-align: center;
    width: 100%;
    z-index: 1;
    .nav-link{
        i{
            color: #fff;
            width: 100%;
        }
        a{
            border-radius: 5px;
            color: #fff;
            display: block;
            font-size: 0.7em;
            outline: none;
            padding: 7px 14px;
            text-transform: uppercase;
            &:focus{
                outline: none!important;
            }
        }
    }
}

@keyframes navOverlay{
    to{
        opacity: 0.5;
    }
}
@keyframes navOverlayOf{
    from{
        opacity: 0.5;
    }
    to{
        opacity: 0;
    }
}
@keyframes nav_click {
    0% {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.5);
    }
    100% {
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }
}
  @keyframes nav_pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.9);
    }
    100% {
      box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
    }
  }

@keyframes animatePreload{
    0%{
        transform: translateY(0px);
    }
    100%{
        transform: translateY(-10px);
    }

}

/* MEDIA QUERIES START */
@media(max-width: 800px){
    .link_active{
        opacity: 0.3;
        background: none;
        // background: $color-secondary;
    }
    .nav-mobile{
        display: grid;
    }
}
/* MEDIA QUERIES END */
</style>