let arr = [1,2,3,4,5]
//without destructuring
let a = arr[0]
let b = arr[4]
console.log(a,b);

//using array destructuring
let [x,y,z] = arr
console.log(x,y,z)

//destructuring in object
let personDetails = {
    pname : 'abc',
    age : 35,
    "phone no" : 7878798789,
    address : ['Bangalore','Mysore','Mandya'],
    details : function(){
        console.log('The details are' + " "+this.pname+" "+this.age);
    },
    spouse : {
        sname : 'xyz',
        sage : 30
    }
}

let [first,second] = personDetails.address
console.log(first,second);

//for swapping two values using destructuring
[first,second] = [second,first]
console.log("After swapping ===> "+first,second);

//to override an array element using destructuring

let [e,f=1] = [8]
console.log(e,f)

//spread parameter
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray);