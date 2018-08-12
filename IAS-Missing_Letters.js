/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

console.clear();
function fearNotLetter(str) {
/*Loop runs until second to last character (str.length-1). If a result hasn't been returned before i hits this value, then undefined is returned. Otherwise, using ASCII codes, the loop checks to ensure the actual ASCII code of the next character in the string is equal to what the expected ASCII code is (current ASCII incremented by one). Once this condition is not met, the function returns the expectedNextCharCode converted to a string using the "fromCharCode" method of JavaScript's String object.*/

  for (let i = 0; i < str.length - 1; i++) {
    let currentCharCode = str[i].charCodeAt(0);
    let actualNextCharCode = str[i + 1].charCodeAt(0);
    let expectedNextCharCode = str[i].charCodeAt(0) + 1;
    if (currentCharCode != actualNextCharCode - 1) {
      return String.fromCharCode(expectedNextCharCode);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));

/*
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/
