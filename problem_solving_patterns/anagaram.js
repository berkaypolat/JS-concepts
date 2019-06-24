/* Given two strings, write a function to determine if given
 * two strings are anagrams. (Uses frequency pattern technique)
 * Both version has time complexity of O(N). What are the space complexities?
*/

function validAnagram(str1,str2){
    if (str1.length !== str2.length){
        return false;
    }
    var freq1Obj = {};
    var freq2Obj = {};

    for (var char of str1){
        //freq1Obj[char] ? freq1Obj[char] += 1 : freq1Obj[char] = 1;
        freq1Obj[char] = ++freq1Obj[char] || 1;
    }

    for (var char2 of str2){
        freq2Obj[char2] = ++freq2Obj[char2] || 1;
    }

    for(var key in freq1Obj){
        if(freq1Obj[key] !== freq2Obj[key]){
            return false;
        }
    }
    return true;
}

function validAnagramv2(str1,str2){
    if (str1.length !== str2.length){
        return false;
    }
    var freq1Obj = {};

    for (var char of str1){
        //freq1Obj[char] ? freq1Obj[char] += 1 : freq1Obj[char] = 1;
        freq1Obj[char] = ++freq1Obj[char] || 1;
    }

    for (var char2 of str2){
        if (!freq1Obj[char]){
            return false;
        } else {
            freq1Obj[char] -= 1;
        }
    }
    return true;
}

console.log(validAnagram('','')) //true
console.log(validAnagram('aaz','zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat','car')) // false
console.log(validAnagram('awesome','awesom')) //false
console.log(validAnagram('qwerty','qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
