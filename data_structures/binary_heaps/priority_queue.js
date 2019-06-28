/*
 *    PriorityQueue Implementation
 *    This one is similar to Min Heap, meaning smaller priority value gets the
 *    higher priorty
 *    + does not cover the logic when priorties are the same
 *
 */
class Node{
    constructor(val,priority){
        this.value = val;
        this.priority = priority;
        //if we want to add extra comparison
        //this.timeStamp = Date.now();
    }
}
class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priorty){
        var newNode = new Node(val,priorty);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        var index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0){
            var parentIdx = Math.floor((index - 1)/2);
            var parent = this.values[parentIdx];
            if(parent.priority < element.priority) break;
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        var index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            var leftChildIdx = 2 * index + 1;
            var rightChildIdx = 2 * index + 2;
            var leftChild, rightChild;
            var swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) ||
                   (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}
var er = new PriorityQueue();
er.enqueue('common cold', 5);
er.enqueue('gunshot wound',1);
er.enqueue('high fever',4);
er.enqueue('broken arm', 2);
er.enqueue('deep tissue scar',3);
console.log(er);
console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());
