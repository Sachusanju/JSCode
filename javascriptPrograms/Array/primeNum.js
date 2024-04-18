var num = [11,13,9,21,35,37]
function prime(arr) {
    for (const number of arr) {
        let isPrime = true
       for(let i = 2; i<number/2; i++)
       {
            if(number%i==0)
            {
                isPrime = false;
                break;
            }  
       }
       if(isPrime)
            console.log(number);
    }
    
}

prime(num)