import Prompt from "prompt-sync";
const prom = Prompt()

let str = prom(`Enter a String: `);
let i,j
for(i=0;i<str.length;i++)
{
    let count = 0;
    for(j=0;j<str.length;j++)
    {
        if(str[i]==str[j])
        {
            if(j<i)
            {
                break;
            }
            count++
        }
    }
    if(count>=1)
        console.log(str[i]+ " : " +count);
}