let id = (id)=> document.getElementById(id)

let classes = (classes)=> document.getElementsByClassName(classes)

let email = id("email"),
password = id("password"),
form = id("form"),
error = classes("error");

form.addEventListener("submit",(e) =>{
    e.preventDefault();

    engine(email, 0, "Email cannot be blank");
    engine(password, 1, "Password cannot be blank");

})

let engine = (id, serial, message) =>{
    if(id.value.trim() === ''){
        error[serial].innerHTML = message ;
    }
    else{
        error[serial].innerHTML = '';
    }
}

