/* Write a function that takes a sorted array and find a pair that
 * sums up to zero.
 * This is an example of multiple pointers pattern strategy
*/
function sumZero(arr){
    var left = 0;
    var right = arr.length - 1;
    while(left < right){
        var sum = arr[left] + arr[right];
        if (sum === 0){
            return [arr[left],arr[right]];
        }else if (sum > 0){
            right--;
        }else {
            left++;
        }
    }
    return "No zero sum";
}

console.log(sumZero([-4,-3,-1,0,2,5]));
console.log(sumZero([-4,-3,-1,0,2,3,5]));
