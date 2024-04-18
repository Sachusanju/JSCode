let arr = [2,4,2,5,4,6,7,7,8,8]
function  duplicate(array) {
    let count = 0
    for(i=0;i<array.length;i++)
    {
        for(j=i+1;j<array.length;j++)
        {
            if(array[i]==array[j])
            {
                count++
                console.log(array[i]);
            }
        }
    }
    console.log('Number of duplicate elements are: '+count);
    
}

duplicate(arr)