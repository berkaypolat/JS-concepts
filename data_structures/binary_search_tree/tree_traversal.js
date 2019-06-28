/*
 *   BFS -> if it is WIDE TREE, then space complexity is big!
 *   DFS -> inorder  ~ sorted
 *       -> preorder ~ can easily reconstruct a tree
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
    /*
     *   Breadth First Search
     *   Steps - Iteratively - Use of  queue
     */
    BFS(){
        var data = [], queue = [];
        var node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    /*
     *  Node -> Left -> Right
     */
    DFS_PRE(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    /*
     *  Left -> Right -> Node
     */
    DFS_POST(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    /*
     *  Left -> Node -> Right
     */
    DFS_IN(){
        var data = [];
        function traverse(node){
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.BFS());
console.log(bst.DFS_PRE());
console.log(bst.DFS_POST());
console.log(bst.DFS_IN());
