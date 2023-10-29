function createHashMap() {
    const hashMap = new Map([
        ['Alex', true],
        ['Bob', true],
        ['Jef', true],
        ['Greg', true],
    ])

    return function(name) {
        if(hashMap.has(name)) return 'Kick him out!'
        hashMap.set(name, true)
        return 'Success!'
    }
}

module.exports = createHashMap