let arrNum = [1,2,3,4,5,6]

function addOddNum(listOfNum) {
    var sum = 0
    for (const num of listOfNum) {
        if(num%2!=0)
        {
            sum+=num
            //console.log(sum);
        }
    }
    return sum
}

total = addOddNum(arrNum)
console.log(total);