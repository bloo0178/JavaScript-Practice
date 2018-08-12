console.clear();
//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  let newArr = [];

  //Create function to flatten an individual array element. This will be used further down in the steamrollArray function.
  let flattenArr = function (a) {
    if (Array.isArray(a)) {
      //If a is an array, use recursion via a "for..in" statement to perform flattenArr function on the next sub-array
      for (let b in a) {
        flattenArr(a[b]);
      }
    } else {
      //If a is not an array, push it into newArr
      newArr.push(a);
    }
  };

  arr.forEach(flattenArr); //Perform the flattenArr function on each top-level array element in arr
  return newArr;
}

console.log(steamrollArray([[["a"]], [["b"]]])); //should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])); //should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])); //should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); //should return [1, {}, 3, 4].
