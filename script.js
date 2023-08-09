const newBookButton = document.getElementById("newBookButton");
const bookFormContainer = document.getElementById("bookFormContainer");
const addBookButton = document.getElementById("addBookButton");
const form = document.getElementById("bookForm");
const removeBook = document.getElementById("bookRemoveButton");
const bookshelf = document.getElementById("bookshelf");
const readButton = document.getElementById("readButton");
let bookStatus;

let myLibrary = [];

function Book(title, author, page) {
    this.title = title,
    this.author = author,
    this.page = page
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

Book.prototype.isRead = function(){
    if(bookStatus === "read") {
        return true
    } else {
        return false
    }
};

function displayBook(i){
    for (i of myLibrary) {
        let book = document.createElement("div");
        book.setAttribute("data-index", `${i}`);
        let bookTitle = document.createElement("h2");
        let bookAuthor = document.createElement("h3");
        let bookPage = document.createElement("h3");
        let removeBook = document.createElement("button");
        let readButton = document.createElement("button");
        book.setAttribute("class", "book");
        bookTitle.setAttribute("class", "bookTitle");
        bookAuthor.setAttribute("class", "bookAuthor");
        bookPage.setAttribute("class", "bookPage");
        removeBook.setAttribute("class", "bookRemoveButton");
        readButton.setAttribute("class", "readButton");
        readButton.setAttribute("id", "readButton");
        readButton.innerText = "I read it."
        removeBook.innerText = "X";
        bookTitle.textContent = (`Title: ${i.title}`);
        bookAuthor.textContent = `Author: ${i.author}`;
        bookPage.textContent = `Pages: ${i.page}`;
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookPage);
        book.appendChild(removeBook);
        book.appendChild(readButton);
        bookshelf.appendChild(book);
        bookStatus = "read";
        removeBook.addEventListener("click",() => {
            bookshelf.removeChild(book)
            //myLibrary.splice(book, 1) -> I don't know if this does anything lmao
        })

        readButton.addEventListener("click", () => {
            if (bookStatus === "read"){
            readButton.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
            readButton.innerText = "I did not read it.";
            bookStatus = "not-read";
            } else {
            readButton.style.backgroundColor = "rgba(0, 128, 0, 0.4)";
            readButton.innerText = "I read it.";
            bookStatus = "read";
            }
            
        });
    }
}

function addBook() {
    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
    const bookPage = document.getElementById("pages").value;

    let newBook = new Book(bookTitle, bookAuthor, bookPage);

    myLibrary.push(newBook)
    displayBook()
    bookFormContainer.style.display = "none"
    form.reset();
    myLibrary.pop(0)
}


newBookButton.addEventListener("click", () => {
    bookFormContainer.style.display = "block"; 
});

form.addEventListener("submit", (e, i) => {
    e.preventDefault();
    addBook(i);
  });


