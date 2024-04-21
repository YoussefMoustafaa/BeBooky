import { Book } from "../modules/books.js";
import { renderNavBar } from "../modules/navBar.js"
import { usersList } from "../modules/users.js";

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

const storedBooksArr = JSON.parse(localStorage.getItem('books')) || []


document.getElementById("upImg").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imgData = e.target.result;

        document.getElementById("img").setAttribute("src", imgData);


        sessionStorage.setItem("uploadedImageData", imgData);
    };

    reader.readAsDataURL(file);
});



const addBookForm = document.getElementById('addBookForm');

if(addBookForm) {
    addBookForm.addEventListener('submit', function(event) {
        console.log("Form submitted");
        event.preventDefault();
        
        const bookID= document.getElementById("bookID").value;
        const isBookIDExists = storedBooksArr .some(book => book.id == bookID);
        console.log(isBookIDExists)
        console.log("the book ID I just entered", bookID)
        if (isBookIDExists) {
            alert("Book ID already exists. Please enter a new ID.");
        } else {
        
        const bookName = document.getElementById("bookName").value;
        const author = document.getElementById("author").value;
const category = document.getElementById("category").value;
const no_of_pages = document.getElementById("no_of_pages").value;
const rating = document.getElementById("rating").value;
const description = document.getElementById("description").value;
const bookCover = sessionStorage.getItem("uploadedImageData"); 



 
 //implment validation 
 const newBook = new Book(
    bookID,
    bookName,
    author,
    category,
    no_of_pages,
    bookCover,
    description,
    rating,
    false 
 );

 storedBooksArr.push(newBook);
localStorage.setItem('books', JSON.stringify(storedBooksArr))
 console.log("bookID:", bookID);
 console.log("storedBooksArr  :", storedBooksArr);
 // Check if the book was added successfully
if (storedBooksArr.some(book => book.id === newBook.id)) {
    // Inform the user that the book was added successfully
    alert("Book added successfully!");
} else {
    // Inform the user that there was an error adding the book
    alert("Error: Unable to add the book. Please try again.");
}

// Redirect to the allBooks.html page after a slight delay
setTimeout(function() {
    window.location.href = '../pages/allBooks.html';
}, 1000); 

}

});
}

