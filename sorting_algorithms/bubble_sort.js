/*
 * TIME COMPLEXITY => O(N^2)
 * BEST CASE TIME COMPLEXITY (WITH ALMOST SORTED ARRAY) ~ O(N)ish
 * SPACE COMPLEXITY => O(1)
 */


//ES5
function swap(arr,idx1,idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
//ES2015
const swap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
}

//not optimized for already sort of sorted array
function bubbleSort(arr){
    for(var i = arr.length; i > 0; i--){
        for(var j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//optimized for kind of sorted array
function bubbleSortV2(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}
