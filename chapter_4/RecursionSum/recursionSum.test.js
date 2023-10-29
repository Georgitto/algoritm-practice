const recursionSum = require('./recursionSum')

describe('Recursion Sum', () => {
    test('[1,2,3,4], 10', () => {
        expect(recursionSum([1,2,3,4])).toBe(10)
    })

    test('[], 0', () => {
        expect(recursionSum([])).toBe(0)
    })
})