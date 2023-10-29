const quickSort = require('./quickSort')

describe('Quick Sort', () => {
    test('[5,4,3,2,1], [1,2,3,4,5]', () => {
        expect(quickSort([5,4,3,2,1])).toEqual([1,2,3,4,5])
    })

    test('[5,3], [3,5]', () => {
        expect(quickSort([5,3])).toEqual([3,5])
    })

    test('[], []', () => {
        expect(quickSort([])).toEqual([])
    })
})