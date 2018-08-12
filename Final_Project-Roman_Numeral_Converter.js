console.clear();

function convertToRoman(num) {
    let arr = num.toString().split("").reverse(); //will have to reverse this for my if statement to work
    let romanArr = [];
   // console.log(arr.length);
   // console.log(arr);
    for (let i = arr.length - 1; i > -1; i--) {
        if (i == 0) {
            switch (parseInt(arr[i])) {
                case 1:
                    romanArr.push("I");
                    break;
                case 2:
                    romanArr.push("II");
                    break;
                case 3:
                    romanArr.push("III");
                    break;
                case 4:
                    romanArr.push("IV");
                    break;
                case 5:
                    romanArr.push("V");
                    break;
                case 6:
                    romanArr.push("VI");
                    break;
                case 7:
                    romanArr.push("VII");
                    break;
                case 8:
                    romanArr.push("VIII");
                    break;
                case 9:
                    romanArr.push("IX");
                    break;
                default:
                    break;
            }
        } else if (i == 1) { //do I need to add in a case for 0???
            switch (parseInt(arr[i])) {
                case 1:
                    romanArr.push("X");
                    break;
                case 2:
                    romanArr.push("XX");
                    break;
                case 3:
                    romanArr.push("XXX");
                    break;
                case 4:
                    romanArr.push("XL");
                    break;
                case 5:
                    romanArr.push("L");
                    break;
                case 6:
                    romanArr.push("LX");
                    break;
                case 7:
                    romanArr.push("LXX");
                    break;
                case 8:
                    romanArr.push("LXXX");
                    break;
                case 9:
                    romanArr.push("XC");
                    break;
                default: 
                    break;
            }
        } else if (i == 2) {
            switch (parseInt(arr[i])) {
                case 0: 
                    break;
                case 1:
                    romanArr.push("C");
                    break;
                case 2:
                    romanArr.push("CC");
                    break;
                case 3:
                    romanArr.push("CCC");
                    break;
                case 4:
                    romanArr.push("CD");
                    break;
                case 5:
                    romanArr.push("D");
                    break;
                case 6:
                    romanArr.push("DC");
                    break;
                case 7:
                    romanArr.push("DCC");
                    break;
                case 8:
                    romanArr.push("DCCC");
                    break;
                case 9:
                    romanArr.push("CM");
                    break;
                default:
                    break;
            }
        } else if (i == 3) {
            for (let x = parseInt(arr[i]); x > 0; x--) {
                romanArr.push("M");
            }
        }
    }
   // console.log(romanArr);
    let romanString = romanArr.join("");
    //console.log(romanString);
    return romanString;
}



console.log(convertToRoman(12));


/*

The original pattern for Roman numerals used the symbols I, V. and X (1, 5, and 10) as simple tally marks. Each marker for 1 (I) added a unit value up to 5 (V), and was then added to (V) to make the numbers from 6 to 9:

I, II, III, IIII, V, VI, VII, VIII, VIIII, X.
The numerals for 4 (IIII) and 9 (VIIII) proved problematic (among other things, they are easily confused with III and VIII), and are generally replaced with IV (one less than 5) and IX (one less than 10). This feature of Roman numerals is called subtractive notation.

The numbers from 1 to 10 (including subtractive notation for 4 and 9) are expressed in Roman numerals as follows:

I, II, III, IV, V, VI, VII, VIII, IX, X.[2]
The system being basically decimal, tens and hundreds follow the same pattern:

Thus 10 to 100 (counting in tens, with X taking the place of I, L taking the place of V and C taking the place of X):

X, XX, XXX, XL, L, LX, LXX, LXXX, XC, C.
Note that 40 (XL) and 90 (XC) follow the same subtractive pattern as 4 and 9.

Similarly, 100 to 1000 (counting in hundreds):

C, CC, CCC, CD, D, DC, DCC, DCCC, CM, M.
Many numbers include hundreds, units and tens. The Roman numeral system being basically decimal, each "place" is added separately, in descending sequence from left to right, as with "arabic" numbers. For example, the number 39 is XXXIX, (three tens and a ten less one), 246 is CCXLVI (two hundreds, a fifty less ten, a five and a one. As each place has its own notation there is no need for place keeping zeros, so "missing places" can be simply omitted: thus 207, for instance, is written CCVII (two hundreds, a five and two ones) and 1066 becomes MLXVI (a thousand, a fifty and a ten, a five and a one)[3][4]

Roman numerals for large numbers are nowadays seen mainly in the form of year numbers (other uses are detailed later in this article), as in these examples:

1776 as MDCCLXXVI, the date written on the book held by the Statue of Liberty.[5]
1954 as MCMLIV, as in the trailer for the movie The Last Time I Saw Paris[6]
1990 as MCMXC, used as the title of musical project Enigma's debut album MCMXC a.D., named after the year of its release.
2014 as MMXIV, the year of the games of the XXII (22nd) Olympic Winter Games (in Sochi)
2018 as MMXVIII.

*/
