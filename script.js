let myLibrary = [];

function Book(title, author, page) {
    this.title = title,
    this.author = author,
    this.page = page
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

let book1 = new Book("a","b","31");
let book2 = new Book("g","h","42")
addBookToLibrary(book1)
addBookToLibrary(book2)


function displayBook(){
    for (i of myLibrary) {
        let book = document.createElement("div");
        let bookTitle = document.createElement("h2");
        let bookAuthor = document.createElement("h3");
        let bookPage = document.createElement("h3");
        book.setAttribute("class", "book");
        bookTitle.setAttribute("class", "bookTitle");
        bookAuthor.setAttribute("class", "bookAuthor");
        bookPage.setAttribute("class", "bookPage")
        bookTitle.textContent = (`Title: ${i.title}`);
        bookAuthor.textContent = `Author: ${i.author}`;
        bookPage.textContent = `Pages: ${i.page}`;
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookPage);
        let bookshelf = document.getElementById("bookshelf");
        bookshelf.appendChild(book);
    }
}

displayBook(book1);

