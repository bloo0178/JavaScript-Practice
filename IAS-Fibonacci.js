console.clear();

//THIS IS A TEST
//This is a test 2

/*Given a positive integer num, return the sum of all odd Fibonacci numbers
that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
number in the sequence is the sum of the two previous numbers. The first six
numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci
numbers less than or equal to 10 are 1, 1, 3, and 5.*/

function sumFibs(num) {
  let fibArray = [1, 1]; //Populate an array with all Fibonacci numbers
  let fibOddArray = []; //Used to populate with the odd values of fibArray
  let a = 1;
  let b = 1;
  let sum = 0;

  /*Builds an array of all Fibonacci numbers that are less than or equal to num.
   NOTE: This array has a starting value of [1,1] since those will always be
   the first two values of the Fibonacci sequence.*/
  while (a + b <= num) {
    sum = a + b;
    fibArray.push(sum);
    a = b;
    b = sum;
  }

  //Determines the odd values from fibArray and pushes them into fibOddArray
  fibArray.forEach((x) => {
    if (x % 2 != 0) {
      fibOddArray.push(x);
    }
  });

  /*Use the reduce method to set the value of sumOdds
   equal to all the values in fibOddArray.*/
  let sumOdds = fibOddArray.reduce((sum, x) => {
    return sum += x;
  });

  return sumOdds;
}

console.log(sumFibs(1000));
