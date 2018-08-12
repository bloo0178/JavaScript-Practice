console.clear();

/*

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/

function translatePigLatin(str) {
  let regex1 = /^[a|e|i|o|u]/i; //returns nothing on "glove"; tests beginning for vowel
  let regex2 = /([a|e|i|o|u].*)/ig; //returns "ove" on "glove"
  let regex3 = /(^[^a|e|i|o|u]*)/ig; //returns "gl" on "glove"
  let regex4 = /^[^a|e|i|o|u]+$/i; //tests for words without vowels
  let newStr = "";
  
  if(regex1.test(str)) {
    newStr = str += "way";
  } else if (regex4.test(str)) {
    newStr = str += "ay";
  }
  else {
    let beginningOfNewString = str.match(regex2);
    let endOfNewString = str.match(regex3) + "ay";
    newStr = beginningOfNewString + endOfNewString; 
  }
  return newStr; 
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("california"));
//console.log("TESTETESTSETS");

// 1 - check for vowel at beginning
// 2 - If vowel, add "way" to end of new string
// 3 - If word starts with a consonant cluster, grab consonants up to first vowel and move them to the end of the word followed by "way" 
/*
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the end of the word.
Should handle words without vowels.
*/
