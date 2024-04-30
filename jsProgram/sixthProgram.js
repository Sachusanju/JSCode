let str = 'testyantra'
let arr = str.split(''), vow=[]
for (ele of arr)
{
    if('aeiouAEIOU'.includes(ele))
    {
        vow.push(ele)
    }
}
console.log(vow)