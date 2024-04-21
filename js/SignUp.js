class User {
    constructor(userID, username, password, borrowedBooks, isAdmin) {
        this.userID = userID;
        this.username = username;
        this.password = password;
        this.borrowedBooks = borrowedBooks;
        this.isAdmin = isAdmin;
    }
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

// check if checkbox is checked as admin or user
let isChecked = () =>{
    let Admin = document.querySelector("#isAdmin");
    return(Admin.checked)? true : false;
}

let AddUser = () => {
    let username = document.querySelector("#username").value,
    email = document.getElementById('email').value,
    count = 4;
    let newUser = new User(
        count++,
        username,
        password.value,
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

let flag = true
let usernameValidMsg = document.getElementById('username-val-msg')
let usernameCheckIcon = document.getElementById('username-check-icon')

let validUser = document.querySelector(".Username");

document.getElementById('username').addEventListener('keyup', function(value) {
    let isUsernameExists = usersList.some(user => {
        return (user.username == username)
    })
    let add = ``
    if (isUsernameExists == true) {
        usernameValidMsg.textContent = "username already exists, try another";
        usernameValidMsg.style.color = "red";
        usernameCheckIcon.style.color = "red";
        usernameCheckIcon.textContent = "error";
    
        add = `
            <p  style = "color: red; margin-bottom: 5px; display: flex; align-items: center;">
            <i class="material-icons" style = "color: red;">error</i>
             username already exists, try another</p>`;
        
        // Add 'add' variable after form
    } else {
        usernameValidMsg.innerHTML = "Username Valid";
        usernameValidMsg.style.color = "green";
        usernameCheckIcon.style.color = "green";
        usernameCheckIcon.innerHTML = "check_circle";
        add = `
            <p  style = "color: green; margin-bottom: 5px; display: flex; align-items: center;">
            <i class="material-icons" style = "color: green;">check_circle</i>
             Username valid</p>`;
        
        // Add 'add' variable after form
    }

})


    // validUser.innerHTML = ``;        

// if(password.value != ''){
//     if(password.value.length < 8){
//         document.querySelector(".min").innerHTML = `Password Must contain at least 8 charcaters`;
//     } else {
//         document.querySelector(".min").innerHTML = ``;
//     }
// } else {
//     document.querySelector(".min").innerHTML = ``;
// }

let form = document.getElementById('sign-up-form')

form.addEventListener('submit', e => {
    e.preventDefault()

    AddUser();

    window.location.href = 'Login.html';
})


    // let formData = JSON.parse(localStorage.getItem('formData')) || [];

//     let exist = formData.length && 
//         JSON.parse(localStorage.getItem('formData')).some(data => 
//             data.fname.toLowerCase() == fname.toLowerCase() && 
//             data.lname.toLowerCase() == lname.toLowerCase()
//         );

//     if(!exist){
//         formData.push({ fname, lname, email, pwd });
//         localStorage.setItem('formData', JSON.stringify(formData));
//         document.querySelector('form').reset();
//         document.getElementById('fname').focus();
//         alert("Account Created.\n\nPlease Sign In using the link below.");
//     }
//     else{
//         alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
//     }
//     e.preventDefault();