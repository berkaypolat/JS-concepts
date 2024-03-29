/*
 * Pure recursion tips:
 * 1 - For arrays, use method like "slice", "the spread operator", and "concat" that make copies of arrays
 * so you do not mutate them
 * 2 - Strings are immutable so you will need to use methods like slice,substr, or substring to make copies of strings
 * 3 - To make copies of objects use Object.assign, or the spread operator
 */

function collectOddValues(arr){
    var newArr = [];
    if (arr.length == 0){
        return newArr;
    }
    if (arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
