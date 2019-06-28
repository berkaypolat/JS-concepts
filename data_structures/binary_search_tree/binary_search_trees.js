/*
 *  + HTML DOM
 *  + Network routing
 *  + Abstract Syntax Tree
 *  + Artificial Intelligece/Machine Learning
 *  + File/folder structure
 *  + JSON
 *
 *    ~ Trees, Binary Trees, Binary Search Trees(BST)
 *  === BST  ====
 *  Algorithm  Average  Worst
 *  Space       O(N)     O(N)
 *  Search     O(LOGN)   O(N)
 *  Insert     O(LOGN)   O(N)
 *  Delete     O(LOGN)   O(N)
 */

class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if (insertHelper(this.root)) this.root = newNode;
        function insertHelper(node){
            if(node === null) return true;
            if (node.value > newNode.value){
                if(insertHelper(node.left)) node.left = newNode;
            }else if(node.value < newNode.value){
                if(insertHelper(node.right)) node.right = newNode;
            }
            return false;
        }
        return this;
    }
    insertV2(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var curNode = this.root;
        while(true){
            if(value === curNode.value) return undefined;
            if(value < curNode.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                curNode = curNode.left;
            }else if(value > curNode.value){
                if(curNode.right === null){
                    curNode.right = newNode;
                    return this;
                }
                curNode = curNode.right;
            }
        }
    }
    search(val){
        var found;
        function helper(node){
            if(node === null) found = undefined;
            if(node.value > val){
                helper(node.left);
            }else if(node.value < val){
                helper(node.right);
            }else{
                found = node;
                return true;
            }
        }
        helper(this.root);
        return found;
    }
    searchV2(value){
        if(this.root === null) return false;
        var curNode = this.root, found = false;
        while(curNode && !found){
            if(value < curNode.value){
                curNode = curNode.left;
            }else if(value > curNode.value){
                curNode = curNode.right;
            }else{
                found = true;
            }
        }
        if(!found) return undefined;
        return curNode;
    }
}

var tree = new BST();
tree.insertV2(1);
tree.insertV2(3);
tree.insertV2(4);
tree.insert(5);
console.log(tree.searchV2(4));
console.log(tree.searchV2(5));
console.log(tree.searchV2(1));
console.log(tree.search(4));
console.log(tree.search(5));
console.log(tree.search(1));
