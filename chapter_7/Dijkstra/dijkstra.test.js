const dijkstra = require('./dijkstra')

let graph = {
    a: { b: 2, c: 1 },
    b: { f: 7 },
    c: { d: 5, e: 2 },
    d: { f: 2 },
    e: { f: 1 },
    f: { g: 1 },
    g: {},
}

describe('Dijkstra', () => {
    test('Start a', () => {
        expect(dijkstra(graph, 'a')).toEqual({ a: 0, b: 2, c: 1, d: 6, e: 3, f: 4, g: 5 })
    })

    test('Start b', () => {
        expect(dijkstra(graph, 'b')).toEqual({ a: 999999, b: 0, c: 999999, d: 999999, e: 999999, f: 7, g: 8 })
    })
})