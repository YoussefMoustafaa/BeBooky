import { logOut, renderNavBar } from "../modules/navBar.js"

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

const book = JSON.parse(sessionStorage.getItem('selectedBook'));
function updateBookDetails() {
    sessionStorage.setItem('selectedBook', JSON.stringify(book));
}

console.log(document.getElementById('bookname'));

    document.getElementById('bookname').value = book.name;
    document.getElementById('author').value = book.author;
    document.getElementById('bookid').value = book.id;
    document.getElementById('no_of_pages').value = book.numberOfPages;
    document.getElementById('category').value = book.category;
    document.getElementById('rating').value = book.rating;
    document.getElementById('description').value = book.description;
    document.getElementById('img').src = book.bookCover;


document.getElementById('editbookform').addEventListener('change', function () {
    book.name = document.getElementById('bookname').value;
    book.author = document.getElementById('author').value;
    document.getElementById('bookid').value = book.id;
    book.numberOfPages = document.getElementById('no_of_pages').value;
    book.category = document.getElementById('category').value.split(', ');
    book.rating = document.getElementById('rating').value;
    book.description = document.getElementById('description').value;

    sessionStorage.setItem('selectedBook', JSON.stringify(book));
});

// handlet el image
document.getElementById('upImg').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.getElementById('img');
            img.src = e.target.result;
            book.bookCover = e.target.result;
            sessionStorage.setItem('selectedBook', JSON.stringify(book));
        }
        reader.readAsDataURL(file);
    }
});
document.getElementById('save').addEventListener('click', function (event) {
    event.preventDefault()
    updateBookDetails();
    let booksList = JSON.parse(localStorage.getItem('books'));
    const editedBookIndex = booksList.findIndex(item => item.id === book.id);

    if (editedBookIndex !== -1) {
        booksList[editedBookIndex] = book;
    }

  
    localStorage.setItem('books', JSON.stringify(booksList));

   
   window.location.href = '../pages/allBooks.html';
});



