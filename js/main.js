import { booksList } from "../modules/books.js"
import { logOut, renderNavBar } from "../modules/navBar.js"


let booksArr = JSON.parse(localStorage.getItem('books')) || []

const bookListSection = document.getElementById('book-list')

export function viewBookDetails(event) {

    window.location.href = '../pages/bookDetails.html'
    let selectedBook = booksArr.filter(book => {
        return book.id == event.target.id
    })[0]
    
    sessionStorage.setItem('selectedBook', JSON.stringify(selectedBook))
}


if (bookListSection) {
    bookListSection.addEventListener('click', function (event) {
        if (event.target.id) {
            // window.location.href = `./book.html?id=${event.target.id}`
            viewBookDetails(event)
        }
    })
}



function getBooks() {
    let booksHtml = booksArr.map(book => {
        return `<div class="book-item">
        <img src="${book.bookCover}" alt="${book.name} book" id="${book.id}">
        <h3>${book.name}</h3>
        <p>${book.author}</p>
        </div>`
    }).join('')
    
    return booksHtml
}



export function renderBooks(bookListConatiner) {
    if (bookListConatiner)
        bookListConatiner.innerHTML = getBooks()
}

renderBooks(bookListSection)

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
<a href="../userPages/userHomePage.html" id="header-title">BeBooky</a>
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
<a href="../userPages/userHomePage.html" id="header-title">BeBooky</a>
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

const logOutBtn = document.getElementById('log-out-btn')

if (logOutBtn) {
    logOutBtn.addEventListener('click', function() {
        logOut()
    })
}
localStorage.setItem('books', JSON.stringify(booksArr))