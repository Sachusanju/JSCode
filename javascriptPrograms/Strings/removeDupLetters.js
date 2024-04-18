let str = 'hello world'
let newstr = ''
function duplicatestr(text) {
    for(i=0;i<text.length;i++)
    {
        var count = 0
        for (j=0;j<text.length;j++)
        {
            if(text[i]==text[j])
            {
                if(j<i)
                   break;
                else
                    count++
            }
        } 
        if(count>=1)
                newstr= newstr+text[i]       
    }
    console.log(newstr);
}

duplicatestr(str)