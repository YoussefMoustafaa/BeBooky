let book = JSON.parse(sessionStorage.getItem('selectedBook'))

console.log(book);

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
<button>Borrow</button>`    

const bookDetailsSection = document.getElementById('right')

if (bookDetailsSection)
    bookDetailsSection.innerHTML = bookHtml

const bookDetialsImg = document.getElementById('imgFrame')

if (bookDetialsImg)
    bookDetialsImg.innerHTML = `<img id = "book-details-img" src="${book.bookCover}" alt="${book.name} book">`
