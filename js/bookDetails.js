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
    <button>Borrow</button>
    <button id="edit-book-btn">Edit Book</button>`    

    const bookDetailsSection = document.getElementById('right')

    if (bookDetailsSection)
        bookDetailsSection.innerHTML = bookHtml

    const bookDetialsImg = document.getElementById('imgFrame')

    if (bookDetialsImg)
        bookDetialsImg.innerHTML = `<img id = "book-details-img" src="${book.bookCover}" alt="${book.name} book">`
}

renderBookDetails()

let navBar = document.getElementById('nav-bar')

navBar.innerHTML = renderNavBar(usersList[1])

const editBookBtn = document.getElementById('edit-book-btn')

if (editBookBtn) {
    editBookBtn.addEventListener('click', function () {
    
        console.log(book);
        sessionStorage.setItem('selectedBook', JSON.stringify(book))
    
        window.location.href = '../adminPages/editBook.html'
    })

}