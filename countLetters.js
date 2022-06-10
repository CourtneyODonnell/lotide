//copy assert equal fx
//function implementation
const assertEqual = function(actual, expected) {
  //compare two values and print message
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//end of copy of assert equal fx

//NEW function below
const countLetters = function(string) {
  let result = {};
  //result object
  //for of loop can be used with strings
  for (const letter of string) {
    //if a string is not input
    if (letter !== " ") {
      //if its an additional occurance of that letter add one to count
      if (result[letter]) {
        result[letter] += 1;
        //else if it hasnt been counted yet, adds a one count
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};
//test case:
//console.log(countLetters('mississippi half step'));

module.exports = countLetters;