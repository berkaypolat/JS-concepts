const { PerformanceObserver, performance } = require('perf_hooks');

function addUpTo(n) {
    var total = 0;
    for (var i = 0; i <= n; i++){
        total += i;
    }
    return total;
}

console.log(addUpTo(7));

var t1 = performance.now();
addUpTo(10000000);
var t2 = performance.now();

//the console.log uses new feature template literals
console.log(`Time elapsed: ${(t2-t1) / 1000} seconds.`);
