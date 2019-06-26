function compareByLen(str1,str2){
    return str1.length - str2.length;
}

console.log(['Steele', 'Colt','Data Structures', 'Algorithms'].sort(compareByLen));

// BUILT IN FUCNTION TIME COMPLEXITY => O(NLOGN)
