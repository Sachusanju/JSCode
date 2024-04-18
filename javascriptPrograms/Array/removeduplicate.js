var arr = [23,'js',56,12,'js',23,55]
function remCopy(array)
{
    let i, j
    let newarr = []
    for(i=0;i<array.length;i++)
    {
        var count = 0
        
        for(j=0;j<array.length;j++)
        {
            if(array[i]==array[j] && j<i)
            {
                break;
            }
                count++
        }
        if(count>1)
            newarr.push(array[i]);
    }
console.log(newarr);
    
}

remCopy(arr)