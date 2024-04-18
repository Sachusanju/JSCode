//for random number generate within 100
console.log(Math.random()*100);

let num = 23.5
//ceil method
console.log(Math.ceil(num));    //24

//floor method
console.log(Math.floor(num));   //23

//round() method
console.log(Math.round(num));   //24

//trunc method
console.log(Math.trunc(num));   //23

//max method
let arr = [23,56,12,6,9,34] 
let max = Math.max(...arr)
console.log(max);   //56
//or
console.log(Math.max(23,56,12,6,9,34)); //56

//min method
console.log(Math.min(...arr))   //6
//or
console.log(Math.min(23,56,12,6,9,34)); //6

//pow method
console.log(Math.pow(2,3)); //8

//sqrt method
console.log(Math.sqrt(81)); //9
