//PASTING ASSERT ONLY CODE FROM PREV EXERCISE
//function implementation
const assertEqual = function(actual, expected) {
  //compare two values and print message
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//END OF PASTED CODE FOR ASSERT EQUAL FUNCTION

//begin function countOnly

const countOnly = function(allItems, itemsToCount) {
//function body
  const results = {};
  //scan entire list with for of loop
  for (const item of allItems) {
  //increment counter for each item
  //set a property with that string key to:
  //the value that was already there (or zero if nothing there) with 1 added to it
  //Add an if condition to only increment our count in results if the item is found in the itemsToCount object.
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      } //close else
    } //close if
    console.log(item);
  } //close for of loop

  return results;
};     // close count only funtion


//TEST CASE FOR BOTTOM OF CODE
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);