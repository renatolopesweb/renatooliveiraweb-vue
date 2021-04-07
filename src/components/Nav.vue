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

$color-primary: #7030A0;
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
header{
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 65px;
    align-items: center;
    background: #f0edf3;
    position: fixed;
    width: 100%;
    z-index: 1;
    h1{
        color: $color-primary;
        font-size: 1em;
        font-weight: bolder;
        margin-top: -3px;
        padding-left: 20px;
        text-transform: uppercase;
        .style_1{
            color: #220135;
        }
    }
    nav{
        ul{
            li{
                cursor: pointer;
                float: left;
                font-size: 0.7em;
                text-transform: uppercase;
                // margin-left: -10px;
                margin-right: 10px;
                a{
                    background: #fff;
                    border-radius: 50px;
                    color: $color-primary;
                    padding: 12px 20px;
                    transition: 0.3s;
                    &:hover{
                        color: #220135;
                        box-shadow: 5px 1px 50px rgba(112, 48, 160 , 0.3);
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
.link_active{
    color: #220135;
    box-shadow: 5px 1px 50px rgba(112, 48, 160 , 0.3);
}

.nav-mobile{
    display: none;
    grid-template-columns: repeat(3 , 1fr);
    grid-template-rows: 90px;
    grid-gap: 20px;
    align-items: center;
    background: rgb(230,224,236);
    bottom: 0px;
    color: $color-primary;
    padding: 0 20px;
    position: fixed;
    text-align: center;
    width: 100%;
    z-index: 1;
    .nav-link{
        i{
            color: $color-primary;
            width: 100%;
        }
        a{
            border-radius: 5px;
            color: $color-primary;
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
        opacity: 0.4;
        background: none;
        // background: rgba(0, 0, 0, 0.2);
    }
    .nav-mobile{
        display: grid;
    }
}
/* MEDIA QUERIES END */
</style>