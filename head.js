//PASTED ASSERT EQUAL FUNCTION TO TOP OF HEAD.JS
//function implementation
const assertEqual = function(actual, expected) {
  //compare two values and print message
if (actual === expected) {
  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
}
else {
  console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
}
};
//create function head
const head = function(inputArray) {

//if one element return that element
if (inputArray.length === 1) {
  return inputArray[0];
}
//if empty input array, yield undefined
else if (inputArray.length === 0) {
  return 'undefined';
}
//return first item in array 
return inputArray[0];

};


//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([4, 5, 6, 7, 'elephant']), 7);