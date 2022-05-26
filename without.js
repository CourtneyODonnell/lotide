//pasting the assertEqArrays function
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
// end of pasted assertArraysEqual function
const without = function(arraySource, itemsToRemove) {
  let newArray = [];
  //for loop to iterate over arraysource
  for (let i = 0; i < arraySource.length; i++) {
    //nested loop to iterate itemsToRemove
    for (let j = 0; j < itemsToRemove.length; j++) {
      //if element in array = element in itemstoremove, stop loop
      if (arraySource[i] === itemsToRemove[j]) {
        break;
      }
      if (itemsToRemove.length - 1 === j) {
        newArray.push(arraySource[i]);
        //console.log(newArray);
      }
    }
  }
  return newArray;
};
 


//TEST CASES BELOW
//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]