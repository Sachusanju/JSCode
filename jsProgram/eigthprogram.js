// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let str = 'AxB5#*eZ45jhjhh40gcg2000';
let numarr = []
let currentNum = ''
for (char of str)
{
   
    if(!isNaN(parseInt(char)))
    {
        currentNum+=char
    }
    else
    {
        if(currentNum!=='')
        {
            numarr.push(parseInt(currentNum))
            currentNum = ''
        }
    }
    
}
 if(currentNum!=='')
        {
            numarr.push(parseInt(currentNum))
            
        }
console.log(numarr)

 function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
 console.log(sum(...numarr))







