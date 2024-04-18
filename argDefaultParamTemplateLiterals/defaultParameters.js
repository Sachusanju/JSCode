function details(name, age = 30, phno, location='tumkur') {
    console.log("The person details are" + " " +name+ " " +age+ " " +phno+ " "+location)
    console.log(arguments);
}

details('abc', undefined, 123456789)
details('abc', 30, 123456789, 'Mysore', 623874,'tumkur', 79890)
details('abc', 45,9754367,'Mysore')