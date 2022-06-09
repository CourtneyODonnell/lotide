const assertEqual = require('./assertEqual');

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

module.exports = tail;