let activeUser = JSON.parse(localStorage.getItem('activeUser'))

var selectedBook = JSON.parse(sessionStorage.getItem('selectedBook'))

if(selectedBook.isBorrowed==true){
    alert("Book is already borrowed");
}
else{
    selectedBook.isBorrowed = true
    console.log(activeUser);
    console.log(selectedBook);
    activeUser.borrowedBooks.push(selectedBook)
    let users = JSON.parse(localStorage.getItem('users'))
    
    let i = users.indexOf((user) => {
        return user.userID == activeUser.userID
    })

    users[i].borrowedBooks.push(selectedBook)

    localStorage.setItem('user', JSON.stringify(users))

    localStorage.setItem('activeUser', JSON.stringify(activeUser))

    let AllBooks = JSON.parse(localStorage.getItem("books"))

    let j = AllBooks.indexOf((book) => {
        return book.id == selectedBook.id;
    })

    AllBooks[j].isBorrowed = true

    localStorage.setItem('books', JSON.stringify(AllBooks))

    alert("Book borrowed successfully");
}