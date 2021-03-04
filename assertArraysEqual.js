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


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 8, 3], [1, 6, 5]);
assertArraysEqual([1, 8, 3], [1, 8, "3"]);