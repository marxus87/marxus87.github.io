var app = require('../js/scriptTest.js');
describe("A suite", function() {
  it("contains spec with an expectation", function() {
  	var result;
  	result = app.sum(10,20);
    expect(result).toEqual(30);
  });
  it("contains spec with an expectation", function() {
  	var result;
  	result = app.sub(10,20);
    expect(result).toEqual(-10);
  });
  it("contains spec with an expectation", function() {
  	var result;
  	result = app.mul(10,20);
    expect(result).toEqual(200);
  });
  it("contains spec with an expectation", function() {
  	var result;
  	result = app.dis(10,20);
    expect(result).toEqual(0.5);
  });
});