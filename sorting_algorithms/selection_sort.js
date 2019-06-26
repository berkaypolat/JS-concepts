/*
 * Similar to bubble sort but the sorted data is accumulated at the beginning
 * instead of at the end.
 * Pseudocode:
 *   1 - Store the first element as the smallest value you have seen so far.
 *   2 - Loop over the array to compare and replace the current min with the smallest number.
 *   3 - Replace the minimum element to the begining of the array.
 *   4 - Reiterate
 * TIME COMPLEXITY => O(N^2) but there is less swapping if writing to memory is a concern
 * SPACE COMPLEXITY => O(1)
 */
function selectionSort(arr){
     const swap = (arr, indx1,indx2) =>
        ([arr[indx1],arr[indx2]] = [arr[indx2], arr[indx1]]);
     for(var i = 0; i < arr.length; i++){
         var min = i;
         for(var j = i + 1; j < arr.length; j++){
             if(arr[j] < arr[min]){
                 min = j;
             }
         }
         if (i !== min) swap(arr,i,min);
     }
     return arr;
}

console.log(selectionSort([1,4,5,7,4,10,3]));
