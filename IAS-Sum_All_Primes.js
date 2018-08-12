console.clear();

/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {

  //var currentNum;
  var sum = 2; //Start sum at 2, since 2 is the lowest prime number.

  if (num == 2) {
    return sum;
  } else {
    //Increment all numbers between 2 and num to test if prime numbers. 
    for (let i = 2; i <= num; i++) {
      //j increments from 2 up to the given i to test each i if it is prime. If it is, it is added to the sum variable.
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          j += i; //Break loop if i is divisible by any value of j; thus, not a prime number.
        }
        // If the first if condition has not been met at this point, and i is not divisible by the current value of j (which is one less than i, and will therefore break the loop on the next check), add i to the sum. 
        else if (i % j != 0 && j + 1 == i) {
          sum += i;
        }
      }
    }
    return sum;
  }
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));

/*
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/
