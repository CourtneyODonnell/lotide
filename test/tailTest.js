const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 1st element as 'Lighthouse' ( ['Lighthouse', 'Labs'] ) for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], 'Lighthouse');// ensure first element is "Lighthouse"
  });

  it("returns 2nd element as 'Labs' for ( ['Lighthouse', 'Labs'] ) for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs"); // ensure second element is "Labs"
  });

  it("returns array length of 2 ( ['Lighthouse', 'Labs'] ) for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2); // ensure we get back two elements
  });

  it("returns 3 for original array length of ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(words.length, 3); //ensure original array still has 3 elements
  }); 

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });   
});
