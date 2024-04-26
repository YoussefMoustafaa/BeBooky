let activeUser = JSON.parse(localStorage.getItem('activeUser'))

var selectedBook = JSON.parse(sessionStorage.getItem('selectedBook'))

console.log(selectedBook)
if(selectedBook.isBorrowed==true){
    alert("Book is already borrowed");
}
else{
    selectedBook.isBorrowed = true
    // console.log(activeUser);
    // console.log(selectedBook);
    // activeUser.borrowedBooks.push(selectedBook)
    let users = JSON.parse(localStorage.getItem('users'))
    console.log(users);

    
         users = users.filter((user) => {
        // console.log(user.username)
        // console.log(activeUser.username);
        return user.username != activeUser.username 
    })
    console.log(users);
//     console.log(i);
//     console.log(users[i]);
//     users[i].borrowedBooks.push(selectedBook)
//     console.log(activeUser);
    activeUser.borrowedBooks.push(selectedBook);
    users.push(activeUser);
    


     localStorage.setItem('user', JSON.stringify(users))

   localStorage.setItem('activeUser', JSON.stringify(activeUser))

    let AllBooks = JSON.parse(localStorage.getItem("books"))
    console.log(AllBooks);

    AllBooks = AllBooks.filter((book) => {
        return book.id != selectedBook.id;
    })

    AllBooks.push(selectedBook);
    localStorage.setItem('books', JSON.stringify(AllBooks))

    console.log(AllBooks);
    alert("Book borrowed successfully");

}