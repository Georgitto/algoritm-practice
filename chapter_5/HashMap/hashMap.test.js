const createHashMap = require('./hashMap')

describe('Hash Map', () => {
    const checkVoters = createHashMap()

    test('Mike, Success!', () => {
        expect(checkVoters('Mike')).toBe('Success!')
    })
})