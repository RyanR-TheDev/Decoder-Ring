// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  let cipher = {
  "a" : 11, "b" : 21, "c" : 31, "d" : 41, "e" : 51,
  "f" : 12, "g" : 22, "h" : 32, "i/j" : 42, "k" : 52,
  "l" : 13, "m" : 23, "n" : 33, "o" : 43, "p" : 53,
  "q" : 14, "r" : 24, "s" : 34, "t" : 44, "u" : 54,
  "v" : 15, "w" : 25, "x" : 35, "y" : 45, "z" : 55,
  " " : 00,
};

  function polybius(input, encode = true) {
    if(typeof(input) !== "string")return false;
    let code =""
    if(encode){
      for(let i=0; i<input.length; i++){
        if (input[i].includes("i") || input[i].includes("j")){
            code+=cipher["i/j"];
        }else if (input[i] === " "){
            code+=input[i];
        }else{
            code+=cipher[input[i]];
        }}
      }else{
        const newInput = input.replace(" ","00")
        if(newInput.length%2!==0)return false;
        let arr = newInput.match(/.{1,2}/g);
        arr.forEach(num => { 
        const char = Object.keys(cipher).find(key=> num == cipher[key]);
        code += char;
        });
      }
     return code
   
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
