

// SHOP MINI NAV EFFECT
let miniNav = document.querySelector("#miniNav");

window.addEventListener('scroll',function(){
    console.log("X: "+this.scrollX +"Y: "+this.scrollY);
    if(this.scrollY > 270){
        miniNav.classList.add('fixedPosition');
    }else{
        miniNav.classList.remove('fixedPosition');
    }
});



// PRODUCT INTO MINI NAV EFFECT

let w1 = document.querySelector("#w1");

let firstTray = document.querySelector("#firstPart");
let firstTrayItem = document.querySelectorAll(".a1");



firstTrayItem.forEach(function(a){
    a.addEventListener('click', tryagain);

})  

function tryagain(){
    console.log(this.getAttribute('value'));
}
