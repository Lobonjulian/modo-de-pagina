function selecionarModo(modo) {
    
    let color = "black";
    let imagen = "claro";
    let titulo = "oscuro";


    if( modo === "claro"){
        color = "white";
        imagen = "claro";
        titulo = "Modo Claro";  
    } else if( modo === "degradado" ){
        color = "#eb8a68";
        imagen = "claro";
        titulo = "Modo Degradado"; 
    }else {
        color = "gray";
        imagen = "claro";
        titulo = "Modo Oscuro"; 
    }
    document.getElementById("tema").style.backgroundColor = color;
    document.getElementById("titulo").innerHTML = titulo;
}