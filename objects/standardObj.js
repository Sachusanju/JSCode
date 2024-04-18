//standard way
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

//to access objects using dot notation
console.log(personDetails.age)  //35
console.log(personDetails.address[1]); //mysore
console.log(personDetails.spouse.sname); //xyz
console.log(personDetails);

//to access objects using bracket notation
console.log(personDetails['pname']);    //abc
console.log(personDetails["phone no"]); //7878798789
console.log(personDetails['spouse']['sage']); //30
console.log(personDetails['address'][1]);   //mysore