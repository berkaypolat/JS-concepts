/*
 * More memory BUT more flexibility compared to Singly Linked List!!
 *
 *      TIME COMPLEXITY
 *      insertion - O(1)
 *      removal   - O(1)
 *      searching - O(N) ~ O(N/2) => O(N)
 *      access    - O(N)
 */
 class Node{
     constructor(val){
         this.val = val;
         this.next = null;
         this.prev = null;
     }
 }

 class DoublyLinkedList{
     constructor(){
         this.head = null;
         this.tail = null;
         this.length = 0;
     }
     //add to end
     push(val){
         var newNode = new Node(val);
         if(!this.head){
             this.head = newNode;
             this.tail = this.head;
         }else{
             this.tail.next = newNode;
             newNode.prev = this.tail;
             this.tail = newNode;
         }
         this.length++;
         return this;
     }
     //removes from end
     pop(){
         if(!this.head) return undefined;
         var popped = this.tail;
         if(this.length === 1){
             this.tail = null;
             this.head = null;
         }else{
             this.tail = popped.prev;
             this.tail.next = null;
             popped.prev = null;
         }
         this.length--;
         return popped;
     }
     //remove from head
     shift(){
         if(!this.head) return undefined;
         var popped = this.head;
         if(this.length === 1){
             this.head = null;
             this.tail = null;
         }else{
             this.head = popped.next;
             this.head.prev = null;
             popped.next = null;
         }
         this.length--;
         return popped;
     }
     //add to head
     unshift(val){
         var newNode = new Node(val);
         if(!this.head){
             this.head = newNode;
             this.tail = newNode;
         }else{
             this.head.prev = newNode;
             newNode.next = this.head;
             this.head = newNode;
         }
         this.length++;
         return this;
     }
     //retrieve the node at the given index
     get(index){
         if(index < 0 || index >= this.length) return null;
         var count, current;
         if(index <= this.length / 2){
             count = 0;
             current = this.head;
             while(count !== index){
                 current = current.next;
                 count++;
             }
         }else{
             count = this.length - 1;
             current = this.tail;
             while(count !== index){
                 current = current.prev;
                 count--;
             }
         }
         return current;
     }
     //update node at given index
     set(index,val){
         var foundNode = this.get(index);
         if(foundNode){
             foundNode.val = val;
             return true;
         }
         return false;
     }
     //insert at a given index
     insert(index,val){
         if(index < 0 || index > this.length) return false;
         if (index === this.length) return !!this.push(val);
         if(index === 0) return !!this.unshift(val);

         var newNode = new Node(val);
         var prev = this.get(index-1,val);
         var after = prev.next;

         prev.next = newNode, newNode.prev = prev;
         newNode.next = after, after.prev = newNode;
         this.length++;
         return true;
     }
     //removes at a given index
     remove(index){
         if(index < 0 || index > this.length) return undefined;
         if(index === this.length - 1) return this.pop();
         if(index === 0) return this.shift();
         var removed = this.get(index);
         removed.prev.next = removed.next;
         removed.next.prev = removed.prev;
         this.length--;
         removed.next = null, removed.prev = null;
         return removed;
     }
     reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;
        var next;
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
        }
        return this;
     }
 }
