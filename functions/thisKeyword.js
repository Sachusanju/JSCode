"use strict"
console.log(this)   //this is pointing to window object

function a() {
    console.log(this); //under strict mode this is undefined, in no strict mode this points to window object
}

let b = () =>{
    console.log(this); //this is pointing to window object
}
a()
b()

let obj = {
    pname : 'aaa',
    greet : function () {
        console.log(this);  //this pointing to window object itself
        console.log(this.pname);   //aaa
    },
    b : () => {
        console.log(this);  //this is pointing to window object
        console.log(this.pname); //this is undefined in strict and non strict mode
    }

}
obj.greet()
obj.b()