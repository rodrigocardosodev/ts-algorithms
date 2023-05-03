import { graph, Graph } from "./graph";
class PriorityQueue {
    nodes: [number, number][];

    constructor() {
        this.nodes = [];
    }

    enqueue(priority: number, key: number) {
        this.nodes.push([priority, key]);
        this.sort();
    }

    dequeue() {
        return this.nodes.shift();
    }

    sort() {
        this.nodes.sort((a, b) => a[0] - b[0]);
    }

    isEmpty() {
        return !this.nodes.length;
    }
}

function dijkstra(graph: Graph, start: number): number[] {
    let distances: number[] = [];
    let visited: boolean[] = [];

    for (let i = 0; i < graph.length; i++) {
        distances[i] = Infinity;
        visited[i] = false;
    }

    distances[start] = 0;

    let queue = new PriorityQueue();
    queue.enqueue(0, start);

    while (!queue.isEmpty()) {
      let shortestStep = queue.dequeue();
    
      if (!shortestStep) {
          continue;
      }
  
      let currentNode = shortestStep[1];
  
      if (visited[currentNode]) continue;
      visited[currentNode] = true;

        for (let i = 0; i < graph[currentNode].length; i++) {
            if (graph[currentNode][i] != 0 && !visited[i]) {
                let neighbourNode = i;
                let costToNeighbourNode = graph[currentNode][i];
                let newCostToNeighbourNode = distances[currentNode] + costToNeighbourNode;

                if (newCostToNeighbourNode < distances[neighbourNode]) {
                    distances[neighbourNode] = newCostToNeighbourNode;
                    queue.enqueue(distances[neighbourNode], neighbourNode);
                }
            }
        }
    }

    return distances;
}



console.log(dijkstra(graph, 0));
