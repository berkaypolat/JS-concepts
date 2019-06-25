/*
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the
 * longest substring with all distinc characters.
 * Time complexity => O(N)
 */
 function findLongestSubstring(str){
    var start = 0;
    var end = 0;
    var maxLen = 0;
    var seen = {};
    while (end < str.length){
        var char = str[end];
        if (seen[char]){
            start = Math.max(start, seen[char]);
        }
        seen[char] = end + 1;
        end++;
        maxLen = Math.max(maxLen, end-start);
    }
    return maxLen;
}

function findLongestSubstringV2(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
