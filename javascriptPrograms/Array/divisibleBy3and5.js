var num = [365,15,16,21,45]

function divisible(number) {
    for(i=0;i<num.length;i++)
    {
        if(number[i]%3==0 && number[i]%5==0)
        {
            console.log(number[i]+' is divisible by 3 and 5');
        }
        else if(number[i]%3==0)
        {
            console.log(number[i]+' is divisible by 3 and but not 5');
        } 
        else if(number[i]%5==0)
        {
            console.log(number[i]+' is divisible by 5 and but not 3');
        } 
        else
        {
            console.log(number[i]+' is not divisible by 3 and 5');
        }
    }
}

divisible(num)