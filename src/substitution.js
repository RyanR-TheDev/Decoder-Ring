// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const cipher = ['a', 'b', 'c', 'd', 'e',
                  'f', 'g', 'h', 'i', 'j',
                  'k', 'l', 'm', 'n', 'o',
                  'p', 'q', 'r', 's', 't',
                  'u', 'v', 'w', 'x', 'y', 'z'];
    
  
    function substitution(input, alphabet, encode = true) {
      if (!alphabet || alphabet.length !==26 || typeof(alphabet) !== "string" || typeof(input) !== "string") return false;
      const alphabetArr = alphabet.split('');
      const duplicate = alphabetArr.some((el, i) => alphabetArr.indexOf(el) !== i);
      if(duplicate) return false;
      
      let result = ""
      for(let i = 0; i < input.length; i++){
        if (encode){
  //It ignores capital letters. (For example, the results of A Message and a message should be the same.)
          input = input.toLowerCase();
          const codeLttr = alphabetArr[cipher.indexOf(input[i])];
          //console.log(codeLttr)
          if(codeLttr){
            result += codeLttr;
          }else{
            //It maintains spaces in the message, before and after encoding or decoding.
            result += " "
          }
        }
        if (encode===false) {
          input = input.toLowerCase();
          const codeLttr = cipher[alphabetArr.indexOf(input[i])]
          //console.log(codeLttr)
          if(codeLttr){
            result += codeLttr
          }else{
            //It maintains spaces in the message, before and after encoding or decoding.
            result += " "
          }
        }
      }
    return result
  }
    
    return {
      substitution,
    };
  })();
  
  
  module.exports = { substitution: substitutionModule.substitution };
  