const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  /* console.log('array: ', array);
  console.log('callback: ', callback); */

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
const eqArrays = function(x,y) {
  let output;
  if (x.length === y.length) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === y[i]) {
        output = true;
      } else {
        output = false;
      }
    }
  } return output;
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log("passed");
  } else {
    console.log("failed");
  }
};
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);