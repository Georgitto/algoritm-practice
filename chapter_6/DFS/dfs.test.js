const dfs = require('./dfs')

const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
}

describe('DFS', () => {
    test('Start A', () => {
        expect(dfs(graph, 'A')).toEqual(['A', 'D', 'E', 'F', 'B', 'C'])
    })
})