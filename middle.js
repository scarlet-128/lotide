const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😙😃😃Assertion Passed: ${actual} === ${expected}`); 
  } else {
    console.log(`😞😞😞Assertion Failed: ${actual} !== ${expected}`) }
};
const eqArrays = function (x,y) {
  let output;
  if (x.length = y.length) {
  for (let i =0; i < x.length; i++){
    if (x[i] === y[i]){
      output = true;
    } else {
      output = false;
    }
  }
} return output;
}

const middle = function(arr){
  let mid = [];
  if (arr.length > 2){
    if (arr.length % 2 === 1){
      let x = (arr.length+1)/2;
      mid[0] = arr[x-1];
    } else {
      let x = arr.length/2;
      mid[0] = arr[x-1];
      mid[1] = arr[x];
    } 
  } else {
    mid = [];
  } console.log(mid);
}

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1]) // => []
middle([1, 2]) // => []