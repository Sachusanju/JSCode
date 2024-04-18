const person = {
    pname : 'Samantha',
    age : 34,
    height : 6.1,
    cars : [
        {name : 'BMW',
         models : ['model1', 'model2','model3']  
        },
        {
            name : 'tesla',
         models : ['model4', 'model5','model6'] 
        }
    ]

}

console.log(person.cars[1]);
console.log(person.cars[1].models);