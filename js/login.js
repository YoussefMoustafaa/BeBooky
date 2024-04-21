// import {User, usersList} from "../JS/users.js";

let usersList = JSON.parse(localStorage.getItem('users')) || []

let password = document.querySelector("#password");

let show = "visibility";
let unshow = "visibility_off";

let ToggleVisibility = () => {
    if(password.type === "password") {
        password.type = "text";
        document.querySelector("#visibile").textContent = unshow;
    } else {
        password.type = "password";
        document.querySelector("#visibile").textContent = show;
    }
} 

let PassMin = () => {
    if(password.value != ''){
        if(password.value.length < 8){
            document.querySelector(".min").innerHTML = `Password Must contain at least 8 charcaters`;
        } else {
            document.querySelector(".min").innerHTML = ``;
        }
    } else {
        document.querySelector(".min").innerHTML = ``;
    }
}

// let findUser = () => {
//     let foundUser = usersList.filter(user => {
//         return (user.username === username && user.password === password)
//     })[0];

//     if (foundUser){
//         localStorage.setItem('user', JSON.stringify(foundUser))
//     } else {
//         let add = `
//         <p  style = "color: red; margin-bottom: 5px; display: flex; align-items: center;">
//         <i class="material-icons" style = "color: red;">error</i>
//          Account not found, please check username and password</p>`;
//         let form = document.querySelector("form");
        
//         // Add 'add' variable after form
//         form.insertAdjacentHTML('afterend', add);    
//     }
// }

let form = document.getElementsByTagName("form");

if(localStorage.getItem('username') && localStorage.getItem("password")){
    document.getElementById("username").value = localStorage.getItem("username");
    document.getElementById("password").value = localStorage.getItem("password");
}

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     localStorage.setItem('username',username);
//     localStorage.setItem('password',password);

// });

// function submitForm(event) {

//     event.preventDefault();
//     window.location.href = '#';
// }
