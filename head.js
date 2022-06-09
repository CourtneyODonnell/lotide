const assertEqual = require('./assertEqual');

//create function head
const head = function(inputArray) {

  //if one element return that element
  if (inputArray.length === 1) {
    return inputArray[0];
  } else if (inputArray.length === 0) {
    return 'undefined';
  }
  //if empty input array, yield undefined

  //return first item in array
  return inputArray[0];

};


module.exports = head;