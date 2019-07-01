/*
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum
 * a subarray with the length of the number passed to the function.
 * Note that a subarray must consist of consecutive elements from teh original array.
 * This is a sliding window pattern.
 * Time complexity => O(N)
 * Space complexity => O(1)
 */
module.exports = {
    maxSubarraySum: function (arr,val){
        if (arr.length < val) return null;

        var maxSum = 0;
        for(var i = 0; i < val; i++){
            maxSum += arr[i];
        }
        var currentSum = maxSum;
        for (var j = val; j < arr.length; j++){
            currentSum = currentSum + arr[j] - arr[j-val];
            maxSum = Math.max(currentSum, maxSum);
        }
        return maxSum;
    }
};


// console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)) // 5
// console.log(maxSubarraySum([2,3], 3)) // nulll
