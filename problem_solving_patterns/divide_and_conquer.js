/*
 * Given a sorted array of integers, write a function called search, that accepts a value and returns
 * the index where the value passed to the function is located. If the value is not found, return -1.
 * Time complexity => O(logN), space complexity => O(1)
*/

function search(arr, num){
    var min = 0;
    var max = arr.length - 1;
    while (min <= max){
        var middle = Math.floor((max + min ) / 2);
        var value = arr[middle];

        if (num > arr[middle]){
            min = middle + 1;
        }else if (num < arr[middle]){
            max = middle - 1;
        }else {
            return middle;
        }
    }
    return -1;
}
