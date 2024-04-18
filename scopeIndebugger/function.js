var a = 30 //global
let b = 78  //script
const c  = 'javascript'//script
console.log(a); //30
console.log(b); //78
console.log(c); //javascript

{
    let a2 = 30 //global
    let b2 = 78 //block
    const c2  = 'javascript'    //block
    console.log(a2);    //30
    console.log(b2);    //78
    console.log(c2);    //javascript
}



function localscope() {
    var a1 = 20 //local
    let b1 = 10 //local
    const c1  = 'java'    //local
    console.log(a1);    //20
    console.log(b1);    //10
    console.log(c1);    //java

    console.log(a2);//undefined
    fun1(500)
    function fun1(d) {
        console.log(d)  //500
        console.log(a2);//undefined
    }

    {
        var a2 = 30 //local
        let b2 = 789 //block
        const c2  = 'hello'    //block
        

        console.log(a1);    //20
        console.log(b1);    //10
        console.log(c1);    //java

        console.log(a2);    //30

        console.log(a);     //30
        console.log(b);     //78
        console.log(c);     //javascript
    }
}

localscope()
//console.log(a1);  //since it is local we cannot access it
//console.log(b2);
{
    var a3 = 30 //global
    let b3 = 78 //block
    const c3  = 'javascript'    //block
    console.log(a3);    //30
    console.log(b3);    //78
    console.log(c3);    //javascript
}

console.log(a3)