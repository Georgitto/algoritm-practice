const binarySearch = require('./binarySearch')

describe('Binary Search', () => {
    test('[-1,0,3,5,9,12], 9', () => {
        expect(binarySearch([-1,0,3,5,9,12], 9)).toBe(9)
    })

    test('[-1,0,3,5,9,12], 2', () => {
        expect(binarySearch([-1,0,3,5,9,12], 2)).toBe(null)
    })

    test('[], 2', () => {
        expect(binarySearch([], 2)).toBe(null)
    })
})