let str = 'testyantra';
let vowelChar  = {}
for(let char of str)
{
    if('aeiouAEIOU'.includes(char))
    {
        if(vowelChar[char])
        {
            vowelChar[char]++
        }
        else
        {
            vowelChar[char]=1
        }
    }
}

for(let vowel in vowelChar )
{
    console.log(`${vowel}--->${vowelChar[vowel]}`)
}