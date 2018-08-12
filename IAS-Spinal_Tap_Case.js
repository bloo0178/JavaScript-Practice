//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

console.clear();
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

// test here
console.log(spinalCase("This Is Spinal Tap")); //should return "this-is-spinal-tap"
console.log(spinalCase("thisIsSpinalTap")); //should return "this-is-spinal-tap"
console.log(spinalCase("The_Andy_Griffith_Show")); //should return "the-andy-griffith-show"
console.log(spinalCase("Teletubbies say Eh-oh")); //should return "teletubbies-say-eh-oh"
console.log(spinalCase("AllThe-small Things")); //should return "all-the-small-things"

/*
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/
