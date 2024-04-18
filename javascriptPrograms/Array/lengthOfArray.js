let arr = [123,578,'hi','a',12.5,'aranya','null','undefined']

function countArr(array) {
    let count = 0
    for (const ele of arr) {
        count++
    }
   return count 
}

var count = countArr(arr)
console.log('Length of an array: '+count);