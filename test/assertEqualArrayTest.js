const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;
describe("#assertArraysEqual", () => {
  it("returns true when actual value [1, 2, 3] and expected value is [1, 2, 3]", () => {
    assert.isTrue(
      assertArraysEqual([1, 2, 3], [1, 2, 3])
        );
  });
  it("returns false when actual value [8,6,9] and expected value is [1,6,5]", () => {
    assert.isFalse(assertArraysEqual([8,6,9], [1, 6, 5])); 
  });
  it("returns false when actual value [1, 8, 3] and expected value is [1, 8, '3']", () => {
    assert.isFalse(assertArraysEqual([1, 8, 3], [1, 8, '3'])); 
  });
});
