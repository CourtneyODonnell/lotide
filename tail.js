//PASTED ASSERT EQUAL FUNCTION TO TOP OF tail.JS
//function implementation
const assertEqual = function(actual, expected) {
  //compare two values and print message
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//end of assert equal function

//create function tail
const tail = function(inputArray) {

  //if one element, yeild empty array
  if (inputArray.length === 1) {
    return [];
  
  } else if (inputArray.length === 0) {
    return [];
  }
  //if empty input array, yield empty array

  return inputArray.slice(1);
  //return LAST item in array

};
//test case 1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2:
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
