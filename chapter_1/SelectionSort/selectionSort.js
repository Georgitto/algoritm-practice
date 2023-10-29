function findSmallest(arr) {
    let smallestItem = arr[0]
    let smallestIndex = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < smallestItem) {
            smallestItem = arr[i]
            smallestIndex = i
        }
    }

    return smallestIndex
}

function selectionSort(arr) {
    let operationArray = [...arr]
    let sortedArray = []

    for(let i = 0; i < arr.length; i++) {
        let smallestIndex = findSmallest(operationArray)
        sortedArray.push(operationArray[smallestIndex])
        operationArray.splice(smallestIndex, 1)
    }

    return sortedArray
}

module.exports = selectionSort