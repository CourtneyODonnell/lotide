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
  for (const key of Object.keys(object1)) {
    //compare both objects values for that key
    if (object1[key] !== object2[key]) {
      return false;
    } else if (object1[key] === object2[key]) {
      return true;
    }
  }
}; //close function