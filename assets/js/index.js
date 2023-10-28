document.addEventListener("DOMContentLoaded", function () {

let form_login_register = document.querySelector("#forms-login-register")
let form_login = document.querySelector("#login-form");
let form_register = document.querySelector("#register-form");

let background_login = document.querySelector("#button-inicio-sesion").addEventListener("click", inicioSesionSwap);
let background_register = document.querySelector("#button-register").addEventListener("click", registerSwap);

// Captura el campo de contraseña y el botón de alternancia
var passwordInput = document.getElementById("password");
var showPasswordBtn = document.getElementById("showPasswordBtn").addEventListener("click", showPassword);

function registerSwap(){
    if (window.innerWidth > 850){
        form_register.style.display = "block";
        form_login_register.style.left = "410px";
        form_login.style.display = "none";
        background_register.style.opacity = "0";
        background_login.style.opacity = "1";
    }else{
        form_register.style.display = "block";
        form_login_register.style.left = "0px";
        form_login.style.display = "none";
        background_register.style.display = "none";
        background_login.style.display = "block";
        background_login.style.opacity = "1";
    }

} 

function inicioSesionSwap(){
    if (window.innerWidth > 850){
        form_login.style.display = "block";
        form_login_register.style.left = "10px";
        form_register.style.display = "none";
        background_register.style.opacity = "1";
        background_login.style.opacity = "0";
    }else{
        form_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        form_register.style.display = "none";
        form_login_register.style.display = "block";
        background_login.style.display = "none";
    }
}

    function showPassword(){
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }

})