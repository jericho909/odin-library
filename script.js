const newBookButton = document.getElementById("newBookButton");
const bookFormContainer = document.getElementById("bookFormContainer");
const addBookButton = document.getElementById("addBookButton");
const form = document.getElementById("bookForm");
const removeBook = document.getElementById("bookRemoveButton");
const bookshelf = document.getElementById("bookshelf");

let myLibrary = [];

function Book(title, author, page) {
    this.title = title,
    this.author = author,
    this.page = page
}

function addBookToLibrary(book){
    myLibrary.push(book)
}



//let book1 = new Book("a","b","31");
//let book2 = new Book("g","h","42");
//let book3 = new Book("The Hobbit", "J.R.R. Tolkien", "250");
//addBookToLibrary(book1)
//addBookToLibrary(book2)
//addBookToLibrary(book3)


function displayBook(i){
    for (i of myLibrary) {
        let book = document.createElement("div");
        book.setAttribute("data-index", `${i}`);
        let bookTitle = document.createElement("h2");
        let bookAuthor = document.createElement("h3");
        let bookPage = document.createElement("h3");
        let removeBook = document.createElement("button");
        book.setAttribute("class", "book");
        bookTitle.setAttribute("class", "bookTitle");
        bookAuthor.setAttribute("class", "bookAuthor");
        bookPage.setAttribute("class", "bookPage");
        removeBook.setAttribute("class", "bookRemoveButton");
        removeBook.innerText = "X";
        bookTitle.textContent = (`Title: ${i.title}`);
        bookAuthor.textContent = `Author: ${i.author}`;
        bookPage.textContent = `Pages: ${i.page}`;
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookPage);
        book.appendChild(removeBook);
        bookshelf.appendChild(book);
        
        removeBook.addEventListener("click",() => {
            bookshelf.removeChild(book)
            myLibrary.splice(book, 1)
        })
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


