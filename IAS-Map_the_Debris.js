console.clear();

/*
Return a new array that transforms the elements' average altitude into their
orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being
orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is
398600.4418 km3s-2.

*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let newArr = [];
  /*Orbital period = 2PI * sqrt((earthRadius + avgAlt)^3/GM)*/
  let twoPi = 2 * Math.PI; //Value required in the orbital period equation.


  /*Need a function to perform the calculations to obtain the orbital period
   for each element in the array*/
  let getOrbPeriod = function(obj) {
    let numerator = Math.pow(earthRadius + obj.avgAlt, 3); /*Cube the numerator
     within the sqrt*/
    let x = Math.sqrt(numerator / GM); /* x equals everything in the orbital
    period equation above that would be multiplied by 2PI*/
    let orbPeriod = Math.round(twoPi * x); //Rounds to the nearest integer.
    delete obj.avgAlt; /*Result object will only contain name and
    orbitalPeriod keys.*/
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  /*Now we use the previously created getOrbPeriod function on each element
   in the array, and push the results into the initially empty newArr.
   We use a for..in statement to go through each object in the array.*/
  for (let element in arr) {
    newArr.push(getOrbPeriod(arr[element]));
  }

  return newArr; //Return the array populated with the results
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


/*
TEST CASES

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return
[{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7},
{name: "moon", avgAlt: 378632.553}]) should return
[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734},
{name: "moon", orbitalPeriod: 2377399}].

*/
