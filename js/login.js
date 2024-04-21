let username
let password

let userList = JSON.parse(localStorage.getItem('users'))

const usersList = [
    1, 2, 3
]

usersList.filter(user => {
    if (user.username === username && user.password === password) {
        localStorage.setItem('user', JSON.stringify(user))
    }
})