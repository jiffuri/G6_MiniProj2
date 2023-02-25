

let cartLocal = JSON.parse(localStorage.getItem("intoLocalStorage"));
let cartHoverPanel = document.querySelector("#cartHoverMain");
let cartHoverContainer = document.querySelector("#cartHoverName");
let cartBTN = document.querySelector("#cart-btn");
let cartHoverItem = document.querySelector("#cartHoverHeader");
let blankArray = [];    

let inview = 0;

console.log(blankArray.length)


cartLocal.forEach(function(a){
    blankArray.push({name:a.name,price:a.price});
})


cartBTN.addEventListener('mouseover', viewCartItems)

function viewCartItems(){

    cartHoverPanel.classList.add("show");    // REMOVE CSS HIDDEN

    /* cartLocal.forEach(function(a){
        blankArray.push({name:a.name,price:a.price});
    })
    
    if(blankArray.length != 0){ */

    if(inview < 1 ){

        cartLocal = JSON.parse(localStorage.getItem("intoLocalStorage"));  // REFRESH DATA FROM LOCAL SAVE
    
        let aab = document.createElement('div');
        aab.innerHTML = `<div id="cartHoverName">
        <h4 >Cart Items</h4>
    </div>` 
        cartHoverPanel.append(aab);

        cartLocal.forEach(function(a){


            let newDiv = document.createElement("div");   
            
                newDiv.innerHTML = `
                
                    <div class="d-flex" id="miniCartItem">
                        <h5 class="col-9" id="ocName">${a.name}</h5><p class="col-3" id="ocPrice">₱: ${a.price}</p>
                    </div> 
                    <hr style="color:gray">
                `
            cartHoverPanel.append(newDiv);

            inview = 1;    // ADD 1 FOR STATEMENT TO BE FALSE
            
       })      
  

    }
    else{


        
    }
/* } */

}


function miniCartItem(no){
    let aname = document.querySelector("#name"+ no);
    let aprice = document.querySelector("#price"+ no);

    aname.innerHTML = cartLocal[no].name;
    aprice.innerHTML = cartLocal[no].price;
}


// CLOSE MINI CART 
document.querySelector("body").addEventListener('click',function(){
    cartHoverPanel.classList.remove("show");
    cartHoverPanel.innerHTML = " ";
    inview = 0;
    cartLocal;

})

