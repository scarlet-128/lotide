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

const assertArraysEqual = function (actual, expected){
  if (eqArrays(actual,expected)){
    console.log("passed");
  } else {
    console.log("failed");
  }
}

const without = function (arr, x){
  let newArr = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < x.length; j++) {
      if (newArr[i] === x[j]) {
        newArr.splice(i, 1);
      }
    }
  }
  console.log(newArr);
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 

assertArraysEqual(words, ["hello", "world", "lighthouse"]);


