const takeUntil = function(array, callback) {
  let result = [];
  // The function will return a "slice of the array with elements taken from the beginning."
  for (let element of array) {
    // It should keep going until the callback/predicate returns a truthy value.
    // the callback should only be provided one value: The item in the array.
    if (callback(element)) {
      break;
    } else {
      result.push(element);
    }
  }
  return result;
}; // end of takeUntil function



//test cases
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log('RESULTS 1:');
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log('RESULTS 2:');
// console.log(results2);

/* EXPECTED OUTPUT
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ] */