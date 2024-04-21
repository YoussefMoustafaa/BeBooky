class User {
    constructor(userID, username, password, borrowedBooks, isAdmin) {
        this.userID = userID;
        this.username = username;
        this.password = password;
        this.borrowedBooks = borrowedBooks;
        this.isAdmin = isAdmin;
    }
}

let user1 = new User(
    1,
    "mestive",
    "admin123",
    [],
    true
)

let user2 = new User(
    2,
    'moro',
    'moro123',
    [],
    false
)

let user3 = new User(
    3,
    'mazen',
    'mazen123',
    [],
    true
)

export const usersList = [
    user1,
    user2,
    user3
]

// let username = 'ay'
// let password = '12'

// let foundUser = usersList.filter(user => {
//     return (user.username === username && user.password === password)
// })[0]

// let isUsernameNotUnique = usersList.some(user => {
//     return (user.username == username)
// })

// if (isUsernameNotUnique == true) {
//     console.log('username must be unique');
// } else {

// }

// if (foundUser)
//     localStorage.setItem('user', JSON.stringify(foundUser))
// else {
    
// }
    

// localStorage.setItem('users', JSON.stringify(usersList))

// let input = localStorage.getItem('users')

// input = JSON.parse(input)



// function getUsers() {
//     localStorage.getItem()
// }