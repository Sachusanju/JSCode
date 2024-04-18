//standard function
function add(a,b) {
    var sum = a+b
    return sum
}
console.log(add(4,7));  //invoking the function

//expression function
let subt = function (c,d) {
    var sub = c-d
    return sub
}
console.log(subt(10,6));    //invoking the function

//immediately invokable function ()()
(function iif(e,f)
{
    console.log(e*f)
})
(5,10)

//arrow function using multiple arguments and multiple line implementation
var div = (g,h) => {
    return g/h
}
console.log(div(12,6))

//arrow function using single argument and single line implementation
let arw = l => l-2
console.log(arw(20))

//arrow function with single argument and multiple line implementation
let arw2 = k =>
{
    return k*4
}
console.log(arw2(8));

//arrow function with mutiple argument and single line implementation
let arw3 = (a,b) => a+b
console.log(arw3(10,4));