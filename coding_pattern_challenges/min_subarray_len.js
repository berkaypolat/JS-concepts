/*
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers
 * and a positive integer. This function should return the minimal length of contiguous subarray of which
 * the sum is greater than or equal to the integer passed to teh function. If there isn't one, return 0 instead.
 * Time complexity => O(N)
 * Space complexity => O(1)
 */
 function minSubArrayLen(arr, val){
    var total = 0;
    var start = 0;
    var end = 0;
    var minLen = Infinity;

    while (start < arr.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
        if(total < val && end < arr.length){
            total += arr[end];
            end++;
        }
    // if current window adds up to at least the sum given then
    // we can shrink the window
        else if(total >= val){
            minLen = Math.min(minLen, end-start);
            total -= arr[start];
            start++;
        }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
 }

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)); // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)); // 5
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)); // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)); // 0
