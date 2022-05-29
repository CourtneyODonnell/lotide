//PASTED ASSERT EQUAL Fx function implementation
const assertEqual = function(actual, expected) {
  //compare two values and print message
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//END OF PASTED ASSERT EQUAL
/*************************************/

//implement the function findKeyByValue which takes in an object and a value
const findKeyByValue = (object, value) => {
//create array for all keys and search through array
  let keyArray = Object.keys(object);
  //console.log(keyArray);
  //search through array
  for (let element of keyArray) {
    //if the elemenet in the object equals the input value (string), then...
    if (object[element] === value) {
      //return the element
      return element;
    } //close if statement
  } //close for ...of loop
}; //close fx