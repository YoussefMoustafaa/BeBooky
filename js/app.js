// import { renderNavBar } from "../modules/navBar.js";

let Books = {
    data:[
        {
            BookName: "The Power of Habit",
            Author:"Charles Duhigg",
            category: "Other..",
            rate: "4.1",
            image: "../images/The Power of Habit.jpg",
        },
        {
            BookName: "Life of Pi",
            Author:"Yann Martel",
            category: "Fantasy",
            rate: "3.9",
            image: "../images/Life Of Pi.jpg",
        },
        {
            BookName: "The Fault in Our Stars",
            Author:"John Green",
            category: "Fiction",
            rate: "4.1",
            image: "../images/the fault in our stars.jpg",
        },
        {
            BookName: "The Alchemist",
            Author:"Paulo Coelho",
            category: "Adventure",
            rate: "3.9",
            image: "../images/The Alchemist by Paulo Coelho - BookBub.jpg",
        },
        {
            BookName: "Productivity is for robots",
            Author:"Corey McComb",
            category: "Other..",
            rate: "3.8",
            image: "../images/productivity-book.jpg",
        },
        {
            BookName: "The Guns of August",
            Author:"Barbara W. Tuchman",
            category: "History",
            rate: "4.2",
            image: "../images/The Guns Of August.jpg",
        },
        {
            BookName: "A World Undone",
            Author:" G. J. Meyer",
            category: "History",
            rate: "4.4",
            image: "../images/A World Undone.jpg",
        },
        {
            BookName: "Batman: The Killing Joke",
            Author:"Alan Moore",
            category: "Comics",
            rate: "4.4",
            image: "../images/Batman The Killing Joke.jpg",
        },
        {
            BookName: "Picture this",
            Author:"Molly Bang",
            category: "Art",
            rate: "4.2",
            image: "../images/Picture this.jpg",
        },
        {
            BookName: "The Wedding Date",
            Author:"Jasmine Guillory",
            category: "Romance",
            rate: "3.6",
            image: "../images/The Wedding Date.jpg",
        },
        {
          BookName: "A Tale of Two Cities",
          Author:"Charles Dickens",
          category: "History",
          rate: "3.9",
          image: "../images/A Tale of Two Cities.jpg",
        },
        {
          BookName: "Learning How to Learn",
          Author:"Barbara Oakley",
          category: "Science",
          rate: "4.4",
          image: "../images/Learning How to Learn.jpg",
        },
        {
          BookName: "Frankenstein",
          Author:"Mary Shelley",
          category: "Fiction",
          rate: "3.9",
          image: "../images/Frankenstein.jpg",
        },
        {
          BookName: "Girl With a Pearl Earring",
          Author:"Tracy Chevalier",
          category: "Art",
          rate: "3.9",
          image: "../images/Girl With a Pearl Earring.jpg",
        },
        {
          BookName: "Nineteen Eighty-Four [1984]",
          Author:"George Orwell",
          category: "Fiction",
          rate: "4.3",
          image: "../images/Nineteen Eighty-Four [1984].jpg",
        },
        {
          BookName: "V for Vendetta",
          Author:"Alan Moore",
          category: "Comics",
          rate: "4.3",
          image: "../images/V for Vendetta.jpg",
        },
        {
          BookName: "Code Dependent",
          Author:"Madhumita Murgia",
          category: "Science",
          rate: "4",
          image: "../images/Code Dependent.jpg",
        },
    ],
};
//             this.id = id;
//             this.name = name;
//             this.author = author;
//             this.category = category;
//             this.numberOfPages = numberOfPages;
//             this.bookCover = bookCover;
//             this.description = description;
//             this.rating = rating;
//             this.isBorrowed = isBorrowed;

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
<a href="../pages/index.html" id="header-title">BeBooky</a>
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
<a href="../pages/index.html" id="header-title">BeBooky</a>
<ul id="menu-links">
    <li><a href="../pages/index.html">Home</a></li>
    <li><a href="../pages/allBooks.html">All Books</a></li>
    <li><a href="../pages/addBook.html">Add Book</a></li>
</ul>
<ul id="register-btns">
    <li><a href="../pages/SignUp.html" id="log-out-btn">Log out</a></li>
</ul>
`

let navBar = document.getElementById('nav-bar')

let activeUser = JSON.parse(localStorage.getItem('activeUser'))

if (navBar) {
    if (!activeUser) {
        navBar.innerHTML= unSignedNavBar
    } else if (activeUser.isAdmin) {
        navBar.innerHTML= AdminNavBar
    } else {
        navBar.innerHTML= UserNavBar
    }
}

const booksList = document.getElementById('Books')
let storedBooks = JSON.parse(localStorage.getItem('books'))

  let booksHtml = storedBooks.map(book => {
    return `<div class="card ${book.category[0]}">
    <div class="image-container">
        <img src="${book.bookCover}" alt="${book.name}" id=${book.id}>
    </div>
    <div class="container">
      <h3 class="Book-name">${book.name}</h3>
      <h6 class="Autor-name">${book.author}</h6>
      <h2>
        <i class="star-icon">&#9733;</i>
        4.1
      </h2>
    </div>
  </div>`
  })
  booksList.innerHTML = booksHtml.join('')


if (booksList) {
  booksList.addEventListener('click', (event) => {
    if (event.target.id) {
      window.location.href = '../pages/bookDetails.html'
      console.log(event.target.id);
      let selectedBook = storedBooks.filter(book => {
          return book.id == event.target.id
      })[0]
      console.log(selectedBook);
      
      sessionStorage.setItem('selectedBook', JSON.stringify(selectedBook))
    }
  })
}

// for (let i of Books.data){


//     let card = document.createElement("div");
//     card.classList.add("card",i.category,"hide");


//     let imgcontainer = document.createElement("div");
//     imgcontainer.classList.add("image-container");


//     let image = document.createElement("img");
//     image.setAttribute("src",i.image);
//     imgcontainer.appendChild(image);
//     card.appendChild(imgcontainer);


//     let container = document.createElement("div");
//     container.classList.add("container");


//     let name=document.createElement("h3");
//     name.classList.add("Book-name");
//     name.innerText = i.BookName.toUpperCase();
//     container.appendChild(name);


//     let author=document.createElement("h6");
//     author.classList.add("Autor-name")
//     author.innerText = i.Author.toUpperCase();
//     container.appendChild(author);


//     let rating=document.createElement("h2");
//     rating.innerHTML = `<i class="star-icon">&#9733;</i> ${i.rate}`;
//     container.appendChild(rating);

    
//     card.appendChild(container);
//     document.getElementById("Books").appendChild(card);
// }

function filterBook(value){
    let buttons= document.querySelectorAll(".button-value")
    buttons.forEach((button) =>{
      if (value.toUpperCase() == button.innerText.toUpperCase()){
        button.classList.add("active");
      }
      else{
        button.classList.remove("active");
      }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
    
    if (value == "All Books") {
      element.classList.remove("hide");
    } else {      
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {        
        element.classList.add("hide");
      }
    }
  });
}

document.getElementById("search").addEventListener("click", () => {

  let searchInput = document.getElementById("search-input").value.toUpperCase();
  let elements = document.querySelectorAll(".Book-name") ;
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {

    if (element.innerText.includes(searchInput)) {
      cards[index].classList.remove("hide");
    }
     else {
      cards[index].classList.add("hide");
    }
    
  });
});

document.getElementById("searchauthor").addEventListener("click", () => {

  let searchInput = document.getElementById("Author-input").value.toUpperCase();
  let elements = document.querySelectorAll(".Autor-name") ;
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {

    if (element.innerText.includes(searchInput)) {
      cards[index].classList.remove("hide");
    }
    else {
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
    filterBook("All Books");
};