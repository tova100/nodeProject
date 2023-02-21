const user = require('./Users');
const book =require('./Book');
console.log(process.argv);
const book1 = process.argv[2]
const user1 = process.argv[3]
user.printUser(user1);
user.borrowedUser(user1);
book.borrowedBook(book1);
book.printBook(book1);