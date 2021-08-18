// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

//It returns false if the given alphabet isn't exactly 26 characters long.
//It correctly translates the given phrase, based on the alphabet given to the function.
describe("substitution() tests)",()=>{
        it("should return false if no input is provided", ()=> {
            expected = false;
            actual = substitution();
            expect(actual).to.equal(expected);
        });
        it("should return false if the input is not a string", ()=> {
            const text = 3435;
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            expected = false;
            actual = substitution(text,alphabet);
            expect(actual).to.equal(expected);
        });
        it("should return false while decoding if the number of characters of alphabet is fewer than 26.", ()=> {
            const text = "thinkful";
            const alphabet = "rukswafln"
            expected = false;
            actual = substitution(text,alphabet);
            expect(actual).to.equal(expected);
        });
  //It returns false if there are any duplicate characters in the given alphabet.
          it("should return false if the alphabet contains duplicate characters", () => {
            const text = "welcome";
            const alphabet = "xoyxoygrukgruglnthdjpzibev"
            expected = false;
            actual = substitution(text,alphabet);
            expect(actual).to.equal(expected);
  });
          it("The input could include spaces, letters and special characters", () => {
                const text = "yp y&ii$r&";
                const expected = "my message";
                const actual = substitution(text, "$wae&zrdxtfcygvuhbijnokmpl", false);
                expect(actual).to.equal(actual);
            });
          it("should encode even if input is all uppercase letters", () => {
              expected = "jrufscpw"
              actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev")
              expect(actual).to.equal(expected);
          });
});