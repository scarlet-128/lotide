const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😙😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😞😞😞Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(x,y) {
  let output;
  if (Array.isArray(x) && Array.isArray(y)) {
    if (x.length !== y.length) {
      return false;
    }
    for (let i = 0; i < x.length; i++) {
      if (x[i] === y[i]) {
        output = true;
      } else {
        output = false;
      }
    }
  }
  return output;
};
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let k of Object.keys(object1)) {
    if (Array.isArray(object1[k]) && Array.isArray(object2[k])) {
      return eqArrays(object1[k],object2[k]);
    } else {
      if (object1[k] !== object2[k]) {
        return false;
      }
    }
  } return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  //console.log(`Example label: ${inspect(actual)}`);
  (eqObjects(actual, expected)) ? console.log(`😙😃😃Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`😞😞😞Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

};




const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);