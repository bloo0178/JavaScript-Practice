console.clear();

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {

  let newStr = str;
  let regex1 = /\&(?=\s)/g;
  let regex2 = /\</g;
  let regex3 = /\>/g;
  let regex4 = /\"/g;
  let regex5 = /\'/g;


  newStr = newStr.replace(regex1, "&amp;");
  newStr = newStr.replace(regex2, "&lt;");
  newStr = newStr.replace(regex3, "&gt;");
  newStr = newStr.replace(regex4, "&quot;");
  newStr = newStr.replace(regex5, "&apos;");
  return newStr;
}

console.log(convertHTML("Dolce & Gabbana"));

/*
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Schindler's List") should return Schindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.
*/
