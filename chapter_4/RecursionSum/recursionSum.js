function recursionSum(arr) {
    if (!arr.length) return 0

    return arr[0] + recursionSum(arr.slice(1))
}

module.exports = recursionSum