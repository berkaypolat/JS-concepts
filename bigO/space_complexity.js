//Auxilary space O(1)
function sum(arr){
    var total = 0;
    for (var i = 0; i< arr.length; i++){
        total += arr[i];
    }
    return arr;
}

//Auxilary space complexity O(N)
function double(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
