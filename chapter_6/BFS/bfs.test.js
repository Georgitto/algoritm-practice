const bfs = require('./bfs')

const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
}

describe('BFS', () => {
    test('Start at A', () => {
        expect(bfs(graph, 'A')).toEqual(['A', 'B', 'D', 'C', 'E', 'F'])
    })

    test('Start at B', () => {
        expect(bfs(graph, 'B')).toEqual(['B', 'A', 'C', 'E', 'D', 'F'])
    })
})