//This is an example of a problem with frequency counter patterns
//Write a function which accepts two arrays such that for every value in the first array
//has it's corresponding value squared in the second array. Frequency values must be the same.
function same_naive(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    //O(N^2)
    for (var i = 0; i < arr1.length; i++){
        var correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true;
}

function same_better(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    var freqCounter1 = {};
    var freqCounter2 = {};
    //O(N)
    for (var val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }
    //O(N)
    for (var val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }
    //O(N)
    for (var key in freqCounter1){
        if (!(key ** 2 in freqCounter2)){
            return false;
        }
        if (freqCounter2[key ** 2] !== freqCounter1[key]){
            return false;
        }
    }
    return true;
}

console.log(same_naive([1,2,3,4,4],[1,4,9,16,16]));   //O(N^2) time complexity
console.log(same_better([1,2,3,4,4],[1,4,9,16,16]));  //O(N) time complexity
