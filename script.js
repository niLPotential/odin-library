const libraryArr = [];

const testBook = new Book("Title", "Author", 99, false);
addBookToLibrary(testBook);

const testBtn = document.querySelector("#testBtn");
testBtn.onclick = displayLibrary;

const library = document.querySelector("#library");
const newBookBtn = document.querySelector("#newBookBtn");
const addBookDialog = document.querySelector("#addBookDialog");
const addBookBtn = addBookDialog.querySelector("#addBookBtn");

newBookBtn.onclick = () => addBookDialog.showModal();

addBookDialog.onclose = (e) => {
  console.log(addBookDialog.returnValue);
};

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
  libraryArr.push(book);
}

function displayLibrary() {
  for (const book of libraryArr) {
    library.appendChild(addBookAsElement(book));
  }
}

function addBookAsElement(book) {
  const div = document.createElement("div");
  div.appendChild(createDivWithText(book.title));
  div.appendChild(createDivWithText(book.author));
  div.appendChild(createDivWithText(book.pages));
  div.appendChild(createDivWithText(book.read));
  return div;
}

function createDivWithText(str) {
  const div = document.createElement("div");
  div.innerText = str;
  return div;
}
