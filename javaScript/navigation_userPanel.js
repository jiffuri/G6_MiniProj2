import {customer} from './dummyUser.js';



let noUser = document.getElementById("noUser");
let withUser = document.getElementById("subMenu");

let login_Element = document.getElementById("login-btn");


let isUser_Login = JSON.parse(localStorage.getItem('isUser_LoggedIn'))



/* LOGIN THE USER PROCESS */
    login_Element.addEventListener('click',function(){
    
        if(isUser_Login != 'true'){
            noUser.classList.toggle("hide");
            console.log('add show');
            
        }
        else if(isUser_Login == 'true'){
            withUser.classList.toggle("hide");
            console.log('add show');
        }

    })
//--------------------------------------


let userName_Element = document.getElementsByClassName("inputUserName");
let password_Element = document.getElementsByClassName("inputPassword");

let loginAction_Element = document.getElementById("loginAction");


// LOGIN BUTTON ACTION
loginAction_Element.addEventListener('click',function(){
       
        localStorage.setItem("isUser_LoggedIn", JSON.stringify('true'));
}) 
//------------------------------------------------------


let logout_Element = document.getElementById("userLogout");


logout_Element.addEventListener('click', function(){
    localStorage.setItem('isUser_LoggedIn', JSON.stringify('false'));
    withUser.classList.add('hide');
    
    history.go(0);  // reload page
})



let orderNowPanel_Element = document.getElementById("mode-sample");
    let h2label = document.getElementById("h2label");
    let userForm = document.querySelector(".userForm"); // TOP PARTT
    let aguest = document.querySelector("#aguest") // LOWER PART

// ALWAYS RUN TO CHECK
if(isUser_Login == 'true'){
    h2label.classList.add('hide');
    userForm.classList.add('hide');
    aguest.classList.add('hide');
    orderNowPanel_Element.classList.add("hide");
    
}
else{
    /* userForm.classList.remove('hide'); */

}
