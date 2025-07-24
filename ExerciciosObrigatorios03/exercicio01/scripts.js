let menu = document.getElementById('menu')
const topBtn = document.getElementById("topBtn");
const navbar = document.getElementById("navbar");
let navBlock = document.getElementsByClassName("links-menu")


document.addEventListener("DOMContentLoaded", () => {
    menu.addEventListener("click", () => {
        if (navBlock.style.display === "flex") {
            navBlock.style.display = "none";
        } else {
            navBlock.style.display = "flex";
            navBlock.style.flexDirection = "column";
        }


    });


    window.addEventListener("scroll", () => {
        const navBottom = navbar.getBoundingClientRect().bottom;

        if (navBottom < 0) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", () => {

        console.log('clicado');
    });

});