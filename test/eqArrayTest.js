const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
describe("#eqArray", () => {
  it("returns true actual value [1, 2, 3] and expected value is [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns false actual value [1, 2, 3] and expected value is [3, 2, 1]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1])); 
  });
  it("returns false actual value ['1', '2', '3'] and expected value is  ['1', '2', 3]", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3])); 
  });
});