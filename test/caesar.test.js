// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

//It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
describe("caesar() tests", () => {
	it("should return false if the shift input is 0", () => {
		const text = "fhjh";
		expected = false;
		actual = caesar(text, 0, true);
		expect(actual).to.equal(expected);
	});
	it("should return false if shift input is greater than 25", () => {
		const text = "fdjks";
		expected = false;
		actual = caesar(text, 43, true);
		expect(actual).to.equal(expected);
	});
	it("should return false if shift input is less than -25", () => {
		const text = "djfd";
		expected = false;
		actual = caesar(text, -43, true);
		expect(actual).to.equal(expected);
	});
  //It ignores capital letters. (For example, the results of A Message and a message should be the same.)

//When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)

//It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
	it("should encode each letter with shift value 3", () => {
		expected = "wklqnixo";
		actual = caesar("thinkful", 3);
		expect(actual).to.equal(expected);
	});
	it("should return false if no shift or encode input", () => {
		const text = "thinkful";
		expected = false;
		actual = caesar(text, null, null);
		expect(actual).to.equal(expected);
	});
});