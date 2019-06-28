/*
 *   Hash tables are used to store key-value pairs
 *   Keys are not ordered!
 *   find,add,remove operations are fast
 *
 *   ++ To implement hash table, we will be using an array]
 *   ++ Using hash function to convert keys to numbers
 *      # needs to be fast (constant time)
 *      # distributes uniformaly
 *      # needs to be deterministic
 *   ++ Separate Chaining or Linear Probing are 2 ways to deal with collisions
 *      TIME COMPLEXITY
 *      Insertion, Deletion, Access ~ O(1) on average
 */
//======= Hash Function Implementation =============
//this Implementation is not constant in time, and not well distributed
function hash(key, arrayLen){
     var total = 0;
     for(var char of key){
         var value = char.charCodeAt(0) - 96;
         total = (total + value) % arrayLen;
     }
     return total;
}
//a little bit improved version
//choosing arrayLen as a prime number allows better distribution
function hashV2(key,arrayLen){
    var total = 0;
    var WEIRD_PRIME = 31;
    for(var i = 0; i < Math.min(key.length, 100); i++){
        var char = key[i];
        var value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}
//========================================================
class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }
    _hash(key){
        var total = 0;
        var WEIRD_PRIME = 31;
        for(var i = 0; i < Math.min(key.length, 100); i++){
            var char = key[i];
            var value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value){
        var index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }
    get(key){
        var index = this._hash(key);
        if(this.keyMap[index]){
            var list = this.keyMap[index];
            for(var i = 0; i < list.length; i++){
                if(list[i][0] === key){
                    return list[i][1];
                }
            }
        }
        return undefined;
    }
    keys(){
        var keysArr = [];
        for(var i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(var j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
    values(){
        var valuesArr = [];
        for(var i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(var j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

var ht = new HashTable();
ht.set('monday', 'water the plants');
ht.set('tuesday', 'go to the gym');
ht.set('wednesday', 'buy groceries');
ht.set('thursday', 'happy hour');
