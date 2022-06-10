//below code pasted from assertarraysequal
//below code pasted from previous eqArrays.js assignment:
const assertEqual = function(actual, ejpected) {
  //compare two values and print message
  if (actual === ejpected) {
    console.log(`✅ Assertion Passed: ${actual} === ${ejpected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${ejpected}`);
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
    //if not ejactly equal arrays return false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //if above cases are not relevant, return true
  return true;
};
//END OF above code pasted from previous eqArrays.js assignment
//NEW code below for assertArraysEqual.js

const assertArraysEqual = function(actualInput, EjpectedInput) {
  if (eqArrays(actualInput, EjpectedInput) === true) {
    //if input arrays evaluate to true through the eqarrays fj, log:
    console.log(`✅ Assertion Passed: ${actualInput} === ${EjpectedInput}`);
  } else {
    //otherwise, log:
    console.log(`🛑 Assertion Failed: ${actualInput} !== ${EjpectedInput}`);
  }
};
//END of pasted code

const flatten = function(array) {
  //result to be held in new array
  var newArray = [];
  //loop
  for (let i = 0; i < array.length; i++) {
    //if array is array implement for loop
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        //push to new array
        newArray.push(array[i][j]);
        //console.log(newArray); 
      }
      // console.log(newArray);
    } else {
      //push to new array i
      newArray.push(array[i]);
    }
    // console.log(newArray);
  }
  return newArray;
};
//test code
//console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;