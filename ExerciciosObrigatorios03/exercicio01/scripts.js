// let menu = document.getElementById('menu')
// const topBtn = document.getElementById("topBtn");
// const navbar = document.getElementById("navbar");
// const navBlock = document.getElementById("links-menu")


// document.addEventListener("DOMContentLoaded", () => {

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


//     window.addEventListener("scroll", () => {
//         const navBottom = navbar.getBoundingClientRect().bottom;

//         if (navBottom < 0) {
//             topBtn.style.display = "block";
//         } else {
//             topBtn.style.display = "none";
//         }
//     });

//     topBtn.addEventListener("click", () => {

//         console.log('clicado');
//     });

// });
