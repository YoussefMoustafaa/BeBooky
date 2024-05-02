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

let activeUser = JSON.parse(localStorage.getItem('activeUser'))


export function logOut() {
    localStorage.removeItem('activeUser')
    window.location.href = '../index.html'
}


export function renderNavBar() {
    if (!activeUser) {
        return unSignedNavBar
    } else if (activeUser.isAdmin) {
        return AdminNavBar
    } else {
        return UserNavBar
    }
}
