//constructor function
function person(empName, age, details)
{
    this.empName = empName
    this.age = age
    this.details = details
}

let data1 = new person('Bhavani',56 ,function details(){console.log('Details are \n'+this.empName+'\n'+this.age);})
console.log(data1);
console.log(data1.empName);
data1.details()

let details1 = function()
{
    console.log('Details are \n'+this.empName+'\n'+this.age); 
}
let data2  = new person('Durga',34, details1)
data2.details()


//class
class person1
{
    constructor (pname, age)
    {
        this.pname = pname
        this.age = age
    }
}
let dt =new person1('Arun',100)
console.log(dt);