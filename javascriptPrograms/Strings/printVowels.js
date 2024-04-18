import Prompt from "prompt-sync";
const prom = new Prompt()
let vowel = ''
let vowelLetter = ['a','e','i','o','u']
let str1 = String(prom(`Enter a String`))
for (i=0;i<str1.length;i++) {
    if(vowelLetter.includes(str1[i].toLowerCase()))
    {
       vowel= vowel+str1[i];
    }
}
console.log(vowel);