// Bringing in the necessary files for modeling a library
var Library = require("./lib/library.js");
var Shelf = require("./lib/shelf.js");
var Book = require("./lib/book.js");

// Testing my code
// Makine a new instance of Library
var myLibrary = new Library("Snohomish");

// Checking out the current status of the library
// Returns that it is empty. (Passes)
myLibrary.currentDescription()

// Adding shelves. (Passes)
myLibrary.addAShelf("Fiction");
myLibrary.addAShelf("Non-Fiction");

// Adding an already existing shelf.
// States that it already exists. (Passes)
myLibrary.addAShelf("Non-Fiction");

// Attempting to remove a shelf that does not exist.
// States that it does not exist. (Passes)
myLibrary.removeAShelf("Teen");

// Adding books to the Fiction shelf. (Passes)
myLibrary.shelves[0].addBook("Harper Lee", "To Kill a Mockingbird");
myLibrary.shelves[0].addBook("Madeleine L'Engle", "A Wrinkle in Time");

// Attempting to add a book that already exists.
// Adds it because duplicates can exist at a library.
// (Passes)
myLibrary.shelves[0].addBook("Madeleine L'Engle", "A Wrinkle in Time");

// Tries to remove a book that does not exist.
// Responds with it does not exist. (Passes)
myLibrary.shelves[0].removeBook("Money");

// Adding some more books, but to the Non-Fiction shelf.
// Then asks for a current description of the library. (Passes)
myLibrary.shelves[1].addBook("Erik Larson", "The Devil in the White City");
myLibrary.shelves[1].addBook("Elie Wiesel", "Night");
myLibrary.currentDescription();

// Removing/checking out an exising book. (Passes)
myLibrary.shelves[0].removeBook("A Wrinkle in Time");

// Removing a shelf then displaying the current status
// (Passes)
myLibrary.removeAShelf("Fiction");
myLibrary.currentDescription();

