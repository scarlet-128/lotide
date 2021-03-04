const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😙😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😞😞😞Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKeyByValue = function(obj,val) {
  let key = Object.keys(obj);
  let value = Object.values(obj);
  /* console.log(key);
  console.log(value); */
  for (let i = 0; i < value.length; i++) {
    if (value[i] === val) {
      return key[i];
    }
  }
};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);