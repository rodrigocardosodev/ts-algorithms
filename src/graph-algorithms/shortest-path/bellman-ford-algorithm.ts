import { Graph, graph } from "./graph";

function bellmanFord(graph: Graph, source: number): number[] {
  const vertices = graph.length;
  let distance = new Array(vertices).fill(Infinity);
  distance[source] = 0;

  const edges: [number, number, number][] = [];

  for (let i = 0; i < vertices; i++) {
      for (let j = 0; j < vertices; j++) {
          if (graph[i][j] !== 0) {
              edges.push([i, j, graph[i][j]]);
          }
      }
  }

  for (let i = 0; i < vertices - 1; i++) {
      for (let [u, v, w] of edges) {
          if (distance[u] != Infinity && distance[u] + w < distance[v]) {
              distance[v] = distance[u] + w;
          }
      }
  }

  for (let [u, v, w] of edges) {
      if (distance[u] != Infinity && distance[u] + w < distance[v]) {
          throw new Error("Graph contains a negative-weight cycle");
      }
  }

  return distance;
}

console.log(bellmanFord(graph, 0)); 
