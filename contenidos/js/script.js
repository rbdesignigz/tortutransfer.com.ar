const navbarMenu = document.querySelector(".navbar .links"); 
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenut.querySelector(".close-btn");

// Show mobile menu
menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Show mobile menu
hideMenuBtn.addEventListener("click", () => menuBtn.click());