function iterative(num){
    var total = 1;
    for (var i = num; i > 1; i--){
        total *= i;
    }
    return total;
}

function recursive(num){
    if (num === 1) return 1;
    return num * recursive(num - 1);
}
