function topologicalSort(graph) {
  let visited = new Set();
  let stack = [];

  function dfs(node) {
    console.log("inside dfs", node)
    if (!visited.has(node)) {
      visited.add(node);
      let neighbors = graph[node] || [];
      for (let neighbor of neighbors) {
        dfs(neighbor);
      }
      console.log("pushing inside stack", node);
      stack.push(node);
    }
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      console.log("inside main for and not visited", node)
      dfs(node);
    }
  }

  return stack.reverse();
}

// Example usage:
let graph3 = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': ['D'],
  'D': []
};

console.log(topologicalSort(graph3));