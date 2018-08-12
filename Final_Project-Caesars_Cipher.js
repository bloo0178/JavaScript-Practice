console.clear();

function rot13(str) { // LBH QVQ VG!

    let encodedArr = str.split("");
    let decodedArr = [];

    //create an array of string characters that are shifted or passed through
    encodedArr.forEach((x) => {
        if (x.charCodeAt(0) > 64 && x.charCodeAt(0) < 78) {
            decodedArr.push(String.fromCharCode(x.charCodeAt(0) + 13));
        } else if (x.charCodeAt(0) > 77 && x.charCodeAt(0) < 91) {
            decodedArr.push(String.fromCharCode(x.charCodeAt(0) - 13));
        } else {
            decodedArr.push(x);
        }
    });

    //turn array back into string
    let decodedString = decodedArr.join("");

    //let str2 = ' '.charCodeAt(0);
    //let str3 = String.fromCharCode(65);

    return decodedString;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));


/* 

str.charCodeAt(index);
String.fromCharCode(ASCII_code);

https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript

A=65
M=77
N=78
Z=90

*/
