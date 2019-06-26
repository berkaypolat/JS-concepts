/*
 * Binary search Pseudocode
 *    1 - Function accepts a sorted array and a value
 *    2 - Create a left pointer at the start of the array, and a right pointer
 *        at the end of the array
 *    3 - While the left pointer comes before the right pointer:
 *        + Create a pointer in the middle
 *        + If you find the value you want, return the index
 *        + If the value is too small, move the left pointer up
 *        + if the value is too large, move the right pointer down
 *    4 - If you never find the value, return -1
 */
 function binarySearch(arr, val){
   var start = 0;
   var end = arr.length - 1;
   while (start <= end){
       var middle = Math.ceil((end + start) / 2);
       var currValue = arr[middle];
       if (currValue === val) return middle;
       if (val < currValue){
           end = middle - 1;
       }else{
           start = middle + 1;
       }
   }
   return -1;
 }

function binarySearchV2(arr,elem){
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end){
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}
console.log(binarySearch([1,2,3,4,5], 2));
console.log(binarySearch([1,2,3,4,5], 3));
console.log(binarySearch([1,2,3,4,5], 5));
console.log(binarySearch([1,2,3,4,5], 6));
