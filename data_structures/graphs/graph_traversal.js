/*
 *    + Peer to peer Networking
 *    + Web crawlers
 *    + Finding 'closest' matches/Recommendations
 *    + Shortest path problems ~ GPS nagivation, Solving mazes, AI(shortes path to win the game)
 *    @ extenstion to Graph class defined in the same folder
 */

//recursive version
DFS(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList.forEach(neighbor => {
            if(!visited[neighbor]){
                dfs(neighbor);
            }
        });
    })(start);
    return result;
}
//iterative version
DFSv2(start){
    const visited = {};
    const result = [];
    const stack = [start];
    var currentVertex;

    visited[start] = true;
    while(stack.length){
        currentVertex = stack.pop();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                stack.push(neighbor);
            }
        });
    }
    return result;
}

BFS(start){
    const queue = [start];
    const result = [];
    const visited = {};
    var currentVertex;

    visited[start] = true;
    while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return queue;
}
