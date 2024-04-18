//prototype Object
let car = {
    model : 'Tesla',
    type : '4 stroke',
    owner : 'Sachitha',
    color : 'MidnightBlue',
    YOP : 2024,
    details : function details() {
        console.log(`
        Car details are
        =================
        ${this.model}
        ${this.type}
        ${this.owner}
        ${this.color}
        ${this.YOP}`);  
    }
}

//object create or child object
let newcar = Object.create(car)
console.log(newcar);
newcar.model = 'Audi'
newcar.type = '6-stroke'
newcar.newproperty = 'petrol'
console.log(newcar.newproperty);
console.log(Object.getPrototypeOf(newcar));
newcar.details()