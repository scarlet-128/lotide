const eqArrays = require('./eqArrays')
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log("😙😃😃passed");
    return true;
  } else {
    console.log("😞😞😞failed");
    return false;
  }
};
module.exports = assertArraysEqual;

