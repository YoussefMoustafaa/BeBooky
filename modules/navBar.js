const unSignedNavBar = `<nav>
<a href="../index.html" id="header-title">BeBooky</a>
<ul id="menu-links">
    <li><a href="../index.html">Home</a></li>
    <li><a href="../userPages/userHomePage.html">User</a></li>
    <li><a href="../adminPages/adminHomePage.html">Admin</a></li>
</ul>
<ul id="register-btns">
    <li><a href="../pages/UserLogin.html" id="login-btn">Log in</a></li>
    <li><a href="../pages/SignUp.html" id="get-started-btn">Get Started</a></li>
</ul>
</nav>`

const UserNavBar = `<nav class="bg-nav-bar">
<a href="../userPages/userHomePage.html" id="header-title">BeBooky</a>
<ul id="menu-links">
    <li><a href="../userPages/userHomePage.html">Home</a></li>
    <li><a href="../pages/allBooks.html">All Books</a></li>
    <li><a href="../userPages/userBorrowedBooks.html">Borrowed Books</a></li>
</ul>
<ul id="register-btns">
    <li><a href="pages/SignUp.html" id="log-out-btn">Log out</a></li>
</ul>
</nav>`

const AdminNavBar = `<nav>
<a href="../userPages/userHomePage.html" id="header-title">BeBooky</a>
<ul id="menu-links">
    <li><a href="../userPages/userHomePage.html">Home</a></li>
    <li><a href="../pages/allBooks.html">All Books</a></li>
    <li><a href="../adminPages/addBook.html">Add Book</a></li>
</ul>
<ul id="register-btns">
    <li><a href="pages/SignUp.html" id="log-out-btn">Log out</a></li>
</ul>
</nav>`


export function renderNavBar(user) {
    if (!user) {
        return unSignedNavBar
    } else if (user.isAdmin) {
        return AdminNavBar
    } else {
        return UserNavBar
    }
}