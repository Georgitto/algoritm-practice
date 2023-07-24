const binarySearch = (arr, item) => {
    if (arr.length === 0) return null

    let leftPointer = 0
    let rightPointer = arr.length - 1

    while (leftPointer <= rightPointer) {
        let midPointer = Math.floor((leftPointer + rightPointer) / 2)

        if (item === arr[midPointer]) return item
        if (item < arr[midPointer]) {
            rightPointer = midPointer - 1
        } else {
            leftPointer = midPointer + 1
        }
    }

    return null
}

module.exports = binarySearch