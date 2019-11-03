// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Book one',
        author: 'John Doe',
        isbn: '3434434'
      },
      {
        title: 'Book Two',
        author: 'Jane Doe',
        isbn: '45545'
      }
    ];
    const books = StoredBooks;

    books.forEach((book)) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm
    delete">X</a></td>
    `;

    list.appendChild(row)
  }
}

// store class: handles storage

// event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// event: add book
document.querySelector('#book-form').addEventListener('submit', (e)
=> {
// prevent actual submit
e.preventDefault();

  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // instatiate book
  const book = new Book(title, autor, isbn);

  console.log(book)
});
// event: remove book
