var Shelf = require( "./shelf.js" );

// Library constructor function
module.exports = function Library(name) {
  this.name = name;
  this.shelves = [];
};

// This will determine if the shelf exists
module.exports.prototype.doesExist = function(shelf) {
 //Loop through shelves array and return index of shelf with same name
 for (i = 0; i < this.shelves.length; i++) {
    if ( shelf === this.shelves[i].genre) {
      return i;
    }
  }
};

// If the entered shelf does not currently exist, it is added
// to the library. Otherwise, the user is informed it already
// exists.
module.exports.prototype.addAShelf = function(shelf) {
  if (this.doesExist(shelf) === undefined) {
    this.shelves.push(new Shelf(shelf));
    console.log("The " + shelf + " shelf was added.\n");
  } else {
    console.log("The " + shelf + " shelf already exsists, please enter another one.\n");
  }
};

// If the entered shelf exists it is removed.
// Otherwise the user is informed that the shelf does not exist.
module.exports.prototype.removeAShelf =  function(shelf) {
  if (this.doesExist(shelf) !== undefined) {
    this.shelves.splice(this.doesExist(shelf), 1);
    console.log("The " + shelf + " shelf was removed.\n");
  } else {
    console.log("The " + shelf + " shelf does not exist. Please enter a shelf that currently exists in " + this.name + ".\n");
  }
};

// Break down of the library. States how many shelves and how many books
// per shelf there are. Should add a list of the books in each shelf.
module.exports.prototype.currentDescription = function() {
  if (this.shelves.length !== 0) {
    console.log("Here is a description of the library:\n");
    console.log("The number of shelves at " + this.name +  " is: " + this.shelves.length + "\n");
    for (i = 0; i < this.shelves.length; i++) {
      console.log("In the " + this.shelves[i].genre + " shelf there are " + this.shelves[i].books.length + " books.\n");
    }
  } else {
    console.log("Your library is empty.\n");
  }
};

