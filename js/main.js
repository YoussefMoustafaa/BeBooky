// let book {
//     id,
//     title,
//     author,
//     category,
//     numberOfPages,
//     bookCover,
//     description,
//     rating,
//     isBorrowed
// }

class Book {

    constructor(id, name, author, category,
        bookCover, description, rating, isBorrowed) {
            this.id = id;
            this.name = name;
            this.author = author;
            this.category = category;
            this.bookCover = bookCover;
            this.description = description;
            this.rating = rating;
            this.isBorrowed = isBorrowed;
        }
    
    
}

let book1Img = './images/The Alchemist by Paulo Coelho - BookBub.jpg'
let book1Des = `Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.
Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams.`

let book2Img = './images/the fault in our stars.jpg'
let book2Des = `Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.
Insightful, bold, irreverent, and raw, The Fault in Our Stars is award-winning author John Green's most ambitious and heartbreaking work yet, brilliantly exploring the funny, thrilling, and tragic business of being alive and in love.`

let book3Img = 'images/The Power of Habit.jpg'
let book3Des = `A young woman walks into a laboratory. Over the past two years, she has transformed almost every aspect of her life. She has quit smoking, run a marathon, and been promoted at work. The patterns inside her brain, neurologists discover, have fundamentally changed.
Marketers at Procter & Gamble study videos of people making their beds. They are desperately trying to figure out how to sell a new product called Febreze, on track to be one of the biggest flops in company history. Suddenly, one of them detects a nearly imperceptible pattern—and with a slight shift in advertising, Febreze goes on to earn a billion dollars a year.
An untested CEO takes over one of the largest companies in America. His first order of business is attacking a single pattern among his employees—how they approach worker safety—and soon the firm, Alcoa, becomes the top performer in the Dow Jones.
What do all these people have in common? They achieved success by focusing on the patterns that shape every aspect of our lives.
They succeeded by transforming habits.
In The Power of Habit, award-winning New York Times business reporter Charles Duhigg takes us to the thrilling edge of scientific discoveries that explain why habits exist and how they can be changed. With penetrating intelligence and an ability to distill vast amounts of information into engrossing narratives, Duhigg brings to life a whole new understanding of human nature and its potential for transformation.
Along the way we learn why some people and companies struggle to change, despite years of trying, while others seem to remake themselves overnight. We visit laboratories where neuroscientists explore how habits work and where, exactly, they reside in our brains. We discover how the right habits were crucial to the success of Olympic swimmer Michael Phelps, Starbucks CEO Howard Schultz, and civil-rights hero Martin Luther King, Jr. We go inside Procter & Gamble, Target superstores, Rick Warren’s Saddleback Church, NFL locker rooms, and the nation’s largest hospitals and see how implementing so-called keystone habits can earn billions and mean the difference between failure and success, life and death.
At its core, The Power of Habit contains an exhilarating argument: The key to exercising regularly, losing weight, raising exceptional children, becoming more productive, building revolutionary companies and social movements, and achieving success is understanding how habits work.
Habits are not destiny. As Charles Duhigg shows, by harnessing this new science, we can transform our businesses, our communities, and our lives.`


let book1 = new Book(
    1, 
    "The Alchemist", 
    "Paulo Coelho", 
    ['Novel', 'Drama', 'Quest', 'Fantasy', 'Adventure'], 
    book1Img, 
    book1Des, 
    4.7, 
    false
)
let book2 = new Book(
    2,
    'The Fault in Our Stars',
    'John Green',
    ['Novel', 'Teen', 'Romance', 'Love', 'Fiction'],
    book2Img,
    book2Des,
    4.8,
    false
)
let book3 = new Book(
    3,
    'The Power of Habit',
    'Charles Duhigg',
    [
        'Nonfiction',
        'Self Help',
        'Psychology',
        'Personal Development',
        'Business',
        'Productivity',
        'Science',
        'Leadership',
        'Sociology'
    ],
    book3Img,
    book3Des,
    4.7,
    true
)

var booksList = [
    book1,
    book2,
    book3
]



function getBooks() {
    let booksHtml = booksList.map(book => {
        return `<div class="book-item">
        <img src="${book.bookCover}" alt="${book.name} book">
        <h3>${book.name}</h3>
        <p>${book.author}</p>
        </div>`
    }).join('')
    
    return booksHtml
}


function renderBooks() {
    const bookListSection = document.getElementById('book-list')
    bookListSection.innerHTML = getBooks()
}

renderBooks()


// console.log(booksHtml);


// localStorage.setItem('books', JSON.stringify(booksList))

// let book3 = new Book(
//     1,
//     'aha'
// )

// function addBook(book) {
//     booksList.push(book)
//     localStorage.setItem('books', JSON.stringify(booksList))
// }

// addBook(book3)

// console.log(JSON.parse(localStorage.getItem('books')));

// let storedBooks = JSON.parse(localStorage.getItem('books'))


