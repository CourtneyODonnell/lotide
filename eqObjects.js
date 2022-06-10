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


// //step 1 and 2 checks
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// console.log('1.  should return true for check 1 steps 1/2: ');
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// console.log('2.  should return false for check 2 steps 1/2: ');
// eqObjects(ab, abc); // => false
// assertEqual(eqObjects(ab, abc), false)


// //step 3 arrays as values tests
// console.log('STEP 3 RESULTS BELOW:');

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
// console.log('3.  should return true for check 1 of step 3:');
// //actual check:
// assertEqual(eqObjects(cd, cd), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// console.log('4.  should return false for check 2 of step 3:');
// //actual check:
// assertEqual(eqObjects(cd, cd2), false);


module.exports = eqObjects;