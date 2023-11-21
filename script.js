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

const libraryArr = [];

const testBook = new Book("Title", "Author", 99, false);
addBookToLibrary(testBook);

const testBtn = document.querySelector("#testBtn");
testBtn.onclick = displayLibrary;

const libraryElem = document.querySelector("#library");
const newBookBtn = document.querySelector("#newBookBtn");
const addBookDialog = document.querySelector("#addBookDialog");
const addBookForm = addBookDialog.querySelector("form");

const addBookBtn = addBookDialog.querySelector("#addBookBtn");

newBookBtn.onclick = () => addBookDialog.showModal();

addBookDialog.onclose = (e) => {
  if (addBookDialog.returnValue === "submit") {
    const data = new FormData(addBookForm);
    const newBook = newBookFromData(data);
    addBookToLibrary(newBook);
  }
  addBookForm.reset();
};

function newBookFromData(data) {
  const title = data.get("title");
  const author = data.get("author");
  const pages = data.get("pages");
  const read = data.get("read");

  return new Book(title, author, pages, read);
}

function addBookToLibrary(book) {
  libraryArr.push(book);
}

function displayLibrary() {
  libraryElem.innerHTML = "";
  for (const book of libraryArr) {
    libraryElem.appendChild(addBookAsElement(book));
  }
}

function addBookAsElement(book) {
  const li = document.createElement("li");
  li.appendChild(createDivWithText(book.title));
  li.appendChild(createDivWithText(book.author));
  li.appendChild(createDivWithText(book.pages));
  li.appendChild(createDivWithText(book.read));
  return li;
}

function createDivWithText(str) {
  const div = document.createElement("div");
  div.innerText = str;
  return div;
}
