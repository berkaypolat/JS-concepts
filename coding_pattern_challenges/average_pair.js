/*
 * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a
 * pair of values in the array where the average of the pair equals the target average. There may be one pair that matches
 * the average test. Pattern: Multiple pointers
 * Time: O(N)
 * Space: O(1)
 */
 function averagePair(arr, num){
  if (arr.length === 0) return false;
  var start = 0;
  var end = arr.length - 1;
  while (start < end){
      var avg = (arr[start] + arr[end]) / 2;
      if (avg > num){
          end--;
      }else if (avg < num){
          start++;
      }else{
          return true;
      }
  }
  return false;
}

console.log(averagePair([1,2,3], 2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,10], 8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([], 4)) // false
