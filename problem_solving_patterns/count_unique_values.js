/*
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the
 * array. There can be negative numbers in the array, but it will always be sorted. Both versions have
 * time complexity => O(N), space complexity => O(1)
*/

//this implementation modifies the array
function countUniqueValues(arr){
  if (!arr || !arr.length) return 0;

  var start = 0;
  var end = 1;
  while(end !== arr.length){
      if (arr[end] > arr[start]){
          arr[start + 1] = arr[end];
          start++;
      }
      end++;
  }
  return start + 1;
}

//this implementation does not modify the array
function countUniqueValuesV2(arr){
  if (!arr || !arr.length) return 0;

  var start = 0;
  var end = 1;
  for (var i = 1; i < arr.length; i++){
      if (arr[i] > arr[i - 1]) end++;
  }
  return end - start;
}
