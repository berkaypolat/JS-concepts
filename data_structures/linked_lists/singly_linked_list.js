/*
 * Random access is not allowed.
 * Arrays => insertion and deletion can be expensive
 * Linked List => insertion and deletion is easy
 * Biggest Advantage is insertion and deletion at the beginning!!!
 *    TIME COMPLEXITY:
 *     insertion - O(1) (does not count the traversal)
 *     removal   - it depends ~ O(1) or O(N)
 *     searching - O(N)
 *     access    - O(N)
 */
class Node{
    constructor(val){
     this.val = val;
     this.next = null;
    }
}
var first = new Node('v1');
first.next = new Node('v2');
first.next.next = new Node('v3');
first.next.next.next = new Node('v4');
first.next.next.next.next = new Node('v5');

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    //removes the head
    shift(){
        if(!this.head) return undefined;
        var headNode = this.head;
        this.head = headNode.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return headNode;
    }
    // add to the head
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //retrieve the node in the given index
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index,val){
        var foundNode = this.get(index);
        if(foudNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        var newNode = new Node(val);
        var prev = this.get(index-1,val);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();
        var prevNode = this.get(index - 1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
    // this is an inplace reverse!!!!
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;
        var next;
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.insert(1,3);
