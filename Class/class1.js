//E6 classes
class Student {
    a = 10  //non static variable
    static b = 20    //static variable

    //constructor
    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }

    static details()    //static method
    {
        let s = new Student()
        console.log(`Static variable ${Student.b} or ${this.b}
        Non static variable ${s.a}
        `);    //constructor is undefined because function is static

    }

    fdetails() {
        let s = new Student()
        console.log(`Non static variable ${s.a} or ${this.a}
        Non static variable ${Student.b}
        Student Details
        First Name : ${this.fname}
        Last Name: ${this.lname}`);
    }
}

let s1 = new Student('Samanyu', 'PS')
// s1.fdetails() //non static
// Student.details()   //static
// console.log(s1.lname );

class Teacher extends Student //Inheritance extending the class
{
    constructor(fname, lname, age) {
        super(fname, lname)
        this.age = age
    }

    tdetails() {
        super.fdetails()
        console.log('Teacher Details');
        console.log(`First Name: ${this.fname}
        Last Name: ${this.lname}
        age: ${this.age}`);

    }
}

let t = new Teacher('Karthik', 'Ramesh', 27)
//t.tdetails()

//export default new Student('Ananya','Ashu');
//export default new Teacher('Hemanth')
export default t