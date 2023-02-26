


let localData_Access = JSON.parse(localStorage.getItem('intoLocalStorage'))
let totalNum_Element = document.getElementById("totalNum");
let displayItem_Element = document.getElementById("displayItem");
let week_Element = document.getElementById("week");
let fifteenDays_Element = document.getElementById("fifteenDays");
let month_Element = document.getElementById("month");
let twoMonth_Element = document.getElementById("months");

let subTotal = document.getElementById("subTotal");
let deliveryFee = document.getElementById("deliveryFee");
let subs = document.getElementById("subs");
let deliveryTime = document.getElementById("deliveryTime");


let totalNum_Temp = 0;
let subs_Temp = Number(subs.innerHTML);
let deliveryFee_Temp = 35;
    let deliveryFee_Temp2 = '₱ ' + deliveryFee_Temp;
let est_Temp = '2hr';


let cod_Element = document.getElementById("cashOnDelivery");
let creditDebit_Element = document.getElementById("creditDebit");
let gcash_Element = document.getElementById("gcash");
let payMaya_Element = document.getElementById("payMaya");


deliveryTime.innerHTML = est_Temp;
deliveryFee.innerHTML = deliveryFee_Temp2;

// GET AND DISPLAY PRODUCT IN THE CART
    localData_Access.forEach(function(d){

        displayItem_Element.innerHTML += `
                        <div class="d-flex justify-content-between checkOutItems">
                            <p>${d.name}</p>
                            <p>₱ ${d.price}</p>
                        </div>
        `
    })
//-------------------------------------------------------------




// GET TOTAL PRICE, DISPLAY -----------------------
localData_Access.forEach(function(c){
    totalNum_Temp += Number(c.price);
    
})
    
totalNum_Element.textContent = '₱ '+ (totalNum_Temp + deliveryFee_Temp); 
//--------------------------------------------------



//SUBSCRIPTION BUTTONS ------------------------------
week_Element.addEventListener('click',function(){
        this.style.background = "#422308";
        this.style.color = "#eec07b";
        fifteenDays_Element.style.background = "#eec07b";
        fifteenDays_Element.style.color = "#422308";
        month_Element.style.background = "#eec07b";
        month_Element.style.color = "#422308";
        twoMonth_Element.style.background = "#eec07b";
        twoMonth_Element.style.color = "#422308";
        subs_Temp = totalNum_Temp * 7;
        
        subs.innerHTML = '(7 Days) -  ₱' + subs_Temp;
        totalNum_Element.innerHTML = subs_Temp + deliveryFee_Temp;
})

fifteenDays_Element.addEventListener('click',function(){

        this.style.background = "#422308";
        this.style.color = "#eec07b";
        week_Element.style.background = "#eec07b";
        week_Element.style.color = "#422308";
        month_Element.style.background = "#eec07b";
        month_Element.style.color = "#422308";
        twoMonth_Element.style.background = "#eec07b";
        twoMonth_Element.style.color = "#422308";
        subs_Temp = totalNum_Temp * 15;

        subs.innerHTML = '(15 Days) - ₱' + subs_Temp;
        totalNum_Element.innerHTML = subs_Temp + deliveryFee_Temp;
        

})

month_Element.addEventListener('click',function(){
        this.style.background = "#422308";
        this.style.color = "#eec07b";
        week_Element.style.background = "#eec07b";
        week_Element.style.color = "#422308";
        fifteenDays_Element.style.background = "#eec07b";
        fifteenDays_Element.style.color = "#422308";
        twoMonth_Element.style.background = "#eec07b";
        twoMonth_Element.style.color = "#422308";
        subs_Temp = totalNum_Temp * 30;

        subs.innerHTML = '(30 Days) - ₱' + subs_Temp;
        totalNum_Element.innerHTML = subs_Temp + deliveryFee_Temp;

})

twoMonth_Element.addEventListener('click',function(){
    this.style.background = "#422308";
        this.style.color = "#eec07b";
        week_Element.style.background = "#eec07b";
        week_Element.style.color = "#422308";
        fifteenDays_Element.style.background = "#eec07b";
        fifteenDays_Element.style.color = "#422308";
        month_Element.style.background = "#eec07b";
        month_Element.style.color = "#422308";
        subs_Temp = totalNum_Temp * 60;

        subs.innerHTML = '(60 Days) - ₱' + subs_Temp;
        totalNum_Element.innerHTML = subs_Temp + deliveryFee_Temp;

})
//-------------------------------------------------------






//ORDER SUMMARY ----------------------------------------
    //SUBTOTAL
        subTotal.innerHTML = '₱ '+totalNum_Temp;




// PAYMENT METHOD ---------------------------------------
cod_Element.addEventListener('click',function(){
    paymentProcess(this,creditDebit_Element,gcash_Element,payMaya_Element);
})
creditDebit_Element.addEventListener('click',function(){
    paymentProcess(this,cod_Element,gcash_Element,payMaya_Element);
})
gcash_Element.addEventListener('click',function(){
    paymentProcess(this, cod_Element, creditDebit_Element, payMaya_Element);
})
payMaya_Element.addEventListener('click',function(){
    paymentProcess(this, cod_Element, creditDebit_Element, gcash_Element);
})






function paymentProcess(theActive, non1, non2, non3){
    theActive.style.background = "#422308";
    theActive.style.color = "#eec07b";

    non1.style.background = "#eec07b";
    non1.style.color = "#422308";
    non2.style.background = "#eec07b";
    non2.style.color = "#422308";
    non3.style.background = "#eec07b";
    non3.style.color = "#422308";


}















