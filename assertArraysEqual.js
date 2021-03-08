const eqArrays = require('./eqArrays')
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log("😙😃😃passed");
  } else {
    console.log("😞😞😞failed");
  }
};
module.exports = assertArraysEqual;

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 8, 3], [1, 6, 5]);
assertArraysEqual([1, 8, 3], [1, 8, "3"]);