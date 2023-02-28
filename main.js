
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
let noLogIn = document.getElementById("noUser");


function toggleMenu(){
    /* subMenu.classList.toggle("open-menu2"); */
    /* noLogIn.classList.toggle("open-menu"); */
}


///////////////            

let displayPrice = document.getElementById("shopNowPrice");
let shopNow_Temp = [];

let isUser_Login = JSON.parse(localStorage.getItem('isUser_LoggedIn'));

/* ORDER BUTTON FUNCTION */
function triggerMod(itm, p){
modal.style.display = "flex";
shopNow_Temp.push({name: itm, price: p});
localStorage.setItem("shopNowStorage", JSON.stringify(shopNow_Temp));
console.log(itm,p);

if(isUser_Login == 'true'){
    window.location.href = "https://jiffuri.github.io/G6_MiniProj2/webPages/checkout.html"
}else{
    
}



}





function submitButton(){
    alert("Your order has been submitted! Thank you!!!")
}
 
