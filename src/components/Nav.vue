<template>
    <div>
        <header>
            <div class="nav"><i class="material-icons-outline md-menu"></i></div>
            <div><h1><router-link to="/">renato7oliveira · webdesigner</router-link></h1></div>
        </header>
        <nav>
            <div class="overlay"></div>
            <div class="sidebar">
                <ul>             
                    <li><router-link to="/">home</router-link></li>
                    <li><router-link to="/sobre">sobre</router-link></li>
                    <li><router-link to="/portfolio">portfolio</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

header{
    background: #fff;
    display: grid;
    grid-template-columns: 80px auto;
    height: 80px;
    align-content: center;
    align-items: center;
    box-shadow: 1px 1px 2px 1px #ccc;
    position: fixed;
    width: 100%;
    z-index: 1;
    h1{
        font-size: 1.2em;
        font-weight: lighter;
        margin-top: -2px;
        padding: 0px;
        a{
            color: #111;
            &:hover{

                animation-name: logo;
                animation-duration: 0.3s;
                animation-delay: 0.1s;
                animation-fill-mode: forwards;
            }
        }
    }
    .nav{
        cursor: pointer;
        text-align: center;
        i{
            border-radius: 50%;
            transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            margin-top: 4px;       
            &:hover{
                animation-name: nav_click;
                animation-duration: 2s;
                animation-iteration-count: infinite;
                animation-delay: 1s;
            }
            
        }
    }
}
// 800px
@media(max-width: 50em){
    header{
        background: #320d6d;
        box-shadow: 0px 0px 0px 0px;
        grid-template-columns: 65px auto;
        h1{
            font-size: 1.1em;
        }
        h1 a , .nav i{
            color: #fff;
            font-weight: bolder;
        }
    }
}
.sidebar {
    // box-shadow: 1px 2px 5px 2px #ccc;
    background: #fff;
    height: 100vh;
    margin-left: -258px;
    position: relative;
    position: fixed;
    transition: all 0.4s;
    width: 248px;
    z-index: 2;
    i{
        font-size: 1.2em;
    }
}
@media(max-width: 50em){
    .sidebar{
        margin-left: -250px;
        width: 250px;
    }
}
.sidebar.active {
    margin-left: 0px;
}
.sidebar ul {
    padding-top: 55px;
    position: relative;
}
.sidebar li {
    margin: 0 0 1px 0px;
    list-style-type: none;
    font-size: 0.9em;
    background: #fff;
}
.sidebar li a, .sidebar ul li a {
    color: #000;
    display: block;
    text-decoration: none;
    padding: 20px 0 20px 20px;
    transition: all 0.3s;
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
    z-index: 1;

    animation-name: navOverlay;
    animation-duration: 0.4s;
//    animation-delay: 0.4s;
    animation-fill-mode: forwards;
}

.ds_block{
    display: block!important;
    transition: all 0.5s;
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
</style>