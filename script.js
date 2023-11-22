class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const libraryArr = [];

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
    displayBookToLibrary(newBook);
    // console.log(libraryArr);
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

function displayBookToLibrary(book) {
  libraryElem.appendChild(addBookAsElement(book));
}

function deleteBook(e) {
  const book = e.target.parentElement;
  const index = Array.prototype.indexOf.call(libraryElem.children, book);

  book.remove();
  libraryArr.splice(index, 1);
  // console.log(libraryArr);
}

function changeReadStatus(e) {
  const book = e.target.parentElement;
  const index = Array.prototype.indexOf.call(libraryElem.children, book);

  libraryArr[index].read = e.target.checked;
  console.log(libraryArr);
}

function addBookAsElement(book) {
  const li = document.createElement("li");
  li.appendChild(createDivWithText(book.title));
  li.appendChild(createDivWithText(book.author));
  li.appendChild(createDivWithText(book.pages));

  const readInput = document.createElement("input");
  readInput.type = "checkbox";
  readInput.checked = book.read === "true";
  readInput.onchange = changeReadStatus;
  li.appendChild(readInput);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.onclick = deleteBook;
  li.appendChild(deleteBtn);

  return li;
}

function createDivWithText(str) {
  const div = document.createElement("div");
  div.innerText = str;
  return div;
}
