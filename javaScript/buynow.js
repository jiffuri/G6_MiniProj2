


let orderNowPanel_Element = document.getElementById("mod-sample");
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