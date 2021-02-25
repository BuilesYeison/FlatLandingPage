window.onscroll = function(){scrollFunction()};//al hacer scroll

//si hace scroll 80 px desde el inicio de la pantalla modifica los estilos del navbar

function scrollFunction(){
    if(document.body.scrollTop > 80||document.documentElement.scrollTop>80){
        document.getElementById("navbar").style.backgroundColor = "#242627";
        document.getElementById("navbar").style.padding = "20px 45px";
    }else{
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.padding = "30px 45px";
    }
}