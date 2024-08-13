import { logOut, renderNavBar } from "../modules/navBar.js"


// var selectedBook = JSON.parse(sessionStorage.getItem('selectedBook'))

// console.log(selectedBook)
// if(selectedBook.isBorrowed==true){
//     alert("Book is already borrowed");
// }
// else{
//     selectedBook.isBorrowed = true
//     // console.log(activeUser);
//     // console.log(selectedBook);
//     // activeUser.borrowedBooks.push(selectedBook)
//     let users = JSON.parse(localStorage.getItem('users'))
//     console.log(users);

//     users = users.filter((user) => {
    //         // console.log(user.username)
//         // console.log(activeUser.username);
//         return user.username != activeUser.username 
//     })
//     console.log(users);
// //     console.log(i);
// //     console.log(users[i]);
// //     users[i].borrowedBooks.push(selectedBook)
// //     console.log(activeUser);
//     activeUser.borrowedBooks.push(selectedBook);
//     users.push(activeUser);
    


//     localStorage.setItem('user', JSON.stringify(users))

//    localStorage.setItem('activeUser', JSON.stringify(activeUser))

//     let AllBooks = JSON.parse(localStorage.getItem("books"))
//     console.log(AllBooks);

//     AllBooks = AllBooks.filter((book) => {
    //         return book.id != selectedBook.id;
    //     })
    
    //     AllBooks.push(selectedBook);
    //     localStorage.setItem('books', JSON.stringify(AllBooks))
    
    //     console.log(AllBooks);
    //     alert("Book borrowed successfully");
    
// }


let navBar = document.getElementById('nav-bar')

if (navBar) {
    navBar.innerHTML = renderNavBar()
}

const logOutBtn = document.getElementById('log-out-btn')

if (logOutBtn) {
    logOutBtn.addEventListener('click', function() {
        logOut()
    })
}




let activeUser = JSON.parse(localStorage.getItem('activeUser'))
const booksList = document.getElementById('Books')
let storedBooks = activeUser.borrowedBooks
console.log(storedBooks);
console.log(storedBooks.length);
if (storedBooks.length) {
    let booksHtml = storedBooks.map(book => {
      return `<div class="card ${book.category[0]}">
      <div class="image-container">
          <img src="${book.bookCover}" alt="${book.name}" id=${book.id}>
      </div>
      <div class="container">
        <h3 class="Book-name">${book.name}</h3>
        <h6 class="Autor-name">${book.author}</h6>
        <h2>
          <i class="star-icon">&#9733;</i>
          ${book.rating}
        </h2>
      </div>
    </div>`
    })
    booksList.innerHTML = booksHtml.join('')
} else {
    booksList.innerHTML = `<h1 class='center'>No Books to Show</h1>`
}


if (booksList) {
  booksList.addEventListener('click', (event) => {
    if (event.target.id && event.target.id != "Books") {
      window.location.href = '../pages/bookDetails.html'
      console.log(event.target.id);
      let selectedBook = storedBooks.filter(book => {
          return book.id == event.target.id
      })[0]
      console.log(selectedBook);
      
      sessionStorage.setItem('selectedBook', JSON.stringify(selectedBook))
    }
  })
}