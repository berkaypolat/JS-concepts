/*
 *   Finds the shortest path between two vertices on a graph
 *   Some common uses => GPS finding fastest route, network routing, biology ~ modeling spread of viruses, airline tickets ~ finding the cheapest route etc.
 */

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2, weight){
        this.adjacencyList[v1].push({node:v2, weight});
        this.adjacencyList[v2].push({node:v1, weight});
    }
    //returns the shortest path
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        var path = [];
        var smallest;

        //build up initial state
        for(var vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                // done and build path to return
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(var neighbor in this.adjacencyList[smallest]){
                    var nextNode = this.adjacencyList[smallest][neighbor];
                    var candidate = distances[smallest] + nextNode.weight;
                    var nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //udpating previous - how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

// A very simple version of Priority queue for illustration purposes
class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();  // ~ O(NLOGN)
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

// Our better implementation of the PriorityQueue
class PriorityQueueV2{
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

class Node{
    constructor(val,priority){
        this.value = val;
        this.priority = priority;
        //if we want to add extra comparison
        //this.timeStamp = Date.now();
    }
}
