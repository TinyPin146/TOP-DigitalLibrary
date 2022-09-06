const addBookBtn = document.querySelector('add-book-btn');
let myLibrary = [];

function Book(title, author, numOfPages, isItRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isItRead = isItRead;
}

function addBookToLibrary(title, author, numOfPages, isItRead) {
    const newBook = new Book(title, author, numOfPages, isItRead)
    myLibrary.push(newBook);
}

function handleAddBookBtn() {
  console.log('test')
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkein', 345, true);
addBookToLibrary('The Fellowship of the Ring', 'J.R.R. Tolkein', 564, true);

console.log(myLibrary);
addBookBtn.addEventListener('click', handleAddBookBtn);