const assertEqual = require('./assertEqual');
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
module.exports = eqArrays;

