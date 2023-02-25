import {productList as q} from './productDatabase.js';
import {myCart} from './cart.js';



let myCartCount = 1;

// SHOP SELECTION FILTER
/* let chooseProduct = document.getElementById("chooseProduct"); */
let cartCounter = document.getElementById("cartCounter");







// ADD CARDS ON SHOP
function productToCartProcess(pname,pprice,pcontent,psrc){

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


    let cardContainer = document.getElementById("cardContainer");
    let newDiv = document.createElement("div");

    newDiv.classList.add("box","shopbox");

    newDiv.innerHTML = `

                    <div class="icons">

                        <a class="fas fa-shopping-cart" data-bs-trigger="focus" tabindex="0"
                            data-bs-toggle="popover" 
                            data-bs-placement="top" 
                            data-bs-custom-class="addToCart"
                            data-bs-content="Added to Cart"
                            id = "addCartButton"
                            data-name = '${pname}'
                            data-price ='${pprice}'
                            data-image = '${psrc}'
                    
    
                            >
                        </a>
        
                        <a class="fas fa-heart" id="starRatingButton" data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
        
                        <a class="fas fa-eye" data-bs-trigger="focus" tabindex="0" 
                            data-bs-toggle="popover" 
                            data-bs-placement="right" 
                            data-bs-custom-class="nutritionPopover"
                            data-bs-title="Nutrition Facts"
                            data-bs-content= '${pcontent}'
                            id="contentButton"
                            >
                        </a>

                    </div>
                    <div class="img shopBoxImg">
                        <img src="${psrc}" alt="">
                    </div>
                    <div class="content">
                        <h3>${pname}</h3>
                        <div class="price">₱ ${pprice}</div>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>

                `;
    cardContainer.append(newDiv);

};




// name, price, content, src

/* productToCartProcess(q[0].name,q[0].price,q[0].content,q[0].src);
productToCartProcess(q[1].name,q[1].price,q[1].content,q[1].src);
productToCartProcess(q[2].name,q[2].price,q[2].content,q[2].src);
productToCartProcess(q[3].name,q[3].price,q[3].content,q[3].src);
productToCartProcess(q[4].name,q[4].price,q[4].content,q[4].src);
productToCartProcess(q[6].name,q[6].price,q[6].content,q[6].src);
productToCartProcess(q[7].name,q[7].price,q[7].content,q[7].src);
productToCartProcess(q[8].name,q[8].price,q[8].content,q[8].src);
productToCartProcess(q[9].name,q[9].price,q[9].content,q[9].src);
productToCartProcess(q[10].name,q[10].price,q[10].content,q[10].src);
productToCartProcess(q[11].name,q[11].price,q[11].content,q[11].src);
productToCartProcess(q[12].name,q[12].price,q[12].content,q[12].src); */


addCartAction();


function addCartAction(){
// ADD TO CART BUTTON
let cartBtn1 = document.querySelectorAll("#addCartButton"); // ADD CART BUTTON
cartBtn1.forEach(function(a){
    a.addEventListener("click",function(){
        const aname = this.getAttribute('data-name');
        const aprice = this.getAttribute('data-price');
        const aimage = this.getAttribute('data-image');
          
        myCartCount = myCart.length + 1; // REALTIME COUNT FOR SHOP.HTML

        myCart.push({name: aname, price: aprice, src: aimage}); // PUSH INTO TEMPORARY MYCART ARRAY

        localStorage.setItem("intoLocalStorage", JSON.stringify(myCart));  // PLACE IN LOCAL STORAGE
      
        
        cartCounter.innerHTML = myCartCount; // REALTIME COUNT FOR SHOP.HTML
        console.log(aname);

    })
   
}) 

}




let filterArray = []



    chooseProduct.addEventListener('click',function(){
        console.log(chooseProduct.value);
        filterArray.length = 0;
        
        cardContainer.innerHTML = " ";
       

        q.forEach(function(x){
            
            if(x.category == chooseProduct.value){

                console.log('ok');
                filterArray.push({name: x.name, price: x.price, content: x.content, src: x.src});

            }else{ 

            }
        })
        if(chooseProduct.value == 'all'){

        productToCartProcess(q[0].name,q[0].price,q[0].content,q[0].src);
        productToCartProcess(q[1].name,q[1].price,q[1].content,q[1].src);
        productToCartProcess(q[2].name,q[2].price,q[2].content,q[2].src);
        productToCartProcess(q[3].name,q[3].price,q[3].content,q[3].src);
        productToCartProcess(q[4].name,q[4].price,q[4].content,q[4].src);
        productToCartProcess(q[6].name,q[6].price,q[6].content,q[6].src);
        productToCartProcess(q[7].name,q[7].price,q[7].content,q[7].src);
        productToCartProcess(q[8].name,q[8].price,q[8].content,q[8].src);
        productToCartProcess(q[9].name,q[9].price,q[9].content,q[9].src);
        productToCartProcess(q[10].name,q[10].price,q[10].content,q[10].src);
        productToCartProcess(q[11].name,q[11].price,q[11].content,q[11].src);
        productToCartProcess(q[12].name,q[12].price,q[12].content,q[12].src);
        addCartAction();  // IN QUESTION
        }
        else{
            filterArray.forEach(function(y){
                productToCartProcess(y.name,y.price,y.content,y.src);
                addCartAction(); // IN QUESTION
            })
        }

    })



if(chooseProduct.value == 'all'){
    productToCartProcess(q[0].name,q[0].price,q[0].content,q[0].src);
    productToCartProcess(q[1].name,q[1].price,q[1].content,q[1].src);
    productToCartProcess(q[2].name,q[2].price,q[2].content,q[2].src);
    productToCartProcess(q[3].name,q[3].price,q[3].content,q[3].src);
    productToCartProcess(q[4].name,q[4].price,q[4].content,q[4].src);
    productToCartProcess(q[6].name,q[6].price,q[6].content,q[6].src);
    productToCartProcess(q[7].name,q[7].price,q[7].content,q[7].src);
    productToCartProcess(q[8].name,q[8].price,q[8].content,q[8].src);
    productToCartProcess(q[9].name,q[9].price,q[9].content,q[9].src);
    productToCartProcess(q[10].name,q[10].price,q[10].content,q[10].src);
    productToCartProcess(q[11].name,q[11].price,q[11].content,q[11].src);
    productToCartProcess(q[12].name,q[12].price,q[12].content,q[12].src);
    addCartAction(); // 
}else{
    cardContainer.innerHTML = " ";
}



















