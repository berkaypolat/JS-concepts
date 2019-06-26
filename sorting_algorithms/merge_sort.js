// ================================
// MERGING ARRAY TUTORIAL
// ================================
// The function should run in O(M+N) time and O(M+N) space
// and should not modify the parameters passed in the function.
// Assuming we are getting 2 SORTED ARRAYS
function merge(arr1,arr2){
    var results = [];
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        }else{
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
}
console.log(merge([1,2,3,4], [5,6,7,8]));
//========== END OF MERGING TUTORIAL ============
/*
 * mergeSort Pseudocode:
 *    1 - Break up the array into halves until you have arrays that are empty
 *        or have one element
 *    2 - Once you have smaller sorted arrays, merge those arrays with other sorted arrays
 *        until you are back at the full length of the array
 *    3 - Once the array has been merged back together, return the merged and sorted array
 * TIME COMPLEXITY => O(NLOGN) ~ for best,avg,worst
 * SPACE COMPLEXITY => O(N)
 */
function mergeSort(arr){
     if(arr.length <= 1) return arr;
     var mid = Math.floor(arr.length / 2);
     var left = mergeSort(arr.slice(0,mid));
     var right = mergeSort(arr.slice(mid));
     return merge(left,right);
}
console.log(mergeSort([6,7,8,1,2,3,4,5]));
