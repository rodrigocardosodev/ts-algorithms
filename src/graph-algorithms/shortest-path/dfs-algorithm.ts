import { graph, Graph } from "./graph";

function dfs(graph: Graph, start: number, end: number, visited: boolean[], path: number[]): number[] | null {
    visited[start] = true;
    path.push(start);

    if (start === end) {
        return path;
    }

    for (let i = 0; i < graph[start].length; i++) {
        if (graph[start][i] === 1 && !visited[i]) {
            let result = dfs(graph, i, end, visited, path);
            if (result) return result;
        }
    }

    path.pop();
    return null;
}


let visited = new Array(graph.length).fill(false);
let path: number[] = [];

console.log(dfs(graph, 0, 4, visited, path));  // Output: [ 0, 2, 4 ]
