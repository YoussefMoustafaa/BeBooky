let activeUser = JSON.parse(localStorage.getItem('activeUser'))

var selectedBook = JSON.parse(sessionStorage.getItem('selectedBook'))

console.log(selectedBook)
if(selectedBook.isBorrowed==true){
    alert("Book is already borrowed");
}
else{
    selectedBook.isBorrowed = true
    console.log(activeUser);
    console.log(selectedBook);
    activeUser.borrowedBooks.push(selectedBook)
    let users = JSON.parse(localStorage.getItem('users'))
    console.log(users);

    
    var users = users.filter((user) => {
        console.log(user.userID);
        console.log(activeUser.userID);
        return user.userID != activeUser.userID ;
    })
    console.log(users);
    console.log(users[i]);
    users[i].borrowedBooks.push(selectedBook)
    console.log(activeUser);


    localStorage.setItem('user', JSON.stringify(users))

    localStorage.setItem('activeUser', JSON.stringify(activeUser))

    let AllBooks = JSON.parse(localStorage.getItem("books"))
    console.log(AllBooks);

    let j = AllBooks.indexOf((book) => {
        return book.id == selectedBook.id;
    })

    AllBooks[j].isBorrowed = true

    localStorage.setItem('books', JSON.stringify(AllBooks))

    console.log(AllBooks);
    alert("Book borrowed successfully");
}