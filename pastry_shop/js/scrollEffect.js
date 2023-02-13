let myNav = document.querySelector("#navContainer");


// MAIN NAVIGATION EFFECT
window.addEventListener("scroll",function(){
    console.log("X: "+this.scrollX + "Y: "+this.scrollY);
    if(this.scrollY > 250){
       
        myNav.classList.add("navChangeHeight");
    
    }else{
        myNav.classList.remove("navChangeHeight");
       
    }
});


