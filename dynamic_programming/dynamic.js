/*
 *    Overlapping subproblems ~ it can be broken down into subproblems which are reused several times
 *    Optimal Substructure    ~ an optimal solution can be constructed from optimal solutions of its subproblems
 */

//Time complexity is really bad ~ O(2^N)
function fib(num){
    if(num <= 2) return 1;
    return fib(num-1) + fib(num-1);
}

// We can use Memoization!
// With this improvement, the time complexity reduces down to O(N) !!!
function fib_memo(n, memo = []){
    if(memo[n] !=== undefined) return memo[n];
    if(n <= 2) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

// We can use Tabulation (bottom-up approach)
// Time complexity is same ~ O(N)
// Reduces the space complexity compared to Memoization!!
function fib_table(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}
