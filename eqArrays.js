const assertEqual = function(actual, expected) {
  //compare two values and print message
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function that takes in two arrays
const eqArrays = function(array1, array2) {
  //if arrays are not the same length return false
  if (array1.length !== array2.length) {
    return false;
  }
  //if arrays were equal lengths, iterate through with for loop
  for (let i = 0; i < array1.length; i++) {
    //if not exactly equal arrays return false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //if above cases are not relevant, return true
  return true;
};
//test cases
//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false