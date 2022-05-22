//PASTED ASSERT EQUAL FUNCTION TO TOP OF HEAD.JS
//function implementation
const assertEqual = function(actual, expected) {
  //compare two values and print message
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//create function tail
 
const tail = function(inputArray) {

let resultArray = [];

 //if one element return that element
 if (inputArray.length === 1) {
  return inputArray[0];
  
} else if (inputArray.length === 0) {
  return 'undefined';
}
//if empty input array, yield undefined

//return LAST item in array 
return inputArray.slice(-1);


};


//TEST CODE
assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail([4, 5, 6, 8, 11, 14, 12]), 7);
assertEqual(tail([4, 5, 6, 8, 11, 12]), 12);