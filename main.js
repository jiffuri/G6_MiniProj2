
// INDEX, ORDER BUTTON 
let modal = document.querySelector("#mod-sample");


//////////      Carousel
let navbarMain = document.querySelector('.navbarMain');

document.querySelector('#menu-btn').onclick = () => {
    navbarMain.classList.toggle('active');
}
window.onscroll = () => {
    navbarMain.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


///////////////           Profile sub menu

let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}


///////////////            






/* ORDER BUTTON FUNCTION */
function triggerMod(){
modal.style.display = "flex";

}
        
function submitButton(){
    alert("Your order has been submitted! Thank you!!!")
}
 
