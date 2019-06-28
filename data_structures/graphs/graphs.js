/*
 * + Social Networking, Location/Mapping, Routing algorithms
 * + Visual Hierarchy, File System Optimizations, Recommendations
 * + EVERYWHERE!!
 * + Types of Graphs => Undirected Graphs, Directed Graphs, Hybrid Graphs
 *                      Weighted Graphs
 * + HOW STORE GRAPHS??
 *   ~ Adjacency Matrix
 *   ~ Adjacency List, Map, etc. (key is vertex, value is neighbors)
 *  @ We will go with Adjacency List since most data in real-world tends to lend
 *    itself to sparser and/or larger graphs
 */
//undirected graph version, keeping it simple
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList.pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}
