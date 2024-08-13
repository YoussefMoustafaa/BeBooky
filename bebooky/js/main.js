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
        if (event.target.id && event.target.id != "book-list") {
            // window.location.href = `./book.html?id=${event.target.id}`
            viewBookDetails(event)
        }
    })
}



function getBooks() {
    let booksHtml = booksArr.map(book => {
        return `<div class="card">
        <div class="image-container">
            <img src="${book.bookCover}" alt="${book.name} book" id="${book.id}">
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
    }).join('')
    
    return booksHtml
}



export function renderBooks(bookListConatiner) {
    if (bookListConatiner)
        bookListConatiner.innerHTML = getBooks()
}

renderBooks(bookListSection)


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

localStorage.setItem('books', JSON.stringify(booksArr))

let activeuser = JSON.parse(localStorage.getItem('activeUser'))

function check_admin() {
    console.log(activeuser);
    console.log();
    if (activeuser && activeuser.isAdmin) {
        const borrowNowButton = document.querySelector('.cta-borrow-now');
        if (borrowNowButton) {
            borrowNowButton.style.display = "none";
        }
    }
}
check_admin();