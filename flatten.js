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
    console.log("😙😃😃passed");
  } else {
    console.log("😞😞😞failed");
  }
};
const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let z = 0; z < arr[i].length; z++) {
        newArr.push(arr[i][z]);
        //console.log(newArr)
      }
    } else {
      newArr.push(arr[i]);
    }
  } return newArr;
};



flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);