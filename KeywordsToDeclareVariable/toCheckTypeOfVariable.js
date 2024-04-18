let str
console.log(typeof(str))

str = null
console.log(typeof(str))

str = 'jenkins'
console.log(typeof(str))

str = false
console.log(typeof(str))

str = 100
console.log(typeof(str))

//using for in loop
var ch = [23,56,'first','second']
for (const value in ch) {
     if(typeof ch[value]==='string')
     {
        console.log(ch[value]);
     }
    }

//using for of loop
var arr  = [23.45,45,'hi','hello',null]
for (const iterator of arr) 
{
    if( typeof iterator === 'object')
    {
        console.log(iterator);
    }
}
