window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    var header = document.querySelector("header");
    nav.classList.toggle("abajo2", window.scrollY>0);
    header.classList.toggle("abajo", window.scrollY>0);

})