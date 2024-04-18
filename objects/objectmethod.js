let personDetails = {
    pname : 'abc',
    age : 35,
    "phone no" : 7878798789,
    address : ['Bangalore','Mysore'],
    details : function(){
        console.log('The details are' + " "+this.pname+" "+this.age);
    },
    spouse : {
        sname : 'xyz',
        sage : 30
    }
}

let obj = new Object()
obj.objname = 'object'
obj.objno = [11,54,899]

console.log(personDetails.hasOwnProperty('pname')); //true
console.log(obj.propertyIsEnumerable('objname'));   //true
console.log(personDetails.propertyIsEnumerable('pname')); //true
const arr = [1,3,5,7,9]
console.log(arr.propertyIsEnumerable());
console.log(obj.propertyIsEnumerable('objno'));

console.log(Object.entries(personDetails))
console.log(Object.keys(personDetails));

//to add property
Object.defineProperty(personDetails, 'prop',
{
    enumerable: true,
    value : 12134634
})
console.log(Object.values(personDetails)); //value-> it fetches only the values
console.log(Object.values(personDetails['pname']));