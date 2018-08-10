console.clear();

/*

Create a function that sums two arguments together. If only one argument is
provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should
return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/

function addTogether() {

  /*Check to see if all arguments are of type number*/
  for (let i=0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      return undefined;
    }
  }

  /*Since we've already checked for type number, if the length of arguments
  is equal to 2, then we return the sum of the values at position 0 and 1.*/
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  }
  /*If the function only has one argument, we return a new function expecting
  one argument that will sum that argument up along with the argument passed
  in the original function. If the argument passed in the returned function
  is not a number, we return undefined.*/ 
  else if (arguments.length = 1) {
    let x = arguments[0];
    return function(y) {
      if (typeof y !== 'number') {
        return undefined;
      } else {
        return x + y;
      }
    }
  }
}


console.log(addTogether(2,3));
console.log(addTogether(2,"3"));
console.log(addTogether(2)(3));


/*
Expected results:

addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.


*/
