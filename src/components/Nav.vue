<template>
    <div>
        <header>
            <div>
                <h1>renato<span class="style_1">7</span>oliveira</h1>
            </div>
            <nav class="hide_mobile">
                <ul>
                    <li><router-link to="/">home</router-link></li>
                    <li><router-link to="/portfolio">portfolio</router-link></li>
                    <li><router-link to="/sobre">sobre</router-link></li>
                </ul>
            </nav>
        </header>
        <div class="mobile_menu show_mobile"><i class="material-icons-outline md-menu"></i></div>
        <nav>
            <div class="overlay"></div>
            <div class="sidebar">
                <ul>             
                    <li><router-link to="/"><i class="material-icons md-home"></i> home</router-link></li>
                    <li><router-link to="/portfolio"><i class="material-icons md-layers"></i> portfolio</router-link></li>
                    <li><router-link to="/sobre"><i class="material-icons md-person_outline"></i> sobre</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<style lang="scss" scoped>

$color-primary: rgb(106,72,215);
$color-secondary: rgb(51, 23, 140);
.style_1{
  color: rgba(255, 255, 255, 0.6);
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
    background: rgb(106,72,215);
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
.mobile_menu{
    position: absolute;
    position: fixed;
    cursor: pointer;
    z-index: 1;
    left: 20px;
    top: 20px;
    i{
        color: #fff;
    }
}
.ds_block{
    display: block!important;
    transition: all 0.3s;
}
.sidebar {
    background: #fff;
    height: 100vh;
    margin-left: -258px;
    position: relative;
    position: fixed;
    transition: all 0.4s;
    width: 248px;
    z-index: 3;
    i{
        font-size: 1.2em;
    }
}

.sidebar.active {
    margin-left: 0px;
}
.sidebar ul {
    padding-top: 10px;
    position: relative;
}
.sidebar li {
    // border-bottom: 1px solid red;
    margin: 0 0 20px 0px;
    list-style-type: none;
    font-size: 1em;
    background: #fff;
}
.sidebar li a, .sidebar ul li a {
    color: #000;
    cursor: pointer;
    display: block;
    text-decoration: none;
    padding: 20px 0 20px 20px;
    transition: all 0.3s;
    text-transform: uppercase;
    &:active{
        margin-left: 0px;
    }
}
.overlay{
    background: #000;
    display: none;
    height: 100%;
    height: 100vh;
    opacity: 0;
    position: absolute;
    position: fixed;
    width: 100%;
    z-index: 2;
    animation-name: navOverlay;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
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
    header{
        grid-template-columns: 1fr;
        h1{
            padding-left: 60px;
            font-weight: normal;
        }
    }
    .sidebar{
        margin-left: -200px;
        width: 200px;
    }
    .link_active{
        color: $color-primary!important;
}
}
/* MEDIA QUERIES END */
</style>