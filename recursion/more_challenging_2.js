/*
 * Given an array of strings, capitalize the first letter of each string in the array.
 */
function capitalizeFirst(arr){
    if (arr.length === 1){
        return [arr[0][0].toUpperCase() + arr[0].slice(1)];
    }
    var res = capitalizeFirst(arr.slice(0,-1));
    res.push(arr.slice(arr.length-1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].slice(1));
    return res;
}
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

/*
 * Given an array of strings, capitalize every letter of each string in the array.
 */
function capitalizeWords(arr){
     if (arr.length === 1){
         return [arr[0].toUpperCase()];
     }
     var res = capitalizeWords(arr.slice(0,-1));
     res.push(arr.slice(arr.length - 1)[0].toUpperCase());
     return res;
}
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

/*
 * Write a function called stringfyNumbers which takes in an object and finds all of
 * the values which are numbers and converts them to string.
 */
 function stringifyNumbers(obj){
     var newObj = {};
     for (var key in obj){
         if (typeof obj[key] === 'number'){
             newObj[key] = obj[key].toString();
         }else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
             newObj[key] = stringifyNumbers(obj[key]);
         }else {
             newObj[key] = obj[key];
         }
     }
     return newObj;
 }

var element = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(element));

/*
 * Write a function called collectStrings which accepts an object and returns an array of all the values in the object
 * that have a typeof string.
 */
 //with a helper method
function collectStrings(obj){
    var newArr = [];

    function helperStrings(obj){
        for (var key in obj){
            if(typeof obj[key] === 'string'){
                newArr.push(obj[key]);
            }else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
                helperStrings(obj[key]);
            }
        }
    }
    helperStrings(obj);
    return newArr;
}
//without helper function
function collectStringsV2(obj){
    var newArr = [];

    for (var key in obj){
        if(typeof obj[key] === 'string'){
            newArr.push(obj[key]);
        }else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            newArr = newArr.concat(collectStrings(obj[key]));
        }
    }
    return newArr;
}
var element2 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
console.log(collectStrings(element2)); // ["foo", "bar", "baz"])

/*
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an
 * object which may contain nested objects.
 */
function nestedEvenSum (obj, sum = 0) {
  // add whatever parameters you deem necessary - good luck!
  for(var key in obj){
      if(typeof obj[key] === 'object'){
          sum += nestedEvenSum(obj[key]);
      }else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
          sum += obj[key];
      }
  }
  return sum;
}
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
