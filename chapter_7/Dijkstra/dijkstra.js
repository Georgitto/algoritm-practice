function findNearestNode(distances, visited) {
    let nearestNode = null
    let minDistance = 999999
  
    Object.keys(distances).forEach(vertex => {
      if (!visited[vertex] && distances[vertex] < minDistance) {
        minDistance = distances[vertex]
        nearestNode = vertex
      }
    });
  
    return nearestNode
}

function dijkstra(graph, startNode) {
    let visited = {}
    let distances = {}
    let previous = {}
      
    let nodes = Object.keys(graph)
    
    nodes.forEach(node => {
      distances[node] = 999999;
      previous[node] = null;
    });

    distances[startNode] = 0;
  
    function handleNode(node) {
      let activeNodeDistance = distances[node]; 
      
      let neighbours = graph[activeNode];
      
      Object.keys(neighbours).forEach(neighbourNode => {
        let currentNeighbourDistance = distances[neighbourNode]
        let newNeighbourDistance = activeNodeDistance + neighbours[neighbourNode]
        
        if (newNeighbourDistance < currentNeighbourDistance) {
          distances[neighbourNode] = newNeighbourDistance
          previous[neighbourNode] = node
        }
      });
      
      visited[node] = 1
    }
    
    let activeNode = findNearestNode(distances, visited)
  
    while(activeNode) {
      handleNode(activeNode)
      activeNode = findNearestNode(distances, visited)
    }
    
    return distances;
  }

  module.exports = dijkstra