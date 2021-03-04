const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😙😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😞😞😞Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let newStr = str.split(' ').join("");
  let result = {};
  for (let l of newStr) {
    if (result[l]) {
      result[l] += 1;
    } else {
      result[l] = 1;
    }
  }
  console.log(result);
};
assertEqual(countLetters("lighthouse in the house"), 1);