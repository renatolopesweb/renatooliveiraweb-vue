<template>
    <div>
        <div class="hide-mobile">
        <header>
            <div>
                <h1>renato<span class="style_1">7</span>oliveira</h1>
            </div>
            <nav>
                <ul>
                    <li><router-link to="/">home</router-link></li>
                    <li><router-link to="/portfolio">portfolio</router-link></li>
                    <li><router-link to="/sobre">sobre</router-link></li>
                </ul>
            </nav>
        </header>
        </div>
        <div class="nav-mobile show-mobile">
            <div class="nav-link"><router-link to="/"><i class="material-icons md-home"></i> home</router-link></div>
            <div class="nav-link"><router-link to="/portfolio"><i class="material-icons md-layers"></i> portfolio</router-link></div>
            <div class="nav-link"><router-link to="/sobre"><i class="material-icons md-person"></i> sobre</router-link></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

$color-primary: rgb(106,72,215);
$color-secondary: rgb(51, 23, 140);

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
            padding: 7px 0;
            text-transform: uppercase;
        }
    }
}


.style_1{
  color: rgba(255, 255, 255, 0.7);
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
                    padding: 8px 15px;
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

/* MEDIA QUERIES START */
@media(max-width: 60em){
    .link_active{
        opacity: 0.3;
        background: $color-secondary;
    }
    .nav-mobile{
        display: grid;
    }
}
/* MEDIA QUERIES END */
</style>