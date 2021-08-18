// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift < -25 || shift > 25 || shift === 0 || !shift) return false ;
    let lower = input.toLowerCase().split('').map((letters) => {
      return letters.charCodeAt();
   });
    console.log(lower)
  
    let nums = lower.map((num) => {
      if(encode===true){
        if (num > 96 && num < 123){
         num += shift;
         if (num > 96 && num < 123) return num;
         else if (num >= 123 ) return num -= 26;
         else if (num <= 96) return num += 26;
         else return num }
        else return num
     } else{
      if (num > 96 && num < 123){
        num -= shift;
        if (num > 96 && num < 123) return num;
        else if (num >= 123 ) return num -= 26;
        else if (num <= 96) return num += 26;
        else return num }
       else return num
    }
   });
    console.log(nums)
    
    let convert =  String.fromCharCode(...nums)
    
    return convert.toString() 
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
