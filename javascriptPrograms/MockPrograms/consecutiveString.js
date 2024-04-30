function consecutivestr(str) {
    let consecutiveword = [];
    let currentsequence = '';
    for(let i=0;i<=str.length;i++)
    {
        if(str.charCodeAt(i)===str.charCodeAt(i-1) + 1)
        {
            //console.log(i);
            currentsequence+=str[i];
        }
        else{
            if(currentsequence.length>1)
                {
                    consecutiveword.push(currentsequence);    
                }
            currentsequence = str[i];
        }
    }
    console.log(consecutiveword);
}

 let word = "cddjyijklm";
 consecutivestr(word);
