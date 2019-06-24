/*
 * Write a function which takes a string and returns counts of each character in the string.
 */

function charCount(str){
    var obj = {};
    for (var char of str){
        if (isAlphaNumaric(char)){
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumaric(char){
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&  // numeric (0-9)
        !(code > 64 && code < 91) &&  // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false
    }
    return true;
}

function olderCharCount(str){
    var obj = {}
    for (var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if (obj[char] > 0) {
                obj[char]++
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}

console.log(charCount("Hi! hello there!"));
