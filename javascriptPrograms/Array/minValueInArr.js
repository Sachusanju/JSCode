let arr = [23,78,9,787,7,89]

function min(array) {
    var min = array[0]
    for (const i in array) {
        if(min > array[i])
        {
            min = array[i]
        }
    }
    return min
}

var finalMin = min(arr)
console.log(finalMin);