console.clear();

function palindrome(str) {
  let arr = str.replace(/[\W_]/gi, "").toLowerCase().split("");
  let revArr = []; 
  var result = true;

  arr.forEach((x) => {
    revArr.unshift(x);
  })
  console.log(arr);
  console.log(revArr);

  arr.forEach((x) => {
    if (x != revArr[arr.indexOf(x)]) {
      result = false;
    }});

  return result;
}

console.log(palindrome("almostomla"));
