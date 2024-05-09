import { logOut, renderNavBar } from "../modules/navBar.js"

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

const visibleIcon = document.getElementById('visibile')

visibleIcon.addEventListener('click', ToggleVisibility)


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

const passwordRequirement = document.getElementById('password')

passwordRequirement.addEventListener('keyup', PassMin)


let flag = true

let form = document.getElementById("log-in-form");

let findUser = (username, password) => {
    let foundUser = usersList.filter(user => {
        return (user.username === username && user.password === password)
    })[0];
    if (foundUser){
        localStorage.setItem('activeUser', JSON.stringify(foundUser))
        window.location.href = '../pages/index.html'
    } else {
        if (flag) {
            let add = `
            <p  style = "color: red; margin-bottom: 5px; display: flex; align-items: center;">
            <i class="material-icons" style = "color: red;">error</i>
             Account not found, please check username and password</p>`;
            
            // Add 'add' variable after form
            form.insertAdjacentHTML('afterend', add);    
            flag = false
        }
    }
}


if(localStorage.getItem('username') && localStorage.getItem("password")){
    document.getElementById("username").value = localStorage.getItem("username");
    document.getElementById("password").value = localStorage.getItem("password");
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    findUser(username, password)

});

// function submitForm(event) {

//     event.preventDefault();
//     window.location.href = '#';
// }