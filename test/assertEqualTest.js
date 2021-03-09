const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
describe("#assertEqual", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(assertEqual(1, 1)); 
  });
});