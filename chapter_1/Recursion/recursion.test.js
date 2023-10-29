const recursionSearch = require('./recursion')

describe('Recursion Search', () => {
    const someObject = {
        a: {
            value: 10
        },
        b: {
            value: 8,
            c: {
                value: 11
            },
            d: {
                value: 3,
                e: {
                    value: 1
                }    
            }
        }
    }
    
    test('Find existing value like 1', () => {
        expect(recursionSearch(someObject, 1)).toBe(true)
    })

    test('Find existing value like 10', () => {
        expect(recursionSearch(someObject, 10)).toBe(true)
    })

    test('Find not existing value like 2', () => {
        expect(recursionSearch(someObject, 2)).toBe(false)
    })
})