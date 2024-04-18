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

//for in loop
for (const key in personDetails) {
      console.log(key+ ':' + personDetails[key]);
    
}

//for of loop will not work for objects to iterarte because object has a property called enumerable
// for (const value of personDetails) {
//     console.log(value);
// }

//to use for of loop first convert the object to an array using entries

let value = Object.entries(personDetails) 
for (const data of value) {
   // Object.entries(personDetails) 
    console.log(data);
}
