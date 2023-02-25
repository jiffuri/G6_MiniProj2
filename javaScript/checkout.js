

let itemSummary = document.querySelector("#itemSummary");
let getItemForSummary = JSON.parse(localStorage.getItem('intoLocalStorage'));

let sumDiv = document.createElement('div');
let cartTotalValue = 0;

let subTotal = document.getElementById("subTotal");
let sumTotalNum = document.getElementById("sumTotalNum");

let estTime = document.getElementById("estTime");
let selectProb = document.getElementById("selectProb");

let payOption = document.querySelectorAll(".payOption");

getItemForSummary.forEach(function(a){
    cartTotalValue = cartTotalValue + Number(a.price);
})
subTotal.innerHTML = "₱ " +   cartTotalValue;
sumTotalNum.innerHTML = "₱ " +   cartTotalValue;

selectProb.addEventListener('click',function(){
    estTime.textContent = selectProb.value;
})


getItemForSummary.forEach(function(aa){

    sumDiv.innerHTML += `<p class="d-flex justify-content-between px-3"><span>${aa.name}</span> <span>₱: ${aa.price}</span></p>`


    itemSummary.append(sumDiv);

})

let p1 = querySelector(".p1");
        let p2 = document.getElementsByClassName("p2");
        let p3 = document.getElementsByClassName("p3");
        let p4 = document.getElementsByClassName("p4");


payOption.forEach(function(a){
    a.addEventListener('click',function(){
        console.log(a.dataset.num);
        

      if(a.dataset.num = 1){
        
      }else if(a.dataset.num = 2){
   
      }else if(a.dataset.num = 3){

      }else if(a.dataset.num = 4){

      }else{
        a.style.color = 'white';
      }

        
    })
})



