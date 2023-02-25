
let menuBtn = document.getElementById("menu-btn");
let navbarMenu = document.getElementsByClassName('navbarMain');


menuBtn.addEventListener('click',function(){
    navbarMenu.classList.toggle("active");
})