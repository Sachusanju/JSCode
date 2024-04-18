var arr = [12,4,8,3,45,23,67]

function sortNum(array) 
{
    let temp, i, j
   for(i=0;i<array.length;i++)
   {
        for(j=i+1;j<array.length;j++)
        {
            if(array[i]>array[j])
            {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp

            }

        }
        console.log(array); 
   }
   console.log(array); 
} 


sortNum(arr)