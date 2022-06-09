//function to take in array and return middle element or elements
const middle = function(array) {
  //array to hold answer
  let newArray = [];
  //if there is no middle:
  if (array.length === 1 || array.length === 2) {
    return newArray;
    //otherwise, if 3 or more and an even number of indexes:
  } else if (array.length % 2 === 0) {
    let evenArray = (array.length - 1) / 2;
    //return middle indexes, declare variables for integer up and down
    let integerDown = Math.floor(evenArray);
    let integerUp = Math.ceil(evenArray);
    //push to array
    newArray.push(array[integerDown]);
    newArray.push(array[integerUp]);
    return newArray;
  } else {
    //if number of indexes is odd
    let oddArray = (array.length - 1) / 2;
    //push to array
    newArray.push(array[oddArray]);
    return newArray;
  }
};

module.exports = middle;