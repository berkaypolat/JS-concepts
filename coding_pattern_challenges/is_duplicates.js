/*
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 * and checks whether there are any duplicates among the arguments passed in. You can solve this using the
 * frequency pattern OR the multiple pointers pattern.
 * V1 => frequency patter, V2 => multiple pointers pattern
 * Time: O(N), bonus O(NlogN)
 * Space: O(N), bonus O(1)
 */
 function areThereDuplicatesV1(){
    var counter = {};
    for (var val in arguments){
        counter[arguments[val]] = (counter[arguments[val]] || 0) + 1;
    }
    for (var key in counter){
        if (counter[key] > 1) return true;
    }
    return false;
 }

function areThereDuplicatesV2(...args){
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true;
        }
        start++;
        next++;
    }
    return false;
}

//A quick one liner!
function areThereDuplicatesV3() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesV2(1,2,3));
console.log(areThereDuplicatesV2(1,2,2));
console.log(areThereDuplicatesV3('a','b','c','a'));
console.log(areThereDuplicatesV2());
