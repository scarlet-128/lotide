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

const letterPositions = function(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++){
    const l = str[i];
    if (l === " "){
    continue;
    }
    if (!obj[l]) {
      obj[l] = [];
    } 
    obj[l].push(i);
  }
  return obj;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);