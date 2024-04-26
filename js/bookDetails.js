import { renderNavBar } from "../modules/navBar.js"
import { usersList } from "../modules/users.js"

let book = JSON.parse(sessionStorage.getItem('selectedBook'))

function renderBookDetails() {


    if (book)
        book.description = book.description.replaceAll('\\n', '<br>')

    let bookHtml = `<div id = "bookName">${book.name}</div>
    <div id = "rat"><b>Book Rating :&nbsp;</b> ${book.rating} </div>
    <br>
    <hr>
    <div id = "det"> Book Details</div>
    <div id = "author"><b>Author Name &nbsp;</b><em>"${book.author}"</em></div>

    <div id = "pages"><b>Number of pages&nbsp;</b>${book.numberOfPages}</div>

    <div id = "cat"><b>Category &nbsp;</b>${book.category}</div>

    <div id = "desc"><div id = "bookLabel"><b>Book Description</b></div>"${book.description}"</div>
    <!-- <img id = "rightImg" src="../images/6888606_copy-removebg-preview.png" alt="right img"> -->
    <button id ="Borrow_button">Borrow</button>
    <button id="edit-book-btn">Edit Book</button>
    <button id="delete-book-btn">Delete Book</button>`    

    const bookDetailsSection = document.getElementById('right')

    if (bookDetailsSection)
        bookDetailsSection.innerHTML = bookHtml

    const bookDetialsImg = document.getElementById('imgFrame')

    if (bookDetialsImg)
        bookDetialsImg.innerHTML = `<img id = "book-details-img" src="${book.bookCover}" alt="${book.name} book">`
}

renderBookDetails()

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
    <li><a href="../adminPages/addBook.html">Add Book</a></li>
</ul>
<ul id="register-btns">
    <li><a href="../pages/SignUp.html" id="log-out-btn">Log out</a></li>
</ul>
`

let navBar = document.getElementById('nav-bar')

let activeUser = document.getElementById('activeUser')

if (navBar) {
    if (!activeUser) {
        navBar.innerHTML= unSignedNavBar
    } else if (activeUser.isAdmin) {
        navBar.innerHTML= AdminNavBar
    } else {
        navBar.innerHTML= UserNavBar
    }
}

const editBookBtn = document.getElementById('edit-book-btn')
const deleteBookBtn = document.getElementById('delete-book-btn')

if (editBookBtn) {
    editBookBtn.addEventListener('click', function () {
        sessionStorage.setItem('selectedBook', JSON.stringify(book))
    
        window.location.href = '../pages/editBook.html'
    })

}


function deleteBook() {
    var selectedBook = JSON.parse(sessionStorage.getItem('selectedBook'));
    var books = JSON.parse(localStorage.getItem('books'));
    books = books.filter(function (book){
        return book.id !== selectedBook.id;
    });
    localStorage.setItem('books', JSON.stringify(books));
}


if (deleteBookBtn) {
    deleteBookBtn.addEventListener('click', function () {
        sessionStorage.setItem('selectedBook', JSON.stringify(book))

        deleteBook()

        window.location.href = '../pages/allBooks.html'
    })
}

const Borrow_button = document.getElementById('Borrow_button');
let activeuser = JSON.parse(localStorage.getItem("activeUser"));

if (Borrow_button) {
    
    Borrow_button.addEventListener('click', function () {
        // book.isBorrowed = true;
        // activeuser.borrowedBooks.push(book);
        // console.log(activeuser)
        sessionStorage.setItem('selectedBook', JSON.stringify(book))
        // localStorage.setItem("activeUser",JSON.stringify(activeuser))
        window.location.href = '../userPages/userBorrowedBooks.html'
    })
}
function check_admin() {
    console.log(activeuser);
    console.log(Borrow_button);
        if (activeuser.isAdmin){
            Borrow_button.style.display = "none";
        }
        else{
            editBookBtn.style.display = "none";
            deleteBookBtn.style.display = "none";  
        }
}
check_admin();

