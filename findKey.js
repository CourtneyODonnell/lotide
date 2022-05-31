//COPY OF assertEqual
const assertEqual = function(actual, expected) {
  //compare two values and print message
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//END of assertEqual function

//findKey function begins
const findKey = function(object, callback) {
  let keysArray = Object.keys(object);
  //scan the object:
  for (let i = 0; i < keysArray.length; i++) {
    //return the first key for which callback = truthy
    if (callback(object[keysArray[i]])) {
      return keysArray[i];
    } //close if
  } //close loop
  //else return undefined
  return undefined;
}; //close function findKey


// //TESTING Use assertEqual to write test cases for various scenarios.
// const testObject = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// console.log('TEST - expected noma');
// let actualTest = findKey(testObject, x => x.stars === 2);
// let expectedTest = "noma";
// assertEqual(actualTest, expectedTest);
// //x => x.stars === 2)); // => "noma"