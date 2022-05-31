/************ BEGINNING of pasted eqObjects fx *****************/
// COPY pasted from assertEqual function
const assertEqual = function(actual, expected) {
  //compare two values and print message
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//END OF above code pasted ASSERT EQUAL function

// copy pasted from eqArrays function
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
// END of code pasted from eqArrays function
/* BEGIN EQUAL OBJECTS FUNCTION */

//goal: needs to return primitive data types to be checked with assertEqual

//FOR OBJECTS we will need to implement eq objects

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // fx body
  // compare object1 and object2 lengths, ie check if They have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } // close comparison object1 and object2
  //loop through keys returned by object.keys() to check value for each key in object1 is same as object2
  let result = true;
  for (const key of Object.keys(object1)) {
    //implement array.isarray checks
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) {
      //implement eqArrays function for the two keys
      //update result
      result = eqArrays(object1[key], object2[key]);
      //eqArrays(object1[key], object2[key]);
    } else {
      result = object1[key] === object2[key];
    }
    //compare both objects values for that key
    
  }
  return result;
}; //close function
/************ end of pasted eqObjects fx *****************/

/********* START OF NEW assertObjectsEqual fx ************/

//fx implementation
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //add this line to fix object output issue
  //if input objects evaluate to true through the eqObjects function, log:
  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Object Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}✅`);
  } else {
    //otherwise, log:
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 🛑`);
  }
}; //close function

// //TEST CASES:
// const objectOne = {
//   1: 'one',
//   2: 'two',
//   3: 'three',
//   4: 'four',
// };
// const objectTwo = {
//   1: 'one',
//   2: 'two',
//   3: 'three',
//   4: 'four',
// };
// const objectThree = {
//   1: 'one',
//   2: 'two',
//   3: 'three',
// };
// assertObjectsEqual(objectOne, objectTwo);
// assertObjectsEqual(objectOne, objectThree);
