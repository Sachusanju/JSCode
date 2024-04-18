let str = 'Hello World'
var i, vowel = 0, constant = 0

let str1 = str.replace(' ','')
const vowelLetter = ['a','e','i','o','u']
console.log(str1);
for(i=0;i<str1.length;i++)
{

    if(vowelLetter.includes(str1[i].toLowerCase()))
    { 
        vowel++
    }
    else if(str1.charAt[i]!='\t')
    {
        constant++
    }
}
console.log('vowel: '+ vowel +' constant: '+constant);