<template>
    <div>
        <header>
            <div>
                <h1>@renato7oliveira · webdesign</h1>
            </div>
            <nav class="hide_mobile">
                <ul>
                    <li><router-link to="/">home</router-link></li>
                    <li><router-link to="/sobre">sobre</router-link></li>
                </ul>
            </nav>
        </header>
        <div class="mobile_menu show_mobile"><i class="material-icons-outline md-menu"></i></div>
        <nav>
            <div class="overlay"></div>
            <div class="sidebar">
                <ul>             
                    <li><router-link to="/">home</router-link></li>
                    <li><router-link to="/sobre">sobre</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<style lang="scss" scoped>
.link_active{
    font-weight: bolder;
}
header{
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 65px;
    align-items: center;
    background: #fff;
    box-shadow: 0px 0px 13px -7px #999;
    position: fixed;
    width: 100%;
    z-index: 1;
    h1{
        font-size: 0.9em;
        font-weight: bold;
        margin-top: -3px;
        padding-left: 20px;
        text-shadow: 0px 0px 1px #333;
        color: #111;
    }
    nav{
        ul{
            li{
                cursor: pointer;
                float: left;
                font-size: 0.8em;
                text-transform: uppercase;
                margin-right: 20px;
                a{
                    color: #000;
                }
            }
        }
    }
}
.mobile_menu{
    position: absolute;
    position: fixed;
    color: #000;
    z-index: 1;
    left: 20px;
    top: 20px;
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
    padding-top: 25px;
    position: relative;
}
.sidebar li {
    margin: 0 0 1px 0px;
    list-style-type: none;
    font-size: 0.8em;
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
    &:hover{
        margin-left: 5px;
        background: #f0f0f0;
    }
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

/* MEDIA QUERIES START */
@media(max-width: 60em){
    header h1{
        grid-template-columns: 1fr;
        padding-left: 60px;
        font-weight: normal;
    }
    .sidebar{
        margin-left: -200px;
        width: 200px;
    }
}
/* MEDIA QUERIES END */
</style>