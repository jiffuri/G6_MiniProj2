
// RUN TO PREVENT NULL
let runOnce = JSON.parse(localStorage.getItem('runOnce'))

console.log("the runonce " +runOnce);
if(runOnce != 'ok'){

localStorage.setItem('shopNowStorage', JSON.stringify('1'));
localStorage.setItem('isUser_LoggedIn', JSON.stringify('false'));
localStorage.setItem('intoLocalStorage', JSON.stringify('df'));
console.log("inside run run");

}
localStorage.setItem('runOnce', JSON.stringify('ok'));

