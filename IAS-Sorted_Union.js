console.clear();
/*
Write a function that takes two or more arrays and returns a new array of
unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in
their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final
array should not be sorted in numerical order.
*/

function uniteUnique(arr) {
  let newArr = [];
  //for loop based on arbitrary length grabbed via Javascript arguments object
  for (let i=0; i < arguments.length; i++) {
    let item = arguments[i]; //item = the array element at i within arguments
    for (let x=0; x < item.length; x++) {
      //If newArr doesn't include the item at arguments[i][x], it is pushed into newArr
      if (newArr.includes(item[x]) == false) {
        newArr.push(item[x]);
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
