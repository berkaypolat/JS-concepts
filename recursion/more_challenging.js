/*
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */
function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.substr(1)) + str[0]
}
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

/*
 * Write a recursive function called isPalindrome which returns true if the string passed
 * to it is a palindrome (reads the same forward and backward). Otherwise it returns false
 */
function isPalindrome(str){

    function helper(str2){
        if(str2.length <= 1) return str2;
        return helper(str2.substr(1)) + str2[0]
    }
    var reverse = helper(str);
    if (str === reverse) return true;
    return false;
}

//without the helper method
function isPalindromeV2(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

/*
 * Write a recursive function called someRecursive which accepts an array and a callback. The function returns
 * true if a single value in the array returns true when passed to callback. Otherwise return false.
 */
function someRecursive(arr, callback){
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1),callback);
}
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd)); //true
console.log(someRecursive([4,6,8,9], isOdd)); //true
console.log(someRecursive([2,6,4], isOdd)); //false
console.log(someRecursive([4,6,8], val => val > 10)); //false

/*
 * Write a recursive function called flatten which accepts an array of arrays and retuns a new array with
 * all values flattened.
 */
function flatten(arr){
    var newArr = [];

    function helper(arr2){
        if (arr2.length === 0) return;
        if (!Array.isArray(arr2[0])){
            newArr.push(arr2[0]);
        }else{
            helper(arr2[0]);
        }
        helper(arr2.slice(1));
    }
    helper(arr);
    return newArr;
}

//without the helper method
function flattenV2(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3
