const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns 4 for [4, 5, 6, 7, 'elephant']", () => {
    assert.strictEqual(head([4, 5, 6, 7, 'elephant']), 4);
  });
});



//const assertEqual = require('../assertEqual');



// // //TEST CODE
// DONE assertEqual(head([5,6,7]), 5);
// DONE assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// DONE assertEqual(head([4, 5, 6, 7, 'elephant']), 4);

