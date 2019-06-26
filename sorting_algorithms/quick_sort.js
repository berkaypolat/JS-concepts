/*
 *  + Like merge sort, it exploits the fact that arrays of 0 or 1 element are always sorted
 *  + Works by selecting one element(called the 'pivot') and finding the index where the pivot
 *    should end up in the sorted array.
 *  + Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.
 * TIME COMPLEXITY => O(NLOGN) ~ for best,avg / O(N^2) ~ for worst case (pivot always min or max of all)
 * SPACE COMPLEXITY => O(LOGN)
 */

// Helper function - returns the index of the pivot
// rearranges the array
function pivot(arr, start = 0, end = arr.length+1){
    const swap = (arr, indx1,indx2) =>
       ([arr[indx1],arr[indx2]] = [arr[indx2], arr[indx1]]);
    var pivot = arr[start];
    var swapIdx = start;
    for(var i = start+1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx,i);
        }
    }
    swap(arr,swapIdx,start);
    return swapIdx;
}
console.log(pivot([4,8,2,1,5,7,6,3]));
//===========================================
function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        var pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr,left,pivotIndex - 1);
        //right
        quickSort(arr,pivotIndex+1, right);
    }
    return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]));
