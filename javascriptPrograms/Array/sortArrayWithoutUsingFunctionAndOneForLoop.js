let num = [23,13,4,67,75,45]
let temp, i 
for(i=0;i<num.length;i++)
{
    if(num[i]>num[i+1])
    {
        temp = num[i]
        num[i] = num[i+1]
        num[i+1] = temp
        i= -1
    }
    
}

console.log(num);
