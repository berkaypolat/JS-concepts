/*
 *    + background tasks, uploading resources, printing/task processing, use for other data structures!
 *    TIME COMPLEXITY
 *    - insertion ~ O(1)
 *    - removal   ~ O(1)
 *    - searching ~ O(N)
 *    - access    ~ O(N)
 */
 class Node{
     constructor(val){
         this.value = val;
         this.next = null;
     }
 }
 class Queue{
     constructor(){
         this.first = null;
         this.last = null;
         this.size = 0;
     }
     //add to the end(same as push() for linked list)
     enqueue(val){
         var newNode = new Node(val);
         if(!this.first){
             this.first = newNode;
             this.last = this.first;
         }else{
             this.last.next = newNode;
             this.last = newNode;
         }
         return ++this.size;
     }
     //pop from the head(same as shift() for linked list)
     dequeue(){
         if(!this.first) return null;
         var headNode = this.first;
         this.first = headNode.next;
         this.size--;
         if(this.size === 0){
             this.last = null;
         }
         return headNode.value;
     }
 }
var q = new Queue();
console.log(q.enqueue('first'));
console.log(q.enqueue('second'));
console.log(q.enqueue('third'));
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
