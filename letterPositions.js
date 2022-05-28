//below is assertArraysEqual and eqArrays functions
const assertArraysEqual = function(actualInput, ExpectedInput) {
  if (eqArrays(actualInput, ExpectedInput) === true) {
    //if input arrays evaluate to true through the eqarrays fx, log:
    console.log(`✅ Assertion Passed: ${actualInput} === ${ExpectedInput}`);
  } else {
    //otherwise, log:
    console.log(`🛑 Assertion Failed: ${actualInput} !== ${ExpectedInput}`);
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
//END OF assertArraysEqual and eqArrays fxs


//We'll implement a new function letterPositions DONE
const letterPositions = function(sentence) {
  //result an object
  let results = {};
  //for loop with index
  for (let i = 0; i < sentence.length; i++) {
  //if sentence is not a string, then...
    if (sentence[i] !== ' ') {
      //push index to results
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        //will return all the indices (zero-based positions) in the string where each character is found. DONE
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
