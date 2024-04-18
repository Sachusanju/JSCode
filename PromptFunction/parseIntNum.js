import Prompt from "prompt-sync";
const prom = Prompt()
let str = parseInt(prom('Enter a value: '))
let str1 = parseFloat(prom('Enter a value: '))
console.log(typeof(str)+ " " + typeof(str1));
//console.log(str+str1);
if(isNaN(str) && isNaN(str1))
{
    console.log(str+str1);
}