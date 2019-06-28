/*
 *   + LIFO data structure
 *   + manage function invocations, undo/redo, routing(history object)
 *   + Array and Linked List implementations
 *   + TIME COMPLEXITY:
 *      - insertion ~ O(1)
 *      - removal   ~ O(1)
 *      - searching ~ O(N)
 *      - access    ~ O(N)
 *
 */
//==== Naive Array Implementation ====
var stack = [];
//adding to stack
stack.push('google');
stack.push('instagram');
stack.push('youtube');
//removeing from stack
stack.pop();
//==============================
class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //similar to unshift() for linked list
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            var temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        return ++this.size;
    }
    //remove from beginning (like shift() for linked list)
    pop(){
        if(!this.first) return null;
        var removed = this.first;
        if(this.size === 1){
            this.last = null;
        }
        this.first = removed.next;
        this.size--;
        return removed.value;
    }
}
var stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack.pop());
