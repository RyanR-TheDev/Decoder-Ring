// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

//It ignores capital letters. (For example, the results of A Message and a message should be the same.)
//It maintains spaces in the message, before and after encoding or decoding.

describe("polybius() tests",()=>{
        it("should return false if the input is not a string", ()=> {
            const text = 3435
            expected = false;
            actual = polybius(text);
            expect(actual).to.equal(expected)
        });
        it("should return false while decoding if the number of characters is odd.", ()=> {
            const text = "4567562"
            expected = false
            actual = polybius(text,0);
            expect(actual).to.equal(expected)
        });
  //When encoding, it translates the letters i and j to 42.
  //When decoding, it translates 42 to (i/j).
        it("'I' and 'J' should share a space. Both letters are encoded to 42 but show both letters when decoded", () => {
            const text = "4432423352125413";
            const expected = "thi/jnkful";
            const actual = polybius(text, false);
            expect(actual).to.equal(expected);
        });
        it("should return false if the input numbers do not match the numbers in the cipher object", () => {
            expected = false
            actual = polybius(16273849)
            expect(actual).to.equal(expected)
    });
});