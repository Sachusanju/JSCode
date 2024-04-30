let str = "AxB1#*eZ8";
console.log(str.split('').reverse().join(''))
let upper = '',lower = '',num = '',specialChar = '';
console.log('9'.charCodeAt())
for (i in str)
{
    
    if(str.charCodeAt(i)>='65' && str.charCodeAt(i)<='90')
        upper+=str[i];
    else if(str.charCodeAt(i)>='97' && str.charCodeAt(i)<='122')
        lower+=str[i];
    else if(str.charCodeAt(i)>='0'.charCodeAt() && str.charCodeAt(i)<='9'.charCodeAt())
        num+=str[i];
    else
        specialChar+=str[i];
    
}
console.log(`
${upper}
${lower}
${num}
${specialChar}`)