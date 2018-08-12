console.clear();

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {

  let strArr = str.split(" "); //Convert str to array for check.
  let newAfter = after; //newAfter to avoid mutating input string (after)

//Checks to see if first character in before variable is capitalized. If so, modifies first character in newAfter to upper case.
  if (before[0] === before[0].toUpperCase()) {
    newAfter = newAfter.charAt(0).toUpperCase() + newAfter.slice(1);
  }

//Finds the position of the before string in the array, and then uses splice to replace it with newAfter.
  for (let i=0; i<strArr.length; i++) {
    if (strArr[i] === before) {
      strArr.splice(i, 1, newAfter);
    }
  }
  return strArr.join(" ");
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

/*
myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
*/

