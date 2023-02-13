let myfourCards = document.querySelectorAll(".f0");
let fimg1 = document.querySelector(".fimg1");
let fimg2 = document.querySelector(".fimg2");
let fimg3 = document.querySelector(".fimg3");
let fimg4 = document.querySelector(".fimg4");
let myin = document.querySelector("#deliveryInfoContainer");

myfourCards.forEach(function(abc){
    abc.addEventListener("click",cardClick)
       /*  let aa = this.getAttribute("value");
        console.log(aa); */
    
});


function cardClick(){
    let ids = this.getAttribute("value");
    let aa = `#${ids}`;
    let completeId = document.querySelector(aa);

    console.log(ids);
    /* document.querySelector(completeId).classList.add('fourCardsClick'); */

     if(ids == 'f1'){
        console.log("INSIDE F1");
        completeId.classList.add("fourCardsClick","addTopMargin");
        fimg1.classList.add("fimgSize");
        fimg2.classList.remove("fimgSize");
        fimg3.classList.remove("fimgSize");
        fimg4.classList.remove("fimgSize");
        completeId.classList.remove("addTopNegativeMargin");
        document.querySelector("#f2").classList.remove("fourCardsClick","addTopMargin","addTopNegativeMargin");
        document.querySelector("#f3").classList.remove("fourCardsClick");
        document.querySelector("#f3").classList.add("addTopNegativeMargin");
        document.querySelector("#f4").classList.remove("fourCardsClick","addTopMargin","addTopNegativeMargin");
    }else if(ids == 'f2'){
        console.log("INSIDE F2");
        completeId.classList.add("fourCardsClick","addTopMargin");
        fimg2.classList.add("fimgSize");
        fimg1.classList.remove("fimgSize");
        fimg3.classList.remove("fimgSize");
        fimg4.classList.remove("fimgSize");
        completeId.classList.remove("addTopNegativeMargin");
        document.querySelector("#f1").classList.remove("fourCardsClick","addTopMargin","addTopNegativeMargin");
        document.querySelector("#f3").classList.remove("fourCardsClick","addTopMargin");
        document.querySelector("#f3").classList.add("addTopNegativeMargin");
        document.querySelector("#f4").classList.remove("fourCardsClick","addTopMargin","addTopNegativeMargin");
    }else if(ids == 'f3'){
        console.log("INSIDE F3");
        completeId.classList.add("fourCardsClick","addTopMargin");
        completeId.classList.remove("addTopNegativeMargin");
        fimg3.classList.add("fimgSize");
        fimg1.classList.remove("fimgSize");
        fimg2.classList.remove("fimgSize");
        fimg4.classList.remove("fimgSize");
        document.querySelector("#f1").classList.remove("fourCardsClick","addTopMargin","addTopNegativeMargin");
        document.querySelector("#f2").classList.remove("fourCardsClick","addTopMargin");
        document.querySelector("#f2").classList.add("addTopNegativeMargin");
        document.querySelector("#f4").classList.remove("fourCardsClick","addTopMargin","addTopNegativeMargin");
    }else if(ids == 'f4'){
        console.log("INSIDE F4");
        completeId.classList.add("fourCardsClick","addTopMargin");
        completeId.classList.remove("addTopNegativeMargin");
        fimg4.classList.add("fimgSize");
        fimg1.classList.remove("fimgSize");
        fimg2.classList.remove("fimgSize");
        fimg3.classList.remove("fimgSize");
        document.querySelector("#f1").classList.remove("fourCardsClick","addTopMargin","addTopNegativeMargin");
        document.querySelector("#f2").classList.remove("fourCardsClick","addTopMargin");
        document.querySelector("#f2").classList.add("addTopNegativeMargin");
        document.querySelector("#f3").classList.remove("fourCardsClick","addTopMargin","addTopNegativeMargin");
    }
};