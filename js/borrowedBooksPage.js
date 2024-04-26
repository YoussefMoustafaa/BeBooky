const unSignedNavBar = `
<a href="../pages/index.html" id="header-title">BeBooky</a>
<ul id="menu-links">
    <li><a href="../pages/index.html">Home</a></li>
</ul>
<ul id="register-btns">
    <li><a href="../pages/Login.html" id="login-btn">Log in</a></li>
    <li><a href="../pages/SignUp.html" id="get-started-btn">Get Started</a></li>
</ul>
`

const UserNavBar = `
<a href="../pages/index.html" id="header-title">BeBooky</a>
<ul id="menu-links">
    <li><a href="../pages/index.html">Home</a></li>
    <li><a href="../pages/allBooks.html">All Books</a></li>
    <li><a href="../userPages/userBorrowedBooks.html">Borrowed Books</a></li>
</ul>
<ul id="register-btns">
    <li><a href="../pages/SignUp.html" id="log-out-btn">Log out</a></li>
</ul>
`

const AdminNavBar = `
<a href="../pages/index.html" id="header-title">BeBooky</a>
<ul id="menu-links">
    <li><a href="../pages/index.html">Home</a></li>
    <li><a href="../pages/allBooks.html">All Books</a></li>
    <li><a href="../pages/addBook.html">Add Book</a></li>
</ul>
<ul id="register-btns">
    <li><a href="../pages/SignUp.html" id="log-out-btn">Log out</a></li>
</ul>
`

let navBar = document.getElementById('nav-bar')

let activeUser = JSON.parse(localStorage.getItem('activeUser'))

if (navBar) {
    if (!activeUser) {
        navBar.innerHTML= unSignedNavBar
    } else if (activeUser.isAdmin) {
        navBar.innerHTML= AdminNavBar
    } else {
        navBar.innerHTML= UserNavBar
    }
}

const booksList = document.getElementById('Books')
let storedBooks = activeUser.borrowedBooks
console.log(storedBooks);
console.log(storedBooks.length);
if (storedBooks.length === 0) {
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
          4.1
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
    if (event.target.id) {
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