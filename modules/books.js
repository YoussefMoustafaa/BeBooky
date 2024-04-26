export class Book {

    constructor(id, name, author, category, numberOfPages,
        bookCover, description, rating, isBorrowed) {
            this.id = id;
            this.name = name;
            this.author = author;
            this.category = category;
            this.numberOfPages = numberOfPages;
            this.bookCover = bookCover;
            this.description = description;
            this.rating = rating;
            this.isBorrowed = isBorrowed;
        }
    
}


let book1Img = '../images/The Alchemist by Paulo Coelho - BookBub.jpg'
let book1Des = `Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.
Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams.`

let book2Img = '../images/the fault in our stars.jpg'
let book2Des = `Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.
Insightful, bold, irreverent, and raw, The Fault in Our Stars is award-winning author John Green's most ambitious and heartbreaking work yet, brilliantly exploring the funny, thrilling, and tragic business of being alive and in love.`

let book3Img = '../images/The Power of Habit.jpg'
let book3Des = `A young woman walks into a laboratory. Over the past two years, she has transformed almost every aspect of her life. She has quit smoking, run a marathon, and been promoted at work. The patterns inside her brain, neurologists discover, have fundamentally changed.
Marketers at Procter & Gamble study videos of people making their beds. They are desperately trying to figure out how to sell a new product called Febreze, on track to be one of the biggest flops in company history. Suddenly, one of them detects a nearly imperceptible pattern—and with a slight shift in advertising, Febreze goes on to earn a billion dollars a year.
An untested CEO takes over one of the largest companies in America. His first order of business is attacking a single pattern among his employees—how they approach worker safety—and soon the firm, Alcoa, becomes the top performer in the Dow Jones.
What do all these people have in common? They achieved success by focusing on the patterns that shape every aspect of our lives.
They succeeded by transforming habits.`


let book1 = new Book(
    1, 
    "The Alchemist", 
    "Paulo Coelho", 
    ['Novel', 'Drama', 'Quest', 'Fantasy', 'Adventure'], 
    330,
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
    420,
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
    230,
    book3Img,
    book3Des,
    4.7,
    false
)
let book11 = new Book(
    12,
    "The Guns of August",
    "Barbara W. Tuchman",
    ["History"],
    300,
    "../images/The Guns Of August.jpg",
    book3Des,
    4.7,
    false
)

let book21 = new Book(
    600,
    "A World Undone",
    "G. J. Meyer",
    ["History"],
    300,
    "../images/A World Undone.jpg",
    book2Des,
    4.4,
    false
)

let bookk = new Book(
    12,
    'ok',
    'ds',
    [1],
    23,
    'dsff',
    'sdfh',
    2.3,
    false
)

let book31 = new Book(
    120,
    "Batman: The Killing Joke",
    "Alan Moore",
    ["Comics"],
    300,
    "../images/Batman The Killing Joke.jpg",
    book1Des,
    4.8,
    false
)

let book4 = new Book(
    111,
    "Picture this",
    "Molly Bang",
    ["Art"],
    200,
    "../images/Picture this.jpg",
    book3Des,
    4.2,
    false
)

export let booksList = [
    book1,
    book2,
    book3,
    book4,
    book11,
    book21,
    book31
]