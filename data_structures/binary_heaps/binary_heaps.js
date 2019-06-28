/*
 *   MaxBinaryHeap -> + each parent at most two childs nodes
 *                    + each parent is always larger than its children
 *                    + left children are filled out first
 *
 *   Heaps are useful for implementing priority queues
 *   Heaps are useful for graph traversal algorithms
 *
 *   Binary Heaps can be stored as list/arrays.
 *   TIME COMPLEXITY
 *   insertion, removal ~ O(LOGN)
 *   search ~ O(N)
 */

class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12];
    }
    //add at the end,then bubble up
    insert(val){
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp(){
        var index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0){
            var parentIdx = Math.floor((index - 1)/2);
            var parent = this.values[parentIdx];
            if(parent >= element) break;
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;
        }
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
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
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) ||
                   (swap !== null && rightChild > leftChild)){
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

var heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
