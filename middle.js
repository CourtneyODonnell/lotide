//below code is pasted from previous exercise
//below code pasted from previous eqArrays.js assignment:
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
//END OF above code pasted from previous eqArrays.js assignment
//NEW code below for assertArraysEqual.js

const assertArraysEqual = function(actualInput, ExpectedInput) {
  if (eqArrays(actualInput, ExpectedInput) === true) {
    //if input arrays evaluate to true through the eqarrays fx, log:
    console.log(`✅ Assertion Passed: ${actualInput} === ${ExpectedInput}`);
  } else {
    //otherwise, log:
    console.log(`🛑 Assertion Failed: ${actualInput} !== ${ExpectedInput}`);
  }
};
//DONE above code pasted from prev exercises
/* -------------------------------------- */
//BEGIN OF NEW CODE FOR CURRENT ASSIGNMENT
//function to take in array and return middle element or elements
const middle = function(array) {
  //array to hold answer
  let newArray = [];
  //if there is no middle:
  if (array.length === 1 || array.length === 2) {
    return newArray;
    //otherwise, if 3 or more and an even number of indexes:
  } else if (array.length % 2 === 0) {
    let evenArray = (array.length - 1) / 2;
    //return middle indexes, declare variables for integer up and down
    let integerDown = Math.floor(evenArray);
    let integerUp = Math.ceil(evenArray);
    //push to array
    newArray.push(array[integerDown]);
    newArray.push(array[integerUp]);
    return newArray;
  } else {
    //if number of indexes is odd
    let oddArray = (array.length - 1) / 2;
    //push to array
    newArray.push(array[oddArray]);
    return newArray;
  }
};
/* test cases
console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4, 5]))

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
*/