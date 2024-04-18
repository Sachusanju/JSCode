function details(name, age, phno, location) {
    console.log("The person details are" + " " +name+ " " +age+ " " +phno+ " "+location)
    console.log(arguments);
}

details('abc', 30, 123456789, 'Mysore')
details('abc', 30, 123456789, 'Mysore', 623874,'tumkur', 79890)
details('abc', 'Mysore')

let data = (sname,age,phone,location)=>
{
    console.log(arguments);
}
data('amith', 30, 341254127, 'mumbai')