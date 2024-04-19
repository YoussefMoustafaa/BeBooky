class User {
    constructor(userID, username, password, isAdmin) {
        this.userID = userID;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}

let user1 = new User(
    1,
    "mestive",
    "admin123",
    true
)

let user2 = new User(
    2,
    'moro',
    'moro123',
    false
)

let user3 = new User(
    3,
    'mazen',
    'mazen123',
    true
)

export const usersList = [
    user1,
    user2,
    user3
]