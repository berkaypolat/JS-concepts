/*
 * Write a function called isSubsequence which takes in two strings and checks whether the characters
 * in the first stringform a subsequence of the chracters in the second string. In other words, the function
 * should check wheter the characters in the first string appear somewhere in the second string, without their
 * order changing. Pattern: Multiple Pointers pattern
 * Time: O(N+M)
 * Space: O(1)
 */
 function isSubsequence(str1,str2){
    var ptr1 = 0;
    var ptr2 = 0;
    while(ptr1 < str1.length){
        if (str1[ptr1] === str2[ptr2]) ptr1++;
        ptr2++;
        if (ptr2 === (str2.length+1)) return false;
    }
    return true;
 }

 function isSubsequenceV2(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

//Not O(1) space complexity
function isSubsequenceV3(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); //false
