const selectionSort = require('./selectionSort')

describe('Selection Sort', () => {
    test('[-1,0,3,5,9,12]', () => {
        expect(selectionSort([-1,0,3,5,9,12])).toEqual([-1,0,3,5,9,12])
    })

    test('[12,9,5,3,0,-1]', () => {
        expect(selectionSort([12,9,5,3,0,-1])).toEqual([-1,0,3,5,9,12])
    })
    
    test('[0,0,0,0,0,0]', () => {
        expect(selectionSort([0,0,0,0,0,0])).toEqual([0,0,0,0,0,0])
    })
})