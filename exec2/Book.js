console.log("hello book");
class Book{
    bookId="";
    name="";
    king="";
    borrowed=0;
    constructor (bookId,name,king,borrowed){
       this.bookId = bookId;
       this.name=name;
       this.king=king;
       this.borrowed=borrowed;

    }
}
const arreyBook = [new Book("147",  "sss",  "resh",false ),
 new Book("112",  "yyy",  "metach",  true )];
function printBook() {

    for (const item of arreyBook) {
        for (const key in item) {
            console.log(key);

        }
    }
}
    function borrowedBook(index) {
        if (index > arreyBook.length)
        throw new Error("index not iiligal")
            console.log(arreyBook[index]);
    }
module.exports={printBook,borrowedBook}