import { logOut, renderNavBar } from "../modules/navBar.js"
let activeUser = JSON.parse(localStorage.getItem('activeUser'))
let selectedBook = JSON.parse(sessionStorage.getItem('selectedBook'))

function borrowBook() {

    console.log(selectedBook)
    if(selectedBook.isBorrowed){
        alert("Book is already borrowed")
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
}

function returnBook() {
    activeUser.borrowedBooks = activeUser.borrowedBooks.filter(tBook => {
        return tBook.id != selectedBook.id
    })
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
    selectedBook.isBorrowed = false
    localStorage.setItem('selectedBook', JSON.stringify(selectedBook))
    let AllBooks = JSON.parse(localStorage.getItem("books"))

    AllBooks = AllBooks.filter((book) => {
        return book.id != selectedBook.id;
    })

    AllBooks.push(selectedBook);
    localStorage.setItem('books', JSON.stringify(AllBooks))
    alert("Book return to the Library successfully!")
}


function renderBookDetails() {

    if (selectedBook)
        selectedBook.description = selectedBook.description.replaceAll('\\n', '<br>')

    let bookHtml = `<div id = "bookName">${selectedBook.name}</div>
    <div id = "rat"><b>Book Rating :&nbsp;</b> ${selectedBook.rating} </div>
    <br>
    <hr>
    <div id = "det"> Book Details</div>
    <div id = "author"><b>Author Name &nbsp;</b><em>"${selectedBook.author}"</em></div>

    <div id = "pages"><b>Number of pages&nbsp;</b>${selectedBook.numberOfPages}</div>

    <div id = "cat"><b>Category &nbsp;</b>${selectedBook.category}</div>

    <div id = "desc"><div id = "bookLabel"><b>Book Description</b></div>"${selectedBook.description}"</div>
    <!-- <img id = "rightImg" src="../images/6888606_copy-removebg-preview.png" alt="right img"> -->
    <button id ="Borrow_button">Borrow</button>
    <button id="edit-book-btn">Edit Book</button>
    <button id="delete-book-btn">Delete Book</button>`    

    const bookDetailsSection = document.getElementById('right')

    if (bookDetailsSection)
        bookDetailsSection.innerHTML = bookHtml

    const bookDetialsImg = document.getElementById('imgFrame')

    if (bookDetialsImg)
        bookDetialsImg.innerHTML = `<img id = "book-details-img" src="${selectedBook.bookCover}" alt="${selectedBook.name} book">`
}

renderBookDetails()


// navigation bar render

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



const editBookBtn = document.getElementById('edit-book-btn')
const deleteBookBtn = document.getElementById('delete-book-btn')


// functionality of edit button for admin
if (editBookBtn) {
    editBookBtn.addEventListener('click', function () {
        sessionStorage.setItem('selectedBook', JSON.stringify(selectedBook))
    
        window.location.href = '../pages/editBook.html'
    })

}

function deleteBook() {
    var books = JSON.parse(localStorage.getItem('books'));
    books = books.filter(function (book){
        return book.id !== selectedBook.id;
    });
    localStorage.setItem('books', JSON.stringify(books));
    window.location.href = '../pages/allBooks.html'
}


// functionality for delete button for admin
if (deleteBookBtn) {
    deleteBookBtn.addEventListener('click', function () {
        sessionStorage.setItem('selectedBook', JSON.stringify(selectedBook))

        deleteBook()
    })
}


// we get borrow button to change its name from 'borrow' to 'borrowed' or 'return'
const Borrow_button = document.getElementById('Borrow_button');

// find if the book is borrowed by the current active user
let bookBorrowedByUser = activeUser.borrowedBooks.filter(tBook => {
    return tBook.id == selectedBook.id
})[0]


if (bookBorrowedByUser) {       // if the book is borrowed by the active user change the button to return
    Borrow_button.innerHTML = "Return"
} else if (selectedBook.isBorrowed) {       // if the book is borrowed by another user, disable the button and decrease its opacity
    Borrow_button.innerHTML = "Borrowed"
    Borrow_button.disabled = true
    Borrow_button.classList.add('borrowedBook')
}


if (Borrow_button) {
    
    Borrow_button.addEventListener('click', function () {

        sessionStorage.setItem('selectedBook', JSON.stringify(selectedBook))
        if (bookBorrowedByUser) {
            returnBook()
        } else {        // else if the book is not borrowed and available
            borrowBook()
        }
        window.location.href = '../pages/userBorrowedBooks.html'
    })
}

// check if the active user is the admin, to remove the borrow button and display the 'edit' and 'delete' buttons
function check_admin() {
    console.log(activeUser);
    if(!activeUser){
        Borrow_button.style.display = "none";
        editBookBtn.style.display = "none";
        deleteBookBtn.style.display = "none"; 
    }
        else if (activeUser.isAdmin){
            Borrow_button.style.display = "none";
        }
        else{
            editBookBtn.style.display = "none";
            deleteBookBtn.style.display = "none";  
        }
}

check_admin()

