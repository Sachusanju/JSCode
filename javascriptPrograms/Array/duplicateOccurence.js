let arr = [2,4,2,5,7,'js',4,6,7,7,'js',8,8,'js',9,11]
function  duplicate(array) {
    
    for(i=0;i<array.length;i++)
    {
        let count = 0
        for(j=0;j<array.length;j++)
        {
            if(array[i]==array[j])
            {
                if(j<i)
                {
                    break
                }
                count++
            }
            
        }
        if(count>1)
        console.log(array[i]+' : '+count);
    }
    
}

duplicate(arr)