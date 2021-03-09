const assertEqual = require('./assertEqual');
const eqArrays = function (actual,expected) {
  let output;
  if (actual.length === expected.length) {
  for (let i =0; i < actual.length; i++){
    if (actual[i] === expected[i]){
      output = true;
    } else {
      output = false;
    } 
  }
} else if (actual.length === 0){
  output = true;
}
return output;
}
module.exports = eqArrays;

