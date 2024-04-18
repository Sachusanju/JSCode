function details(name, age, phno, location='Mysore') {
    //console.log("The person details are" + " " +name+ " " +age+ " " +phno+ " "+location)
    console.log(arguments);
    console.log(`The person details are 
    ${name} 
    ${age} 
    ${phno}
    ${location}`)
}

details('abc', 30, 123456789)
details('abc', 30, 123456789, 'Tumkur', 623874,'mysore', 79890)
details('abc', 'Mysore')