let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("cmas");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("matematicas");
        habilidades[5].classList.add("conduccion");
        habilidades[6].classList.add("microsoft");
        habilidades[7].classList.add("ingles");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("dedicacion");
        habilidades[12].classList.add("gestion");
        
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 