const open__profile = document.querySelector(".open");
const close__profile = document.querySelector(".close");
let contenedor__menu = document.querySelector(".menu-lateral");
let contenido__menu = document.querySelector(".container-menu-lateral");



open__profile.addEventListener("click", function(e){
    e.preventDefault();
    contenedor__menu.style.opacity = "1";
    contenedor__menu.style.visibility = "visible";
    contenido__menu.classList.toggle("close-profile");
});

close__profile.addEventListener("click", function(){
    contenido__menu.classList.toggle("close-profile");
    setTimeout(function(){
        contenedor__menu.style.opacity = "0";
        contenedor__menu.style.visibility = "hidden";
    },1000);
});