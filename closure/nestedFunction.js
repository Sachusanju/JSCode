//closure

let variable = 'global'

function outer(a) {
    var count = a //to achieve encapsulation we declare in outer function
    function inner() {
        console.log(++count +" "+variable+" "+ a);   
    }    
    //inner()
    return inner
}
//outer(100)
let ret = outer(100)
ret()
ret()
let ret1 = outer(200)
ret1()
