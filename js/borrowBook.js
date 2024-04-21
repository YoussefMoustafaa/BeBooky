let activeUser = JSON.parse(localStorage.getItem('activeUser'))

var book = JSON.parse(sessionStorage.getItem('selectedBook'))

activeUser.borrowedBooks.push(book)
let users = JSON.parse(localStorage.getItem('users'))

let i = users.indexOf((user) => {
    return user.id == activeUser.Id
})

users[i].borrowedBooks.push(book)

localStorage.setItem('user', JSON.stringify(users))

localStorage.setItem('activeUser', JSON.stringify(activeUser))