console.clear();


/*

Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first)
setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it
 has to be a string.

These methods must be the only available means of interacting with the object.

*/


var Person = function(firstAndLast) {

  let fullName = firstAndLast;

  this.getFullName = function() {
    return fullName;
  };

  this.getFirstName = function() {
    let first = fullName.split(" ");
    return first[0];
  }

  this.getLastName = function() {
    let last = fullName.split(" ");
    return last[1];
  }

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  }

  this.setFullName = function(name) {
    fullName = name;
  }

  return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());


/*

TEST CASES

Object.keys(bob).length should return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return "Bob".
bob.getLastName() should return "Ross".
bob.getFullName() should return "Bob Ross".
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").

*/
