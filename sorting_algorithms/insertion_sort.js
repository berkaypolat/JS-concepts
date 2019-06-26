/*
 * Builds up the sort by gradually creating a larger left half
 * which is always sorted.
 * Pseudocode:
 *   1 - Start by the second element in the array.
 *   2 - Now compare the second element with the one before it and swap if necessary
 *   3 - Continue to the next element and if it is in the incorrect oder
 *       iterate through the sorted portion to place the element in the correct place.
 *   4 - Repeat until the array is sorted
 * TIME COMPLEXITY => O(N^2) ~ worst,average / O(N) ~ best
 * SPACE COMPLEXITY => O(1)
 * NOTE: Insertion sort works best if we are dynamically inserting as we go on. (if data is coming live.)
 */
 function insertionSort(arr){
     for(var i = 1; i < arr.length; i++){
         var currentVal = arr[i];
         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
             arr[j+1] = arr[j];
         }
         arr[j+1] = currentVal;
     }
     return arr;
 }
