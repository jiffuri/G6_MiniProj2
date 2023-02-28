
let cartContainer = document.querySelector(".cartContainer");

let priceDisplay = document.querySelector("#priceDisplay");
let cartTotalItemDisplay = document.getElementById('cartTotalItemDisplay');

let num = 0;
let cartStorage=[];
let cartTotalValue = 0;


function localStorageIntoCartPage(toSrc,toName,toPrice){
    /* let aTotal = toTotal * toPrice; */
    
    let myCartDiv = document.createElement("div");

    myCartDiv.innerHTML = `
        <div class="row d-flex justify-content-center align-items-center" id="insideCart">
                    <div class="col-4  d-flex align-items-center">
                        <img id="cartImage" src="${toSrc}" alt="">
                        <p>${toName}</p>
                    </div>
                    <div class="col-3  d-flex justify-content-center">
                        <h2>₱ ${toPrice}</h2>
                    </div>
                    <div class="col-2 " id="cartQuantity">
                        
                    <input class='howMany' type="text" placeholder='1'>

                    </div>
                    <div class="col-3  d-flex justify-content-end ">
                        <h2>₱ ${toPrice}</h2>
                        <img id="deleteCart" src="../image/x-square.svg" alt="" onclick="deleteTheCartItem(${num})" data-no = '${num}'>
                    </div>
                </div>


        `;
    cartContainer.append(myCartDiv);
    //console.log(num);
    num++;
}


let myLocalStorage = JSON.parse(localStorage.getItem('intoLocalStorage'));
let cartClick = document.getElementById("cart-btn");
let deleteCart = document.getElementById("deleteCart");


// CART.HTML OWN STORAGE

myLocalStorage.forEach(function(a){
    cartStorage.push({name: a.name, price: a.price, src: a.src});
})
//-----------------------


/* ANY TIME A CART PAGE LOAD 
        CALL FUNCTION TO DISPLAY THE ITEM*/

window.addEventListener("load",function(){


    myLocalStorage.forEach(function(a){
        localStorageIntoCartPage(a.src,a.name,a.price);
    })
})



//let intoLocalStorage = localStorage.getItem('intoLocalStorage');


function deleteTheCartItem(num){
    
    cartStorage.splice(num, 1);
    localStorage.setItem("intoLocalStorage", JSON.stringify(cartStorage));
    cartContainer.innerHTML = "";
    
    reloadCart();
    location.reload();

}




function reloadCart(){
    cartStorage.forEach(function(a){
        localStorageIntoCartPage(a.src,a.name,a.price);
    })
}
 



// GETS TOTAL PRICE OFF ITEM IN THE CART
myLocalStorage.forEach(function(a){
    cartTotalValue = cartTotalValue + Number(a.price);
})
priceDisplay.innerHTML = cartTotalValue;
cartTotalItemDisplay.innerHTML = cartStorage.length+" ";
////////////////////



    console.log("total Item" + cartStorage.length);













/*     <div id='cartPlusMinus'>
    <div class="input-group plus-minus-input" id="cartPlusMinusCon">
        <div class="input-group-button">
          <button type="button" class="button hollow circle" data-quantity="minus" data-field="quantity">
            <i class="fa fa-minus" aria-hidden="true"></i>
          </button>
        </div>
        <input class="input-group-field cartInput" type="number" name="quantity" value="1" size='3'>
        <div class="input-group-button">
          <button type="button" class="button hollow circle" data-quantity="plus" data-field="quantity">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
    </div>
</div>  */