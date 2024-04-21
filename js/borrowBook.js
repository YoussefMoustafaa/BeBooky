users = [user1, user2]

let activeUser = JSON.parse(localStorage.getItem('activeUser'))

activeUser = {
    userId,
    username,
    password,
    borrowedBooks,
    isAdmin
}


button.addEventListner('click', function () {
    activeUser.borrowedBooks.push(book)

    let users = JSON.parse(localStorage.getItem('users'))

    let i = users.indexOf((user) => {
        return userId == activeUser.Id
    })

    users[i].borrowedBooks.push(book)

    localStorage.setItem('user', JSON.stringify(users))


    localStorage.setItem('activeUser', JSON.stringify(activeUser))

    window.location.href = '/borrowedBooks.html'
})