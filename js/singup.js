import { User, usersList } from "../modules/users.js"

let username
let password

let newUser = new User(
    123,
    username,
    password,
    false
)

let listOfUsers = getUsers()

listOfUsers.push(newUser)

saveUsers()