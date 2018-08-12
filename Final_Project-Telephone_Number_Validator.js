console.clear();

function telephoneCheck(str) {
  // Good luck!
  let parenTest = /\(\d{3}\)/g; //lookbehind not working in all browsers
  let testRegEx = /^(1*\s*\(*\d{3}\)*\s*\-*)\d{3}\-*\s*\d{4}$/g;
  var result;

  if (str.includes("(") || str.includes(")")) {
    if (parenTest.test(str)) {
      result = testRegEx.test(str);
    } else {
      result = false;
    }
  } else {
    result = testRegEx.test(str);
  }
  return result;
}

console.log(telephoneCheck("555-555-5555"));
