let str = "welcome to coding beauty"
let word = str.split(" ")
// let str1=[...word]
// console.log(...str1);


for(let i in word)
{
    if('aeiouAEIOU'.includes(word[i].charAt(2)))
    {
        word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1)
    }
}
console.log(word.join(" "))