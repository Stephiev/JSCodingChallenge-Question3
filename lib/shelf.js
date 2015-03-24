var Book = require( "./book.js" );

// Shelf constructor function
module.exports = function Shelf(genre) {
  this.genre = genre;
  this.books = [];
};

// Will determine if a book already exists.
module.exports.prototype.doesExist = function(book) {
  for (i = 0; i < this.books.length; i++) {
    if ( book === this.books[i].title) {
      return i;
    }
  }
};

// If a book exists, it will be checked out.
// Otherwise the user will be informed it is currently
// checked out.
module.exports.prototype.removeBook = function(title) {
  if (this.doesExist(title) !== undefined) {
    this.books.splice(this.doesExist(title), 1);
    console.log("\"" + title + "\" was checked out from the " + this.genre + " shelf.\n");
  } else {
    console.log("Sorry, \"" + title + "\" is checked out. Please choose a book that is present on a shelf.\n");
  }
};

// The entered book will be added to the shelf that called this
// method even if it already exists (since libraries have duplicates)
module.exports.prototype.addBook = function(author, title) {
    this.books.push(new Book(author, title));
    console.log("\"" + title + "\" was returned to the " + this.genre + " shelf.\n");
};
