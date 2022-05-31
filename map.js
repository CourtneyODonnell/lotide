/******BEGIN PASTED FUNCTIONS assertArraysEqual and eqArrays******/
const assertArraysEqual = function(actualInput, ExpectedInput) {
  if (eqArrays(actualInput, ExpectedInput) === true) {
    //if input arrays evaluate to true through the eqarrays fx, log:
    console.log(`✅ Assertion Passed: ${actualInput} === ${ExpectedInput}`);
  } else {
    //otherwise, log:
    console.log(`🛑 Assertion Failed: ${actualInput} !== ${ExpectedInput}`);
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
/******END OF PASTED FUNCTIONS******/


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST CASES:
// Write test cases using at least three different ways of using map.
// Think about the different scenarios that make sense to test.
// Be sure to use assertArraysEqual to compare the results from map with expected array results.
// console.log('TEST 1');
// const words = ["ground", "control", "to", "major", "tom"];
// const results = map(words, word => word[0]);
// // console.log(results);
// assertArraysEqual(results, map(words, word => word[0]));