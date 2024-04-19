import { booksList } from "../modules/books.js"


const bookListSection = document.getElementById('book-list')


if (bookListSection) {
    bookListSection.addEventListener('click', function (event) {
        if (event.target.id) {
            // window.location.href = `./book.html?id=${event.target.id}`
            
            window.location.href = '../pages/bookDetails.html'
            let selectedBook = booksList.filter(book => {
                return book.id == event.target.id
            })[0]
    
            sessionStorage.setItem('selectedBook', JSON.stringify(selectedBook))
            
        }
    })
}


function getBooks() {
    let booksHtml = booksList.map(book => {
        return `<div class="book-item">
        <img src="${book.bookCover}" alt="${book.name} book" id="${book.id}">
        <h3>${book.name}</h3>
        <p>${book.author}</p>
        </div>`
    }).join('')
    
    return booksHtml
}



function renderBooks() {
    if (bookListSection)
        bookListSection.innerHTML = getBooks()
}

renderBooks()

