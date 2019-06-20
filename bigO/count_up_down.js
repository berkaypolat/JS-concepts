//O(2n) = > O(N)
function countUpAndDown(n){
    console.log("Going up!");
    //O(n)
    for (var i = 0; i < n; i++){
        console.log(i);
    }
    console.log("At the top. Going down...");
    //O(n)
    for (var i = n; i >= 0; i--){
        console.log(i);
    }
    console.log("Back down.Bye");
}

countUpAndDown(10);
