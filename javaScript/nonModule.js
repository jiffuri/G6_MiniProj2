

let counter = JSON.parse(localStorage.getItem('intoLocalStorage'));
let cartCounter = document.getElementById("cartCounter");


console.log(counter.length);



cartCounter.innerHTML = counter.length;




















