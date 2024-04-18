let arr = [12,6,7,9,3,4,5,6,67,55]

function oddnum(array) {
    var oddnum = [];
    var evenum = [];
    for(i=0;i<array.length;i++)
    {
        // num = array[i]
        //console.log(array[i]);
        if(array[i]%2==0)
        {
            evenum.push(array[i])
        }
        else
        {
           oddnum.push(array[i])
        }
    }
    console.log(evenum)
    console.log(oddnum)
}

oddnum(arr)