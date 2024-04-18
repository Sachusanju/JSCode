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

//to delete
delete personDetails.address
console.log(personDetails);

//to add
personDetails.location = ['tumkur','hubli']
console.log(personDetails);

//to modify
personDetails.age = 32
console.log(personDetails.age);