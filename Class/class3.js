class School
{
    constructor(sname,sid,age,std)
    {
        this.sname = sname
        this.sid = sid
        this.age = age
        this.std = std
    }
    printDetails() {
        console.log(`Students Details are
        Student: ${this.sname}
        SID : ${this.sid}
        age : ${this.age}
        std : ${this.std}`);
   }

}
let studentDetails = {
    sname : 'Sneha',
    sid : 1234,
    age : 34,
    std : '8th'
}
let stdetails = new School(studentDetails)
stdetails.printDetails()


