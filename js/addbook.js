import { Book } from "../modules/books.js";
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
        const category = document.getElementById("category").value.split(',');
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

