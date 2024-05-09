import { logOut, renderNavBar } from "../modules/navBar.js"
import { User } from "../modules/users.js"

let navBar = document.getElementById('nav-bar')

if (navBar) {
    navBar.innerHTML = renderNavBar()
}

const logOutBtn = document.getElementById('log-out-btn')

if (logOutBtn) {
    logOutBtn.addEventListener('click', function() {
        logOut()
    })
}


let usersList = JSON.parse(localStorage.getItem('users')) || []

let password = document.querySelector("#password"),
confirmPassword = document.querySelector("#ConfirmPassword"),

show = "visibility",
unshow = "visibility_off";

// Visibility icon of password field
let ToggleVisibility = () => {
    if(password.type === "password") {
        password.type = "text";
        document.querySelector("#visibile").textContent = unshow;
    } else {
        password.type = "password";
        document.querySelector("#visibile").textContent = show;
    }
} 

const visibleIcon = document.getElementById('visibile')

visibleIcon.addEventListener('click', ToggleVisibility)



// Visibility icon of confirm password field
let confirmToggleVisibility = () => {
    if(confirmPassword.type === "password") {
        confirmPassword.type = "text";
        document.querySelector("#visibileConfirm").textContent = unshow;
    } else {
        confirmPassword.type = "password";
        document.querySelector("#visibileConfirm").textContent = show;
    }
}

const visibleConfirm = document.getElementById('visibileConfirm')

visibleConfirm.addEventListener('click', confirmToggleVisibility)




// check if checkbox is checked as admin or user
let isChecked = () =>{
    let Admin = document.querySelector("#isAdmin");
    return(Admin.checked)? true : false;
}

const checkAdmin = document.getElementById('isAdmin')

checkAdmin.addEventListener('click', isChecked)


var count = 4;

let AddUser = () => {
    let username = document.querySelector("#username").value,
    email = document.getElementById('email').value;
    let newUser = new User(
        count++,
        username,
        password.value,
        [],
        isChecked()
    );
    let storedUsers = JSON.parse(localStorage.getItem('users'))
    if(storedUsers == null){
        storedUsers = [];
    }
    storedUsers.push(newUser)
    localStorage.setItem('users', JSON.stringify(storedUsers))
}

let min = document.querySelector(".min");
let PassMin = () => {
    if(password.value != ''){
        if(password.value.length < 8){
            min.innerHTML = `Password Must contain at least 8 charcaters`;
        } else {
            min.innerHTML = ``;
        }
    } else {
        min.innerHTML = ``;
    }
}

const passwordRequirement = document.getElementById('password')

passwordRequirement.addEventListener('keyup', PassMin)




let message = document.querySelector(".message");
let PassCheck = () => {
    if(password.value != '' && confirmPassword.value != ''){
        if(password.value.length >= 8 && confirmPassword.value.length >= 8){
            if(confirmPassword.value === password.value){
                message.innerHTML = `<i class="material-icons" style = "color: green;">check_circle</i> Password Matches`;
                message.style.color = "green";
            } else {
                message.innerHTML = `<i class="material-icons" style = "color: red;">error</i> Password not Match`;
                message.style.color = "red";
            }
        } else {
            message.innerHTML = `Password Must contain at least 8 charcaters`;
        }
    } else {
        message.innerHTML = ``;
    }
}

confirmPassword.addEventListener('keyup', PassCheck)

// let flag = true
// let usernameValidMsg = document.getElementById('username-val-msg')
// let usernameCheckIcon = document.getElementById('username-check-icon')

// let validUser = document.querySelector(".Username");

// document.getElementById('username').addEventListener('keyup', function(value) {
//     let isUsernameExists = usersList.some(user => {
//         return (user.username == username)
//     })
//     let add = ``
//     if (isUsernameExists == true) {
//         usernameValidMsg.textContent = "username already exists, try another";
//         usernameValidMsg.style.color = "red";
//         usernameCheckIcon.style.color = "red";
//         usernameCheckIcon.textContent = "error";
    
//         add = `
//             <p  style = "color: red; margin-bottom: 5px; display: flex; align-items: center;">
//             <i class="material-icons" style = "color: red;">error</i>
//              username already exists, try another</p>`;
        
//         // Add 'add' variable after form
//     } else {
//         usernameValidMsg.innerHTML = "Username Valid";
//         usernameValidMsg.style.color = "green";
//         usernameCheckIcon.style.color = "green";
//         usernameCheckIcon.innerHTML = "check_circle";
//         add = `
//             <p  style = "color: green; margin-bottom: 5px; display: flex; align-items: center;">
//             <i class="material-icons" style = "color: green;">check_circle</i>
//              Username valid</p>`;
        
//         // Add 'add' variable after form
//     }

// })

let form = document.getElementById('sign-up-form')

form.addEventListener('submit', e => {
    e.preventDefault()

    AddUser();

    window.location.href = 'Login.html';
})