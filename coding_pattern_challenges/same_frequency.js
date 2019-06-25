/*
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same
 * frequency of digits. Your solution must have the following complexities:
 * Time: O(N)
 */
 function sameFrequency(num1,num2){
    var str1 = num1.toString();
    var str2 = num2.toString();
    if (str1.length !== str2.length) return false;

    var freqCounter = {};
    for (var dgt of str1){
      freqCounter[dgt] = ++freqCounter[dgt] || 1;
    }
    for (var char of str2){
      if (!freqCounter[char]){
          return false;
      }else{
          freqCounter[char] -= 1;
      }
    }
    return true;
}

console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578,5879385)); // true
console.log(sameFrequency(22,222)); // false
