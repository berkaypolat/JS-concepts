//O(N)
function logAtLeast5(n){
    for (var i = 1; i <= Math.max(5,n); i++){
        console.log(i);
    }
}

//O(1)
function logAtMost5(n){
    for (var i = 0; i <= Math.min(5,n); i++){
        console.log(i);
    }
}

logAtMost5(4);
