/*
 * This is a sliding window pattern approach. Function has
 * better time complexity with O(N).
 * GOAL: Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
*/

function maxSubarraySum(arr,num){
    var maxSum = 0;
    var tempSum = 0;
    if (arr.length < num) return null;
    for (var i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (var i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}
