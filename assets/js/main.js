window.addEventListener("load", init);

function init() {
    open_nav = document.getElementById("open_nav");
    open_nav1 = document.getElementById("open_nav1")
    social_nav = document.getElementById("social_nav");
    document.getElementById("nav").addEventListener("click", open);
    document.getElementById("nav1").addEventListener("click",open1);
    document.getElementById("nav_social").addEventListener("click", open_social);
}

function open() {
    open_nav.classList.toggle("show");
    open_nav1.classList.remove("show");
    social_nav.classList.remove("show");
}
 
function open1(){
    open_nav1.classList.toggle("show");
    open_nav.classList.remove("show");
    social_nav.classList.remove("show");
}
function open_social() {
    social_nav.classList.toggle("show");
    open_nav.classList.remove("show");
    open_nav1.classList.remove("show");
}

