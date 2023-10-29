function recursionSearch(obj, searchValue) {
    const keys = Object.keys(obj)

    for(let i = 0; i < keys.length; i++) {
        if(typeof obj[keys[i]] === 'number') {
            if(obj[keys[i]] === searchValue){ 
                return true
            } else {
                continue
            }
        }
        if(recursionSearch(obj[keys[i]], searchValue)) return true

    }

    return false
}

module.exports = recursionSearch