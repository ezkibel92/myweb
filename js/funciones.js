window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    var header = document.querySelector("header");
    nav.classList.toggle("abajo2", window.scrollY>0);
    header.classList.toggle("abajo", window.scrollY>0);

    if (window.scrollY>0){
        document.getElementById("imagenfirma").src = "images/firma.png"
    }else{
        document.getElementById("imagenfirma").src = "images/firma2.png" 
    }

    if (window.scrollY>0){
        document.getElementById("botonmenu").src = "images/boton1.png"
    }else{
        document.getElementById("botonmenu").src = "images/boton2.png" 
    }
    

    
})

//Carrusel










