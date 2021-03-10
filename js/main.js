window.onscroll = function(){scrollFunction()};//al hacer scroll
var bx_menu = document.querySelector(".bx-menu");
var bx_x = document.querySelector(".bx-x");
var navBar = document.querySelector("nav")
bx_menu.onclick = function(){showMenu()}
bx_x.onclick = function(){showMenu()}

function showMenu(){
    bx_menu.classList.toggle("hide")
    bx_x.classList.toggle("show")
    navBar.classList.toggle("toggle-menu")
}
