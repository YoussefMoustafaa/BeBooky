


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



