const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😙😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😞😞😞Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj,callback) {
  let key = Object.keys(obj);
  let val = Object.values(obj).map(z => callback(z));
  let y = [];
  for (let i = 0; i < val.length; i++) {
    if (val[i]) {
      y.push(key[i]);
    }
  }
  return y[0];
};





assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma");
