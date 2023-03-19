const users = require('./Users');
const books =require('./Book');
console.log(process.argv);
const book1 = process.argv[2]
const user1 = process.argv[3]
 //const y=user.printUser(user1);
function get(book1,user1){
   const user=users.borrowedUser(user1);
   const book=books.borrowedBook(book1)
console.log(user);
console.log(book);
if (user.k)

}
