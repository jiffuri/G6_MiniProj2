


let localData_Access = JSON.parse(localStorage.getItem('intoLocalStorage'))
let totalNum_Element = document.getElementById("totalNum");

let totalNum_Temp = 0;

let newDiv = document.createElement("div");  // CREATE NEW Div




/* getLocalData.forEach(function(e){
    e.
}) */






// GET TOTAL PRICE, DISPLAY -----------------------
localData_Access.forEach(function(c){
    totalNum_Temp += Number(c.price);
    
})
totalNum_Element.innerHTML = totalNum_Temp; 
//--------------------------------------------------
