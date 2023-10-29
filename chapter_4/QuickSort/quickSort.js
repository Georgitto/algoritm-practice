function generateHelpfulArrays(arr, pivotIndex) {
    const smaller = []
    const greater = []

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= arr[pivotIndex]) {
            smaller.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }

    return { smaller, greater }
}

function quickSort(arr) {
    if(arr.length <= 1) {
        return arr
    }

    const pivotIndex = Math.floor(arr.length / 2)

    const { smaller, greater } = generateHelpfulArrays(arr, pivotIndex)

    const result = new Array().concat(quickSort(smaller), quickSort(greater))

    return result
}

module.exports = quickSort