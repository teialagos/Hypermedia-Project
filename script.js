let menuVisible = false;
// oculta o mostra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menú una cop que selecciono una opció
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
