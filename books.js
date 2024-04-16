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

const booksList = [
    book1,
    book2
]