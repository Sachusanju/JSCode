let number = [23,13,4,67,75,45]
let count1 = 0 
function sortnum(num, count) {
    
    let i, temp
    for(i=0;i<num.length;i++)
    {
        temp = 0
        if(num[i]>num[i+1])
        {
            temp = num[i]
            num[i] = num[i+1]
            num[i+1] = temp
        }  
    }
    //console.log(num+i+num.length);
    if(i==num.length && count<num.length)
        {
            count++;
            //console.log(count);
            sortnum(num)
        }
    return num
}

let sortedArray = sortnum(number,count1)
console.log(sortedArray);

