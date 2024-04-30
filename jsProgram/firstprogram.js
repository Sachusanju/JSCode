let str = "testyantra"
let i,j
for(i=0;i<str.length;i++)
{
    let count = 0;
    if(!'aeiouAEIOU'.includes(str[i]))
    {
    
        for(j=0;j<str.length;j++)
        {
            if(str[i]==str[j])
            {
                if(j<i) break;
                count++;
            }
        }
    }
    if(count>=1)
    console.log(str[i]+"---->"+count)
}