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

let flag = true

let form = document.getElementById("log-in-form");

let findUser = (username, password) => {
    let foundUser = usersList.filter(user => {
        return (user.username === username && user.password === password)
    })[0];
    if (foundUser){
        localStorage.setItem('activeUser', JSON.stringify(foundUser))
        window.location.href = '../index.html'
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

const unSignedNavBar = `
<a href="../pages/index.html" id="header-title">BeBooky</a>
<ul id="menu-links">
    <li><a href="../pages/index.html">Home</a></li>
</ul>
<ul id="register-btns">
    <li><a href="../pages/Login.html" id="login-btn">Log in</a></li>
    <li><a href="../pages/SignUp.html" id="get-started-btn">Get Started</a></li>
</ul>
`

const UserNavBar = `
<a href="../userPages/userHomePage.html" id="header-title">BeBooky</a>
<ul id="menu-links">
    <li><a href="../pages/index.html">Home</a></li>
    <li><a href="../pages/allBooks.html">All Books</a></li>
    <li><a href="../userPages/userBorrowedBooks.html">Borrowed Books</a></li>
</ul>
<ul id="register-btns">
    <li><a href="../pages/SignUp.html" id="log-out-btn">Log out</a></li>
</ul>
`

const AdminNavBar = `
<a href="../userPages/userHomePage.html" id="header-title">BeBooky</a>
<ul id="menu-links">
    <li><a href="../pages/index.html">Home</a></li>
    <li><a href="../pages/allBooks.html">All Books</a></li>
    <li><a href="../adminPages/addBook.html">Add Book</a></li>
</ul>
<ul id="register-btns">
    <li><a href="../pages/SignUp.html" id="log-out-btn">Log out</a></li>
</ul>
`

let navBar = document.getElementById('nav-bar')

let activeUser = document.getElementById('activeUser')

if (navBar) {
    if (!activeUser) {
        navBar.innerHTML= unSignedNavBar
    } else if (activeUser.isAdmin) {
        navBar.innerHTML= AdminNavBar
    } else {
        navBar.innerHTML= UserNavBar
    }
}