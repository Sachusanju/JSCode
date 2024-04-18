class Encapsulation1
{
    #pin = 2000
    //to access private number
    get getpin()
    {
        return this.#pin
    }
    //to modify private number
    set setpin(val)
    {
        this.#pin = val
    }
}
//console.log(en,#pin);

let en = new Encapsulation1()
console.log(en.getpin);
en.setpin = 2020
console.log(en.getpin);