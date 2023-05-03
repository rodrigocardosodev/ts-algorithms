import { graph, Graph } from "./graph";

function bfs(graph: Graph, start: number, end: number): number[] {
    let queue: number[][] = [[start]];
    let visited = new Set();

    while (queue.length > 0) {
        let path = queue.shift() as number[];
        let node = path[path.length - 1];

        if (node === end) {
            return path;
        }

        if (!visited.has(node)) {
            visited.add(node);

            for (let i = 0; i < graph[node].length; i++) {
                if (graph[node][i] === 1) {
                    let newPath = [...path];
                    newPath.push(i);
                    queue.push(newPath);
                }
            }
        }
    }

    return [];
}


console.log(bfs(graph, 0, 4));
