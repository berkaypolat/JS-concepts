/*
 * Special sorting algorithm that works on lists of numbers
 * It never makes comparisons between elements
 * It exploits the fact that information about the size of a number encoded
 * in the number of digits
 */
// ====== HELPER METHODS =======
function getDigit(num, i){
     return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}
 // or you can convert to String and get length
function digitCount(num){
     if (num === 0) return 1;
     return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(nums){
     var max = 0;
     for (var num of nums){
         max = Math.max(max,digitCount(num));
     }
     return max;
}
console.log(mostDigits([1,23,1234,1245]));
//==================================
/*
 * TIME COMPLEXITY => O(N*K)
 * SPACE COMPLEXITY => O(N+K)
 */
function radixSort(nums){
    var maxDigitCount = mostDigits(nums);
    for(var k = 0; k < maxDigitCount; k++){
        var digitBuckets = Array.from({length: 10}, () => []);
        for (var i = 0; i < nums.length; i++){
            var digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);  //spread operator
    }
    return nums;
}
