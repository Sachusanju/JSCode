let arr = [123,34,7609,890,667,999]

function max(array) {
    let max = 0
    for (const num of array) {
        if(num>max)
        {
            max=num;
        }
    }
    return max
}

let finalMax = max(arr)
console.log(finalMax);