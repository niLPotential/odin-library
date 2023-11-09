const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "already read" : "not read yet"
    }`;
  };
}

function addBookToLibrary(book) {
  library.push(book);
}

function displayBooks() {
  for (const book of library) {
    console.log(book.info());
  }
}
