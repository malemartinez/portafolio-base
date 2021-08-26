const btnResponsiveMenu = document.querySelector(".btn-menu-responsive")
const navMenu = document.querySelector(".nav-menu")

btnResponsiveMenu.addEventListener( "click" , (event)=>{
    navMenu.classList.toggle("menu-visible")
    navMenu.classList.toggle("menu-oculto")
})
navMenu.addEventListener( "click", ()=>{
    navMenu.classList.toggle("menu-visible")
    navMenu.classList.toggle("menu-oculto")
})