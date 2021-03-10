window.onscroll = function(){scrollFunction()};//al hacer scroll
var bx_menu = document.querySelector(".bx-menu");
var bx_x = document.querySelector(".bx-x");
var navBar = document.querySelector("nav")
/*var mainMenu = document.querySelector(".main-menu")
var socialMenu = document.querySelector(".social-media-menu")*/
var menus = document.querySelectorAll(".social-media-menu, .main-menu")//obtener en un array los dos menus
bx_menu.onclick = function(){showMenu()}
bx_x.onclick = function(){showMenu()}

function showMenu(){
    bx_menu.classList.toggle("hide")
    bx_x.classList.toggle("show")
    navBar.classList.toggle("toggle-menu")
}

function scrollFunction(){
    console.log(menus.length)
    if((document.body.onscrollTop>80 ||document.documentElement.scrollTop>80) && screen.width > 884){
        menus.forEach(element => //recorrer cada menú y aplicarle margen
            element.style.margin ="20px 0"
        );
        /*mainMenu.style.margin ="20px 0";
        socialMenu.style.margin ="20px 0";*/
    }else if(screen.width > 884){
        menus.forEach(element => 
            element.style.margin ="30px 0"
        );
        /*mainMenu.style.margin ="30px 0";
        socialMenu.style.margin ="30px 0";*/
    }
}
