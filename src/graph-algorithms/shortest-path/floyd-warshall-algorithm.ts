import { graph, Graph } from "./graph";


function floydWarshall(graph: Graph): Graph {
    let dist: Graph = [];
    const len = graph.length;

    for (let i = 0; i < len; i++) {
        dist[i] = [];
        for (let j = 0; j < len; j++) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (graph[i][j] != 0) {
                dist[i][j] = graph[i][j];
            } else {
                dist[i][j] = Infinity;
            }
        }
    }

    for (let k = 0; k < len; k++) {
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

console.log(floydWarshall(graph));
